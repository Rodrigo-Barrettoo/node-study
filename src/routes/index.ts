import { Router } from "express";
import { linkRouter } from "./link.routes";
import { userRouter } from "./user.routes";

const routes = Router();

routes.use("/api/users", userRouter);
routes.use("/api/links", linkRouter);

export default routes;
