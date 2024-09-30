import { Router } from "express";
import { getLinks } from "../controllers/link.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const linkRouter = Router();

linkRouter.get("/", authMiddleware, getLinks);
linkRouter.get("/:id");
linkRouter.get("/:id");
