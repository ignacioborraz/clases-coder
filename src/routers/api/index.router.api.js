import { Router } from "express";
import categoryRouter from "./category.router.api.js";

const apiRouter = Router();

apiRouter.use("/categories", categoryRouter);

export default apiRouter;
