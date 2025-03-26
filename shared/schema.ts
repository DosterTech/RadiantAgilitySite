import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Lead schema for contact and consultation forms
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName"),
  email: text("email").notNull(),
  company: text("company"),
  phone: text("phone"),
  serviceInterest: text("serviceInterest"),
  message: text("message"),
  subscribed: boolean("subscribed").default(false),
  createdAt: timestamp("createdAt").defaultNow()
});

export const insertLeadSchema = createInsertSchema(leads).pick({
  firstName: true,
  lastName: true,
  email: true,
  company: true,
  phone: true,
  serviceInterest: true,
  message: true,
  subscribed: true
});

// Chat message schema
export const chatMessages = pgTable("chatMessages", {
  id: serial("id").primaryKey(),
  user: text("user").notNull(),
  message: text("message").notNull(),
  isBot: boolean("isBot").default(false),
  timestamp: timestamp("timestamp").defaultNow(),
  sessionId: text("sessionId").notNull()
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).pick({
  user: true,
  message: true,
  isBot: true,
  sessionId: true
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
export type ChatMessage = typeof chatMessages.$inferSelect;
