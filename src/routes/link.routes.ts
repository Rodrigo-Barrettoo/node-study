import { Router } from "express";
import {
  createLink,
  deleteLink,
  getLinks,
  redirectLink,
} from "../controllers/link.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const linkRouter = Router();

linkRouter.get("/:shortUrl", redirectLink);
linkRouter.get("/", authMiddleware, getLinks);
linkRouter.post("/new", authMiddleware, createLink);
linkRouter.delete("/:id", authMiddleware, deleteLink);
