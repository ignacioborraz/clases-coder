import { Router } from "express";
import sizesRouter from "./size.router.api.js";

const apiRouter = Router();
apiRouter.use("/sizes", sizesRouter);

export default apiRouter;
