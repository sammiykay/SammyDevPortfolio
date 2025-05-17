import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const parseResult = insertContactMessageSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({
          message: "Invalid form data",
          errors: parseResult.error.format()
        });
      }
      
      // Save the contact message
      const savedMessage = await storage.createContactMessage(parseResult.data);
      
      // Send successful response
      return res.status(200).json({
        message: "Message sent successfully",
        data: savedMessage
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({
        message: "Failed to send message. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
