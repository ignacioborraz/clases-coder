import { Router } from "express";
import cartsRouter from "./carts.router.api.js";
import usersApi from "./users.router.api.js";
import sizesRouter from "./size.router.api.js";
import categoryRouter from "./category.router.api.js";
import clotheRouter from "./clothe.router.js";

const apiRouter = Router();

apiRouter.use("/sizes", sizesRouter);
apiRouter.use("/users", usersApi);
apiRouter.use("/carts", cartsRouter);
apiRouter.use("/categories", categoryRouter);
apiRouter.use("/clothes", clotheRouter);

export default apiRouter;
