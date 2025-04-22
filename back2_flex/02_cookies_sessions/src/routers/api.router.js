import { Router } from "express";
import usersRouter from "./api/users.router.js";
import productsRouter from "./api/products.router.js";
import cartsRouter from "./api/carts.router.js";
import authRouter from "./api/auth.router.js";
import sessionsRouter from "./api/sessions.router.js";
import cookiesRouter from "./api/cookies.router.js";

const apiRouter = Router();
apiRouter.use("/users", usersRouter);
apiRouter.use("/products", productsRouter);
apiRouter.use("/carts", cartsRouter);
apiRouter.use("/auth", authRouter);
apiRouter.use("/sessions", sessionsRouter);
apiRouter.use("/cookies", cookiesRouter);

export default apiRouter;
