import { Router } from "express";
import { authRouter } from "./auth.routes";
import { linkRouter } from "./link.routes";
import { userRouter } from "./user.routes";

const routes = Router();

routes.use("/api/auth", authRouter);
routes.use("/api/users", userRouter);
routes.use("/api/links", linkRouter);

export default routes;
