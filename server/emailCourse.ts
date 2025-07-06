import { sendEmail } from './email';
import { storage } from './storage';
import type { EmailSubscription } from '@shared/schema';

interface CourseEmailContent {
  subject: string;
  text: string;
  html: string;
}

// 5-Day SAFe Sprint Course Content
const safeCourseContent: { [key: number]: CourseEmailContent } = {
  0: {
    subject: "🎯 Welcome to Your 5-Day SAFe Sprint!",
    text: `
Welcome to Your 5-Day SAFe Sprint!

Hi there,

Welcome to your journey toward SAFe mastery! Over the next 5 days, you'll receive bite-sized lessons that will transform how you think about enterprise agility.

What to Expect:
• Day 1: SAFe Foundations - What is SAFe and why it matters
• Day 2: The Three Levels - Portfolio, Program, and Team levels
• Day 3: Agile Release Trains - The backbone of SAFe
• Day 4: Program Increment Planning - Quarterly alignment magic
• Day 5: Continuous Value Delivery - Making it all work together

Each lesson takes just 5 minutes to read and includes actionable insights you can apply immediately.

Ready to get started? Your first lesson arrives tomorrow!

Best regards,
Jasmine Doster
Radiant Agility Technology

P.S. Save this email address (noreply@radiantagility.tech) to your contacts so our lessons land in your inbox, not spam!
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #7C3AED;">🎯 Welcome to Your 5-Day SAFe Sprint!</h1>
        
        <p>Hi there,</p>
        
        <p>Welcome to your journey toward SAFe mastery! Over the next 5 days, you'll receive bite-sized lessons that will transform how you think about enterprise agility.</p>
        
        <h3 style="color: #DC2626;">What to Expect:</h3>
        <ul>
          <li><strong>Day 1:</strong> SAFe Foundations - What is SAFe and why it matters</li>
          <li><strong>Day 2:</strong> The Three Levels - Portfolio, Program, and Team levels</li>
          <li><strong>Day 3:</strong> Agile Release Trains - The backbone of SAFe</li>
          <li><strong>Day 4:</strong> Program Increment Planning - Quarterly alignment magic</li>
          <li><strong>Day 5:</strong> Continuous Value Delivery - Making it all work together</li>
        </ul>
        
        <p>Each lesson takes just 5 minutes to read and includes actionable insights you can apply immediately.</p>
        
        <p><strong>Ready to get started? Your first lesson arrives tomorrow!</strong></p>
        
        <p>Best regards,<br>
        <strong>Jasmine Doster</strong><br>
        Radiant Agility Technology</p>
        
        <p style="font-size: 12px; color: #666;">P.S. Save this email address (noreply@radiantagility.tech) to your contacts so our lessons land in your inbox, not spam!</p>
      </div>
    `
  },
  1: {
    subject: "Day 1: SAFe Foundations - What You Need to Know",
    text: `
Day 1: SAFe Foundations - What You Need to Know

Hi there,

Welcome to Day 1 of your SAFe Sprint! Today, we're laying the foundation.

What is SAFe?
SAFe (Scaled Agile Framework) is the world's leading framework for scaling agile practices across large organizations. Think of it as the bridge between startup agility and enterprise scale.

Why SAFe Matters:
• 79% faster time-to-market
• 67% improvement in product quality  
• 50% increase in employee engagement

The Big Picture:
SAFe isn't just about being agile—it's about being agile at scale. While Scrum works beautifully for small teams, SAFe helps hundreds or thousands of people work together with the same agile mindset.

Today's Action Item:
Think about your organization. Where do you see silos that slow down delivery? That's where SAFe can help.

Tomorrow: We'll explore SAFe's three levels and how they work together.

Questions? Hit reply—I read every email!

Best,
Jasmine Doster
Radiant Agility Technology
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #7C3AED;">Day 1: SAFe Foundations - What You Need to Know</h1>
        
        <p>Hi there,</p>
        
        <p>Welcome to Day 1 of your SAFe Sprint! Today, we're laying the foundation.</p>
        
        <h3 style="color: #DC2626;">What is SAFe?</h3>
        <p>SAFe (Scaled Agile Framework) is the world's leading framework for scaling agile practices across large organizations. Think of it as the bridge between startup agility and enterprise scale.</p>
        
        <h3 style="color: #DC2626;">Why SAFe Matters:</h3>
        <ul>
          <li>79% faster time-to-market</li>
          <li>67% improvement in product quality</li>
          <li>50% increase in employee engagement</li>
        </ul>
        
        <h3 style="color: #DC2626;">The Big Picture:</h3>
        <p>SAFe isn't just about being agile—it's about being agile at scale. While Scrum works beautifully for small teams, SAFe helps hundreds or thousands of people work together with the same agile mindset.</p>
        
        <div style="background-color: #FEF3C7; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #92400E; margin-top: 0;">Today's Action Item:</h4>
          <p style="margin-bottom: 0;">Think about your organization. Where do you see silos that slow down delivery? That's where SAFe can help.</p>
        </div>
        
        <p><strong>Tomorrow:</strong> We'll explore SAFe's three levels and how they work together.</p>
        
        <p>Questions? Hit reply—I read every email!</p>
        
        <p>Best,<br>
        <strong>Jasmine Doster</strong><br>
        Radiant Agility Technology</p>
      </div>
    `
  },
  2: {
    subject: "Day 2: The Three Levels That Make SAFe Work",
    text: `
Day 2: The Three Levels That Make SAFe Work

Hi there,

Yesterday we covered the "what" of SAFe. Today, let's dive into the "how"—SAFe's three operating levels.

The Three Levels:

1. PORTFOLIO LEVEL
Think CEO and strategy. This level focuses on funding, governance, and ensuring work aligns with business strategy.

2. PROGRAM LEVEL  
Think middle management and coordination. Multiple teams working together on the same product or solution.

3. TEAM LEVEL
Think individual Scrum teams. The familiar world of sprints, standups, and retrospectives.

The Magic Connection:
Each level feeds the others. Strategy flows down, feedback flows up, and value flows through all three levels continuously.

Real-World Example:
Portfolio says "We need a mobile app"
Program coordinates 5 teams to build different app features
Teams deliver working software every 2 weeks

Today's Action Item:
Map your current role to one of these levels. Understanding where you sit helps you see the bigger picture.

Tomorrow: We'll explore Agile Release Trains—the engine that drives everything.

Best,
Jasmine Doster
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #7C3AED;">Day 2: The Three Levels That Make SAFe Work</h1>
        
        <p>Hi there,</p>
        
        <p>Yesterday we covered the "what" of SAFe. Today, let's dive into the "how"—SAFe's three operating levels.</p>
        
        <h3 style="color: #DC2626;">The Three Levels:</h3>
        
        <div style="background-color: #EEF2FF; padding: 15px; border-radius: 8px; margin: 10px 0;">
          <h4 style="color: #4338CA; margin-top: 0;">1. PORTFOLIO LEVEL</h4>
          <p style="margin-bottom: 0;">Think CEO and strategy. This level focuses on funding, governance, and ensuring work aligns with business strategy.</p>
        </div>
        
        <div style="background-color: #F0FDF4; padding: 15px; border-radius: 8px; margin: 10px 0;">
          <h4 style="color: #166534; margin-top: 0;">2. PROGRAM LEVEL</h4>
          <p style="margin-bottom: 0;">Think middle management and coordination. Multiple teams working together on the same product or solution.</p>
        </div>
        
        <div style="background-color: #FEF3C7; padding: 15px; border-radius: 8px; margin: 10px 0;">
          <h4 style="color: #92400E; margin-top: 0;">3. TEAM LEVEL</h4>
          <p style="margin-bottom: 0;">Think individual Scrum teams. The familiar world of sprints, standups, and retrospectives.</p>
        </div>
        
        <h3 style="color: #DC2626;">The Magic Connection:</h3>
        <p>Each level feeds the others. Strategy flows down, feedback flows up, and value flows through all three levels continuously.</p>
        
        <h3 style="color: #DC2626;">Real-World Example:</h3>
        <ul>
          <li><strong>Portfolio says:</strong> "We need a mobile app"</li>
          <li><strong>Program coordinates:</strong> 5 teams to build different app features</li>
          <li><strong>Teams deliver:</strong> working software every 2 weeks</li>
        </ul>
        
        <div style="background-color: #FEF3C7; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #92400E; margin-top: 0;">Today's Action Item:</h4>
          <p style="margin-bottom: 0;">Map your current role to one of these levels. Understanding where you sit helps you see the bigger picture.</p>
        </div>
        
        <p><strong>Tomorrow:</strong> We'll explore Agile Release Trains—the engine that drives everything.</p>
        
        <p>Best,<br>
        <strong>Jasmine Doster</strong></p>
      </div>
    `
  },
  3: {
    subject: "Day 3: Agile Release Trains - The Heartbeat of SAFe",
    text: `
Day 3: Agile Release Trains - The Heartbeat of SAFe

Hi there,

Today we're diving into one of SAFe's most powerful concepts: the Agile Release Train (ART).

What is an ART?
Imagine a train where each car is a different Scrum team, all moving together toward the same destination. That's an ART—typically 5-12 teams working on the same solution.

Why ARTs Work:
• Shared mission and vision
• Synchronized delivery every 10 weeks
• Cross-team collaboration becomes natural
• Dependencies get managed, not ignored

The ART Roles That Matter:
- Release Train Engineer (RTE): The conductor keeping everything on track
- Product Management: The navigator setting direction
- System Architect: The engineer ensuring technical integrity

Real Impact:
Companies using ARTs report 30-75% faster delivery and dramatically better quality because teams aren't working in silos anymore.

Today's Action Item:
Think about the teams around you. If they were train cars, what would need to change to get them all moving in the same direction?

Tomorrow: We'll explore PI Planning—the quarterly event that makes it all possible.

Best,
Jasmine Doster
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #7C3AED;">Day 3: Agile Release Trains - The Heartbeat of SAFe</h1>
        
        <p>Hi there,</p>
        
        <p>Today we're diving into one of SAFe's most powerful concepts: the Agile Release Train (ART).</p>
        
        <h3 style="color: #DC2626;">What is an ART?</h3>
        <p>Imagine a train where each car is a different Scrum team, all moving together toward the same destination. That's an ART—typically 5-12 teams working on the same solution.</p>
        
        <h3 style="color: #DC2626;">Why ARTs Work:</h3>
        <ul>
          <li>Shared mission and vision</li>
          <li>Synchronized delivery every 10 weeks</li>
          <li>Cross-team collaboration becomes natural</li>
          <li>Dependencies get managed, not ignored</li>
        </ul>
        
        <h3 style="color: #DC2626;">The ART Roles That Matter:</h3>
        <ul>
          <li><strong>Release Train Engineer (RTE):</strong> The conductor keeping everything on track</li>
          <li><strong>Product Management:</strong> The navigator setting direction</li>
          <li><strong>System Architect:</strong> The engineer ensuring technical integrity</li>
        </ul>
        
        <div style="background-color: #EEF2FF; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #4338CA; margin-top: 0;">Real Impact:</h4>
          <p style="margin-bottom: 0;">Companies using ARTs report 30-75% faster delivery and dramatically better quality because teams aren't working in silos anymore.</p>
        </div>
        
        <div style="background-color: #FEF3C7; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #92400E; margin-top: 0;">Today's Action Item:</h4>
          <p style="margin-bottom: 0;">Think about the teams around you. If they were train cars, what would need to change to get them all moving in the same direction?</p>
        </div>
        
        <p><strong>Tomorrow:</strong> We'll explore PI Planning—the quarterly event that makes it all possible.</p>
        
        <p>Best,<br>
        <strong>Jasmine Doster</strong></p>
      </div>
    `
  },
  4: {
    subject: "Day 4: PI Planning - Where the Magic Happens",
    text: `
Day 4: PI Planning - Where the Magic Happens

Hi there,

Today we're exploring Program Increment (PI) Planning—the heartbeat event that makes SAFe actually work.

What is PI Planning?
Every 8-12 weeks, everyone on the ART comes together for 2 days of intensive planning. Think of it as a quarterly alignment meeting on steroids.

The PI Planning Agenda:
Day 1: Vision presentation, team planning, draft plan review
Day 2: Plan finalization, risk identification, confidence vote

Why It's Transformational:
• Face-to-face alignment (even virtual works!)
• Dependencies surface and get resolved
• Everyone understands the "why" behind the work
• Teams commit to realistic, achievable goals

The Confidence Vote:
At the end, teams vote 1-5 on their confidence to deliver their plan. If the average is below 3, you adjust the plan. No surprises later!

Real Results:
Organizations report 40-60% reduction in delivery time and dramatically improved predictability after implementing PI Planning.

Today's Action Item:
Imagine bringing all related teams together for 2 days every quarter. What problems would get solved that aren't being addressed today?

Tomorrow: Our final lesson on making continuous value delivery a reality.

Best,
Jasmine Doster
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #7C3AED;">Day 4: PI Planning - Where the Magic Happens</h1>
        
        <p>Hi there,</p>
        
        <p>Today we're exploring Program Increment (PI) Planning—the heartbeat event that makes SAFe actually work.</p>
        
        <h3 style="color: #DC2626;">What is PI Planning?</h3>
        <p>Every 8-12 weeks, everyone on the ART comes together for 2 days of intensive planning. Think of it as a quarterly alignment meeting on steroids.</p>
        
        <h3 style="color: #DC2626;">The PI Planning Agenda:</h3>
        <ul>
          <li><strong>Day 1:</strong> Vision presentation, team planning, draft plan review</li>
          <li><strong>Day 2:</strong> Plan finalization, risk identification, confidence vote</li>
        </ul>
        
        <h3 style="color: #DC2626;">Why It's Transformational:</h3>
        <ul>
          <li>Face-to-face alignment (even virtual works!)</li>
          <li>Dependencies surface and get resolved</li>
          <li>Everyone understands the "why" behind the work</li>
          <li>Teams commit to realistic, achievable goals</li>
        </ul>
        
        <div style="background-color: #EEF2FF; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #4338CA; margin-top: 0;">The Confidence Vote:</h4>
          <p style="margin-bottom: 0;">At the end, teams vote 1-5 on their confidence to deliver their plan. If the average is below 3, you adjust the plan. No surprises later!</p>
        </div>
        
        <div style="background-color: #F0FDF4; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #166534; margin-top: 0;">Real Results:</h4>
          <p style="margin-bottom: 0;">Organizations report 40-60% reduction in delivery time and dramatically improved predictability after implementing PI Planning.</p>
        </div>
        
        <div style="background-color: #FEF3C7; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #92400E; margin-top: 0;">Today's Action Item:</h4>
          <p style="margin-bottom: 0;">Imagine bringing all related teams together for 2 days every quarter. What problems would get solved that aren't being addressed today?</p>
        </div>
        
        <p><strong>Tomorrow:</strong> Our final lesson on making continuous value delivery a reality.</p>
        
        <p>Best,<br>
        <strong>Jasmine Doster</strong></p>
      </div>
    `
  },
  5: {
    subject: "Day 5: Continuous Value Delivery - Your SAFe Journey Begins",
    text: `
Day 5: Continuous Value Delivery - Your SAFe Journey Begins

Hi there,

Congratulations! You've completed your 5-Day SAFe Sprint. Today, we're talking about the ultimate goal: continuous value delivery.

What We've Covered:
✓ SAFe foundations and why it matters
✓ The three levels that make it work
✓ Agile Release Trains as the delivery engine
✓ PI Planning for quarterly alignment
✓ And today: Making it sustainable

The Continuous Delivery Pipeline:
SAFe isn't about delivering once—it's about delivering value continuously through:
• Continuous Exploration (what should we build?)
• Continuous Integration (how do we build it?)
• Continuous Deployment (how do we deliver it?)
• Release on Demand (when should customers get it?)

Your Next Steps:
1. Apply one concept from this week at work
2. Share these insights with your team
3. Consider formal SAFe certification to deepen your expertise

Remember: SAFe isn't about perfection—it's about progress. Start small, learn fast, and scale what works.

BONUS: Ready to take your SAFe knowledge to the next level? Our SAFe certification courses are designed for busy professionals like you. 

→ Explore SAFe Certification Options: https://radiantagility.tech/safe-training

Thank you for joining me on this journey. Your commitment to learning makes a difference!

Best,
Jasmine Doster
Radiant Agility Technology

P.S. Questions about anything we covered? Hit reply—I personally read and respond to every email!
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #7C3AED;">Day 5: Continuous Value Delivery - Your SAFe Journey Begins</h1>
        
        <p>Hi there,</p>
        
        <p><strong>Congratulations!</strong> You've completed your 5-Day SAFe Sprint. Today, we're talking about the ultimate goal: continuous value delivery.</p>
        
        <h3 style="color: #DC2626;">What We've Covered:</h3>
        <ul>
          <li>✓ SAFe foundations and why it matters</li>
          <li>✓ The three levels that make it work</li>
          <li>✓ Agile Release Trains as the delivery engine</li>
          <li>✓ PI Planning for quarterly alignment</li>
          <li>✓ And today: Making it sustainable</li>
        </ul>
        
        <h3 style="color: #DC2626;">The Continuous Delivery Pipeline:</h3>
        <p>SAFe isn't about delivering once—it's about delivering value continuously through:</p>
        <ul>
          <li><strong>Continuous Exploration:</strong> what should we build?</li>
          <li><strong>Continuous Integration:</strong> how do we build it?</li>
          <li><strong>Continuous Deployment:</strong> how do we deliver it?</li>
          <li><strong>Release on Demand:</strong> when should customers get it?</li>
        </ul>
        
        <h3 style="color: #DC2626;">Your Next Steps:</h3>
        <ol>
          <li>Apply one concept from this week at work</li>
          <li>Share these insights with your team</li>
          <li>Consider formal SAFe certification to deepen your expertise</li>
        </ol>
        
        <div style="background-color: #EEF2FF; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin-bottom: 0;"><strong>Remember:</strong> SAFe isn't about perfection—it's about progress. Start small, learn fast, and scale what works.</p>
        </div>
        
        <div style="background-color: #FEF3C7; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <h4 style="color: #92400E; margin-top: 0;">BONUS: Ready to take your SAFe knowledge to the next level?</h4>
          <p>Our SAFe certification courses are designed for busy professionals like you.</p>
          <a href="https://radiantagility.tech/safe-training" style="background-color: #DC2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">→ Explore SAFe Certification Options</a>
        </div>
        
        <p>Thank you for joining me on this journey. Your commitment to learning makes a difference!</p>
        
        <p>Best,<br>
        <strong>Jasmine Doster</strong><br>
        Radiant Agility Technology</p>
        
        <p style="font-size: 12px; color: #666;">P.S. Questions about anything we covered? Hit reply—I personally read and respond to every email!</p>
      </div>
    `
  }
};

