import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Domain detection endpoint for client-side routing
  app.get("/api/site-type", (req, res) => {
    const hostname = req.hostname || req.headers.host?.split(':')[0] || '';
    
    let siteType = 'design'; // default to design page
    
    if (hostname === 'www.idbh.com' || hostname === 'idbh.com') {
      siteType = 'minimal';
    } else if (hostname === 'design.idbh.com') {
      siteType = 'design';
    }
    
    // Also check query param for testing
    if (req.query.site === 'minimal' || req.query.site === 'design') {
      siteType = req.query.site as string;
    }
    
    res.json({ siteType, hostname });
  });

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const contact = await storage.createContact(input);
      res.status(201).json(contact);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
