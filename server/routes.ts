import type { Express } from "express";
import { createServer, type Server } from "http";
import axios from "axios";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { sendContactNotification } from "./email";

/**
 * Verify reCAPTCHA token with Google
 */
// async function verifyRecaptcha(token: string): Promise<boolean> {
//   try {
//     const secret = process.env.RECAPTCHA_SECRET_KEY;
//     if (!secret) throw new Error("RECAPTCHA_SECRET_KEY not set");

//     const response = await axios.post(
//       "https://www.google.com/recaptcha/api/siteverify",
//       null,
//       {
//         params: {
//           secret,
//           response: token,
//         },
//       }
//     );

//     return response.data.success;
//   } catch (error) {
//     console.error("reCAPTCHA verification failed:", error);
//     return false;
//   }
// }

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { ...formData } = req.body;

      // // Verify reCAPTCHA token
      // const isHuman = await verifyRecaptcha(recaptchaToken);
      // if (!isHuman) {
      //   return res.status(400).json({
      //     message: "reCAPTCHA verification failed. Please try again.",
      //   });
      // }

      // Validate the request body
      const parseResult = insertContactMessageSchema.safeParse(formData);
      if (!parseResult.success) {
        return res.status(400).json({
          message: "Invalid form data",
          errors: parseResult.error.format(),
        });
      }

      // Save the contact message
      const savedMessage = await storage.createContactMessage(parseResult.data);

      // Send email notification
      try {
        await sendContactNotification(savedMessage);
        console.log("Email notification sent successfully");
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Continue even if email fails
      }

      // Respond to client
      return res.status(200).json({
        message: "Message sent successfully",
        data: savedMessage,
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        message: "Failed to send message. Please try again later.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
