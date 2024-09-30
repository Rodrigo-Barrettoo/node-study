import { Router } from "express";

export const linkRouter = Router();

linkRouter.get("/");
linkRouter.get("/:id");