export async function sendWelcomeEmail(email: string, name: string): Promise<boolean> {
  const content = safeCourseContent[0];
  
  return await sendEmail({
    to: email,
    from: 'noreply@radiantagility.tech',
    subject: content.subject,
    text: content.text,
    html: content.html
  });
}

export async function sendCourseEmail(subscription: EmailSubscription): Promise<boolean> {
  const content = safeCourseContent[subscription.currentDay];
  
  if (!content) {
    console.error(`No content found for day ${subscription.currentDay}`);
    return false;
  }
  
  return await sendEmail({
    to: subscription.email,
    from: 'noreply@radiantagility.tech',
    subject: content.subject,
    text: content.text,
    html: content.html
  });
}

export async function processDailyEmails(): Promise<void> {
  try {
    const subscriptions = await storage.getEmailSubscriptions('safe-sprint');
    const now = new Date();
    
    for (const subscription of subscriptions) {
      // Skip if already completed
      if (subscription.completed) continue;
      
      // Calculate which day this subscriber should be on
      const subscriptionDate = new Date(subscription.subscriptionDate);
      const daysSinceSubscription = Math.floor((now.getTime() - subscriptionDate.getTime()) / (1000 * 60 * 60 * 24));
      
      // Don't send if it's been less than 24 hours since last email
      if (subscription.lastEmailSent) {
        const hoursSinceLastEmail = (now.getTime() - new Date(subscription.lastEmailSent).getTime()) / (1000 * 60 * 60);
        if (hoursSinceLastEmail < 23) continue; // Wait at least 23 hours
      }
      
      // Determine which day to send
      let dayToSend = subscription.currentDay;
      
      // If we need to advance to the next day
      if (daysSinceSubscription > subscription.currentDay) {
        dayToSend = Math.min(daysSinceSubscription, 5); // Cap at day 5
      }
      
      // Skip if no new email to send
      if (dayToSend === subscription.currentDay && subscription.lastEmailSent) continue;
      
      // Send the email
      const emailSent = await sendCourseEmail({
        ...subscription,
        currentDay: dayToSend
      });
      
      if (emailSent) {
        // Update the subscription
        await storage.updateEmailSubscriptionDay(subscription.id, dayToSend);
        
        // Mark as completed if this was day 5
        if (dayToSend === 5) {
          await storage.markEmailSubscriptionCompleted(subscription.id);
        }
        
        console.log(`Sent day ${dayToSend} email to ${subscription.email}`);
      }
    }
  } catch (error) {
    console.error('Error processing daily emails:', error);
  }
}

// Export course content for admin viewing
export { safeCourseContent };