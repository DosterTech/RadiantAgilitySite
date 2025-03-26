import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertContactSchema, insertChatMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from 'zod-validation-error';

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix
  
  // Lead capture form endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedLead = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedLead);
      
      // In a real implementation, we would integrate with email marketing platform here
      
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
        message: 'Hello! How can we help you today?',
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
      
      // Create bot response (in a real implementation, this would be more sophisticated)
      const botResponse = await storage.createChatMessage({
        sender: 'bot',
        message: "Thanks for your message! One of our consultants will get back to you shortly. In the meantime, would you like to schedule a free consultation?",
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

  const httpServer = createServer(app);
  return httpServer;
}
