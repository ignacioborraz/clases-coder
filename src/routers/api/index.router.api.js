import { Router } from "express";
import clotheRouter from "./clothe.router.js";

const apiRouter = Router();

apiRouter.use("/clothes", clotheRouter)

export default apiRouter;
