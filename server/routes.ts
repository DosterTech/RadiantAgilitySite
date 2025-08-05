import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";
import { storage } from "./storage";
import { insertLeadSchema, insertContactSchema, insertChatMessageSchema, insertInquirySchema, insertEmailSubscriptionSchema, insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from 'zod-validation-error';
import { sendInquiryNotification, sendEmail, sendLeadMagnetEmail } from "./email";
import { sendWelcomeEmail, processDailyEmails } from "./emailCourse";
import crypto from "crypto";

// Admin authentication middleware
const adminAuth = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "Admin authentication required" });
  }
  
  const token = authHeader.substring(7);
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
  const expectedToken = crypto.createHash('sha256').update(adminPassword).digest('hex');
  
  if (token !== expectedToken) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }
  
  next();
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve flow-bingo static files
  app.use('/flow-bingo', express.static(path.join(process.cwd(), 'flow-bingo')));
  
  // Serve WIP calculator tool
  app.use('/wip-calculator', express.static(path.join(process.cwd(), 'flow-wip-calculator')));
  
  // Serve attached assets (PDFs, images, etc.) with proper MIME types
  app.use('/attached_assets', express.static(path.join(process.cwd(), 'attached_assets'), {
    setHeaders: (res, path) => {
      if (path.endsWith('.pdf')) {
        res.setHeader('Content-Type', 'application/pdf');
      }
    }
  }));

  // API routes with /api prefix
  
  // Test email endpoint for debugging
  app.post("/api/test-email", async (req, res) => {
    try {
      const success = await sendEmail({
        to: 'test@radiantagility.tech',
        from: 'noreply@radiantagility.tech', 
        subject: 'SendGrid Test Email',
        text: 'This is a test email to verify SendGrid configuration is working.',
        html: '<p>This is a test email to verify SendGrid configuration is working.</p>'
      });
      
      res.status(200).json({
        success,
        message: success ? "Test email sent successfully" : "Test email failed"
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to send test email",
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
  
  // Lead capture form endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedLead = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedLead);
      
      // Check if this is a Safe Sprint subscription
      if (validatedLead.service === "5-Day SAFe Sprint") {
        try {
          // Check if already subscribed
          const existingSubscription = await storage.getEmailSubscriptionByEmail(
            validatedLead.email, 
            'safe-sprint'
          );
          
          if (!existingSubscription) {
            // Create email subscription
            await storage.createEmailSubscription({
              email: validatedLead.email,
              name: validatedLead.name,
              courseType: 'safe-sprint'
            });
            
            // Send welcome email immediately
            await sendWelcomeEmail(validatedLead.email, validatedLead.name);
          }
        } catch (emailError) {
          console.error('Error setting up email course:', emailError);
          // Continue with success response even if email fails
        }
      }
      
      // Send download emails for lead magnets
      if (validatedLead.leadMagnet) {
        try {
          await sendLeadMagnetEmail(validatedLead);
        } catch (emailError) {
          console.error('Error sending lead magnet email:', emailError);
          // Continue with success response even if email fails
        }
      }
      
      res.status(201).json({
        success: true,
        message: "Thank you for your interest! We'll be in touch shortly.",
        data: lead
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: "Validation error", 
          errors: validationError.details 
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "Failed to submit lead information. Please try again."
        });
      }
    }
  });

  // Contact form endpoint
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedContact = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedContact);
      
      // In a real implementation, we would send email notification and CRM integration here
      
      res.status(201).json({
        success: true,
        message: "Thank you for your message! We'll respond within 24 hours.",
        data: contact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: "Validation error", 
          errors: validationError.details 
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "Failed to submit contact form. Please try again."
        });
      }
    }
  });

  // Chat widget endpoints
  app.post("/api/chat/session", async (req, res) => {
    try {
      const sessionId = storage.generateSessionId();
      
      // Create initial welcome message from bot
      await storage.createChatMessage({
        sender: 'bot',
        message: 'Welcome to Radiant Agility Technology! 👋 I\'m your virtual assistant. How can I help you today? Feel free to ask about our services, pricing, or how we can help your business grow.',
        sessionId
      });
      
      res.status(200).json({
        success: true,
        sessionId
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: "Failed to create chat session. Please try again."
      });
    }
  });

  app.post("/api/chat/messages", async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      
      if (!message || !sessionId) {
        return res.status(400).json({ 
          success: false,
          message: "Message and sessionId are required"
        });
      }
      
      // Save user message
      await storage.createChatMessage({
        sender: 'user',
        message,
        sessionId
      });
      
      // Create a more sophisticated keyword-based response system
      let botMessage = "Thanks for your message! One of our consultants will get back to you shortly. In the meantime, would you like to schedule a free consultation?";
      
      // Convert message to lowercase for case-insensitive matching
      const lowerCaseMessage = message.toLowerCase();
      
      // Simple keyword-based responses
      if (lowerCaseMessage.includes('pricing') || lowerCaseMessage.includes('cost') || lowerCaseMessage.includes('price')) {
        botMessage = "Our pricing depends on your specific needs and project scope. We offer flexible packages starting from $2,000 for basic marketing automation setup, and custom app development starting at $5,000. Would you like to schedule a consultation to discuss your requirements in detail?";
      } 
      else if (lowerCaseMessage.includes('service') || lowerCaseMessage.includes('offer')) {
        botMessage = "We offer a range of services including marketing automation, custom app development, lead generation strategies, and agility consulting. Which specific service are you interested in learning more about?";
      }
      else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('talk to') || lowerCaseMessage.includes('speak with')) {
        botMessage = "You can reach our team directly at contact@radiantagility.tech or call us at (555) 123-4567. Alternatively, you can fill out our contact form and we'll get back to you within 24 hours. Would you like me to direct you to our contact page?";
      }
      else if (lowerCaseMessage.includes('marketing') || lowerCaseMessage.includes('automation')) {
        botMessage = "Our marketing automation services help businesses streamline their marketing efforts, increase conversion rates, and improve ROI. We specialize in email marketing automation, lead nurturing workflows, and CRM integration. Would you like to learn more about our marketing automation solutions?";
      }
      else if (lowerCaseMessage.includes('app') || lowerCaseMessage.includes('development') || lowerCaseMessage.includes('software')) {
        botMessage = "Our app development team creates custom web and mobile applications tailored to your business needs. We follow agile methodologies to ensure rapid development and high-quality results. Our expertise includes progressive web apps, mobile apps, and enterprise software solutions. What type of application are you looking to develop?";
      }
      else if (lowerCaseMessage.includes('agile') || lowerCaseMessage.includes('agility') || lowerCaseMessage.includes('consulting')) {
        botMessage = "Our agility consulting services help organizations adopt agile methodologies and improve their business processes. We offer training, coaching, and implementation support to help your team become more efficient and responsive to market changes. Would you like to learn more about how agile practices can transform your business?";
      }
      else if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hey')) {
        botMessage = "Hello! Welcome to Radiant Agility Technology. How can I assist you today? We offer marketing automation, app development, and agility consulting services.";
      }
      else if (lowerCaseMessage.includes('thank')) {
        botMessage = "You're welcome! If you have any other questions, feel free to ask. We're here to help you transform your business with our technology solutions.";
      }
      else if (lowerCaseMessage.includes('location') || lowerCaseMessage.includes('address') || lowerCaseMessage.includes('where')) {
        botMessage = "Our main office is located at 8 The Green, Dover, Delaware. However, we operate remotely with team members across the US, allowing us to serve clients nationwide. Would you like to schedule a virtual meeting with our team?";
      }
      else if (lowerCaseMessage.includes('experience') || lowerCaseMessage.includes('background') || lowerCaseMessage.includes('expertise')) {
        botMessage = "Radiant Agility Technology is a fresh new company founded in 2023. While we're new as a business, we bring genuine passion, current industry knowledge, and a dedicated approach to each project. We focus on delivering personalized solutions rather than using one-size-fits-all templates. What matters most to us is understanding your unique business needs and providing the right solution for you.";
      }
      else if (lowerCaseMessage.includes('case study') || lowerCaseMessage.includes('example') || lowerCaseMessage.includes('portfolio')) {
        botMessage = "As a new company, we're actively building our portfolio with our first clients. We'd be happy to walk you through our approach to projects and show you detailed mockups of solutions we're currently developing. We believe in transparency and would love to discuss how we'd tackle your specific business challenges. Would you be interested in scheduling a discovery call to explore potential solutions?";
      }
      else if (lowerCaseMessage.includes('time') || lowerCaseMessage.includes('timeline') || lowerCaseMessage.includes('how long')) {
        botMessage = "Project timelines vary based on complexity and scope. Typically, our marketing automation setups take 2-4 weeks, while custom app development projects range from 2-6 months depending on requirements. We always work with clients to establish clear timelines and milestones at the beginning of each project. Would you like to discuss your specific project's potential timeline?";
      }
      else if (lowerCaseMessage.includes('blog') || lowerCaseMessage.includes('article') || lowerCaseMessage.includes('resource')) {
        botMessage = "We regularly publish articles and resources on our blog covering the latest trends in marketing automation, app development, and business agility. You can find these resources in the Blog section of our website. Is there a specific topic you're interested in learning more about?";
      }
      
      const botResponse = await storage.createChatMessage({
        sender: 'bot',
        message: botMessage,
        sessionId
      });
      
      res.status(201).json({
        success: true,
        data: botResponse
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: "Failed to process chat message. Please try again."
      });
    }
  });

  app.get("/api/chat/messages/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const messages = await storage.getChatMessagesBySessionId(sessionId);
      
      res.status(200).json({
        success: true,
        data: messages
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: "Failed to retrieve chat messages. Please try again."
      });
    }
  });

  // Inquiry endpoints for Contact Us feature
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedInquiry = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedInquiry);
      
      // Send email notification
      await sendInquiryNotification(inquiry);
      
      res.status(201).json({
        success: true,
        message: "Thank you for reaching out! We'll get back to you shortly.",
        data: inquiry
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: "Validation error", 
          errors: validationError.details 
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "Failed to submit inquiry. Please try again."
        });
      }
    }
  });

  // Admin login endpoint
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { password } = req.body;
      const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
      
      if (password === adminPassword) {
        const token = crypto.createHash('sha256').update(adminPassword).digest('hex');
        res.json({ 
          success: true, 
          token,
          message: "Admin login successful" 
        });
      } else {
        res.status(401).json({ 
          success: false, 
          message: "Invalid admin password" 
        });
      }
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Login failed" 
      });
    }
  });

  // Admin dashboard endpoints
  app.get("/api/admin/inquiries", adminAuth, async (req, res) => {
    try {
      const sortOrder = req.query.sort as 'newest' | 'oldest' || 'newest';
      const inquiries = await storage.getInquiries(sortOrder);
      
      res.status(200).json({
        success: true,
        data: inquiries
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: "Failed to retrieve inquiries."
      });
    }
  });

  app.get("/api/admin/inquiries/:id", adminAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const inquiry = await storage.getInquiry(id);
      
      if (!inquiry) {
        return res.status(404).json({
          success: false,
          message: "Inquiry not found"
        });
      }
      
      res.status(200).json({
        success: true,
        data: inquiry
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: "Failed to retrieve inquiry."
      });
    }
  });

  app.patch("/api/admin/inquiries/:id/read", adminAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.markInquiryAsRead(id);
      
      res.status(200).json({
        success: true,
        message: "Inquiry marked as read"
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: "Failed to mark inquiry as read."
      });
    }
  });

  app.patch("/api/admin/inquiries/:id/unread", adminAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.markInquiryAsUnread(id);
      
      res.status(200).json({
        success: true,
        message: "Inquiry marked as unread"
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: "Failed to mark inquiry as unread."
      });
    }
  });

  // Admin endpoint to manually trigger daily email processing
  app.post("/api/admin/process-emails", adminAuth, async (req, res) => {
    try {
      await processDailyEmails();
      res.json({
        success: true,
        message: "Daily emails processed successfully"
      });
    } catch (error) {
      console.error('Error processing daily emails:', error);
      res.status(500).json({
        success: false,
        message: "Error processing daily emails"
      });
    }
  });

  // Get email subscription stats (admin only)
  app.get("/api/admin/email-subscriptions", adminAuth, async (req, res) => {
    try {
      const subscriptions = await storage.getEmailSubscriptions('safe-sprint');
      res.json({
        success: true,
        data: subscriptions,
        stats: {
          total: subscriptions.length,
          active: subscriptions.filter(s => !s.completed).length,
          completed: subscriptions.filter(s => s.completed).length
        }
      });
    } catch (error) {
      console.error('Error fetching email subscriptions:', error);
      res.status(500).json({
        success: false,
        message: "Error fetching subscription data"
      });
    }
  });

  // Waitlist submission endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedWaitlist = insertWaitlistSchema.parse(req.body);
      
      // Check if already on waitlist for this session
      const existingWaitlist = await storage.getWaitlistByEmail(
        validatedWaitlist.email,
        validatedWaitlist.courseType,
        validatedWaitlist.sessionDate
      );
      
      if (existingWaitlist) {
        return res.status(400).json({
          success: false,
          message: "You're already on the waitlist for this session."
        });
      }
      
      const waitlist = await storage.createWaitlist(validatedWaitlist);
      
      // Send confirmation email
      try {
        const { sendEmail } = await import('./email');
        const courseName = validatedWaitlist.courseType === 'safe-scrum-master' ? 'SAFe Scrum Master' : validatedWaitlist.courseType;
        
        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #7c3aed;">✅ You're on the Waitlist!</h2>
            
            <p>Hi ${validatedWaitlist.name},</p>
            
            <p>Great news! You've been successfully added to the waitlist for:</p>
            
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <strong>Course:</strong> ${courseName} Certification<br>
              <strong>Session:</strong> ${validatedWaitlist.sessionDate}<br>
              <strong>Format:</strong> Live Virtual (Zoom)
            </div>
            
            <h3 style="color: #7c3aed;">What happens next?</h3>
            <ul>
              <li>You'll be the first to know when spots become available</li>
              <li>We'll email you immediately if seats are added to your preferred session</li>
              <li>When notified, register within 24 hours to secure your spot</li>
            </ul>
            
            <p>Questions? Reply to this email or contact us at <a href="mailto:support@radiantagility.tech">support@radiantagility.tech</a></p>
            
            <p>Thanks for choosing Radiant Agility!</p>
          </div>
        `;
        
        await sendEmail({
          to: validatedWaitlist.email,
          from: 'noreply@radiantagility.tech',
          subject: `✅ Waitlist Confirmation - ${courseName} (${validatedWaitlist.sessionDate})`,
          html: emailHtml,
          text: `Hi ${validatedWaitlist.name}, You've been added to the waitlist for ${courseName} Certification on ${validatedWaitlist.sessionDate}. We'll notify you when spots become available.`
        });
      } catch (emailError) {
        console.error('Error sending waitlist confirmation:', emailError);
        // Continue with success response even if email fails
      }
      
      res.status(201).json({
        success: true,
        message: "Successfully added to waitlist!",
        data: waitlist
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: "Validation error", 
          errors: validationError.details 
        });
      } else {
        console.error('Waitlist submission error:', error);
        res.status(500).json({ 
          success: false,
          message: "Failed to join waitlist. Please try again."
        });
      }
    }
  });

  // Admin endpoint to get leads with filtering
  app.get("/api/admin/leads", adminAuth, async (req, res) => {
    try {
      const { service } = req.query;
      const leads = await storage.getLeads();
      
      // Filter by service if specified
      const filteredLeads = service 
        ? leads.filter(lead => lead.service === service)
        : leads;
      
      res.json(filteredLeads);
    } catch (error) {
      console.error("Error fetching admin leads:", error);
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  const httpServer = createServer(app);
  
  // Simple email scheduler - process emails every hour
  setInterval(async () => {
    try {
      await processDailyEmails();
      console.log('Automated email processing completed');
    } catch (error) {
      console.error('Error in automated email processing:', error);
    }
  }, 60 * 60 * 1000); // Run every hour

  return httpServer;
}
