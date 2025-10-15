import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      console.log("Contact form submission received:", {
        name: message.name,
        email: message.email,
        message: message.message,
        timestamp: message.createdAt
      });
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error: any) {
      console.error("Contact form error:", error);
      
      if (error.name === 'ZodError') {
        res.status(400).json({ 
          success: false, 
          message: error.errors?.[0]?.message || "Invalid form data. Please check your inputs." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
