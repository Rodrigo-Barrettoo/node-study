import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
