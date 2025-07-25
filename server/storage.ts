import { v4 as uuidv4 } from 'uuid';
import { 
  users, type User, type InsertUser,
  leads, type Lead, type InsertLead,
  contacts, type Contact, type InsertContact,
  chatMessages, type ChatMessage, type InsertChatMessage,
  inquiries, type Inquiry, type InsertInquiry,
  emailSubscriptions, type EmailSubscription, type InsertEmailSubscription,
  waitlists, type Waitlist, type InsertWaitlist
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, asc, and } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Lead methods
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;

  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;

  // Chat message methods
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessagesBySessionId(sessionId: string): Promise<ChatMessage[]>;
  generateSessionId(): string;

  // Inquiry methods
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(sortOrder?: 'newest' | 'oldest'): Promise<Inquiry[]>;
  getInquiry(id: number): Promise<Inquiry | undefined>;
  markInquiryAsRead(id: number): Promise<void>;
  markInquiryAsUnread(id: number): Promise<void>;

  // Email subscription methods
  createEmailSubscription(subscription: InsertEmailSubscription): Promise<EmailSubscription>;
  getEmailSubscriptions(courseType?: string): Promise<EmailSubscription[]>;
  getEmailSubscriptionByEmail(email: string, courseType: string): Promise<EmailSubscription | undefined>;
  updateEmailSubscriptionDay(id: number, day: number): Promise<void>;
  markEmailSubscriptionCompleted(id: number): Promise<void>;
  updateLastEmailSent(id: number): Promise<void>;

  // Waitlist methods
  createWaitlist(waitlist: InsertWaitlist): Promise<Waitlist>;
  getWaitlists(courseType?: string): Promise<Waitlist[]>;
  getWaitlistByEmail(email: string, courseType: string, sessionDate: string): Promise<Waitlist | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db
      .insert(leads)
      .values(insertLead)
      .returning();
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return await db.select().from(leads).orderBy(desc(leads.createdAt));
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }

  async createChatMessage(insertChatMessage: InsertChatMessage): Promise<ChatMessage> {
    const [chatMessage] = await db
      .insert(chatMessages)
      .values(insertChatMessage)
      .returning();
    return chatMessage;
  }

  async getChatMessagesBySessionId(sessionId: string): Promise<ChatMessage[]> {
    return await db
      .select()
      .from(chatMessages)
      .where(eq(chatMessages.sessionId, sessionId))
      .orderBy(asc(chatMessages.createdAt));
  }

  generateSessionId(): string {
    return uuidv4();
  }

  // Inquiry methods
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async getInquiries(sortOrder: 'newest' | 'oldest' = 'newest'): Promise<Inquiry[]> {
    const orderBy = sortOrder === 'newest' ? desc(inquiries.createdAt) : asc(inquiries.createdAt);
    return await db.select().from(inquiries).orderBy(orderBy);
  }

  async getInquiry(id: number): Promise<Inquiry | undefined> {
    const [inquiry] = await db.select().from(inquiries).where(eq(inquiries.id, id));
    return inquiry || undefined;
  }

  async markInquiryAsRead(id: number): Promise<void> {
    await db
      .update(inquiries)
      .set({ isRead: true })
      .where(eq(inquiries.id, id));
  }

  async markInquiryAsUnread(id: number): Promise<void> {
    await db
      .update(inquiries)
      .set({ isRead: false })
      .where(eq(inquiries.id, id));
  }

  async createEmailSubscription(insertEmailSubscription: InsertEmailSubscription): Promise<EmailSubscription> {
    const [subscription] = await db
      .insert(emailSubscriptions)
      .values(insertEmailSubscription)
      .returning();
    return subscription;
  }

  async getEmailSubscriptions(courseType?: string): Promise<EmailSubscription[]> {
    if (courseType) {
      return await db.select().from(emailSubscriptions).where(eq(emailSubscriptions.courseType, courseType));
    }
    return await db.select().from(emailSubscriptions);
  }

  async getEmailSubscriptionByEmail(email: string, courseType: string): Promise<EmailSubscription | undefined> {
    const [subscription] = await db
      .select()
      .from(emailSubscriptions)
      .where(and(
        eq(emailSubscriptions.email, email),
        eq(emailSubscriptions.courseType, courseType)
      ));
    return subscription || undefined;
  }

  async updateEmailSubscriptionDay(id: number, day: number): Promise<void> {
    await db
      .update(emailSubscriptions)
      .set({ currentDay: day, lastEmailSent: new Date() })
      .where(eq(emailSubscriptions.id, id));
  }

  async markEmailSubscriptionCompleted(id: number): Promise<void> {
    await db
      .update(emailSubscriptions)
      .set({ completed: true })
      .where(eq(emailSubscriptions.id, id));
  }

  async updateLastEmailSent(id: number): Promise<void> {
    await db
      .update(emailSubscriptions)
      .set({ lastEmailSent: new Date() })
      .where(eq(emailSubscriptions.id, id));
  }

  // Waitlist methods
  async createWaitlist(insertWaitlist: InsertWaitlist): Promise<Waitlist> {
    const [waitlist] = await db
      .insert(waitlists)
      .values(insertWaitlist)
      .returning();
    return waitlist;
  }

  async getWaitlists(courseType?: string): Promise<Waitlist[]> {
    if (courseType) {
      return await db.select().from(waitlists).where(eq(waitlists.courseType, courseType)).orderBy(desc(waitlists.createdAt));
    }
    return await db.select().from(waitlists).orderBy(desc(waitlists.createdAt));
  }

  async getWaitlistByEmail(email: string, courseType: string, sessionDate: string): Promise<Waitlist | undefined> {
    const [waitlist] = await db
      .select()
      .from(waitlists)
      .where(and(
        eq(waitlists.email, email),
        eq(waitlists.courseType, courseType),
        eq(waitlists.sessionDate, sessionDate)
      ));
    return waitlist || undefined;
  }
}

export const storage = new DatabaseStorage();
