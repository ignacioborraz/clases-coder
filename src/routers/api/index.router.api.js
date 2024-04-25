import { Router } from "express";
import cartsRouter from "./carts.router.api.js";
import usersApi from "./users.router.api.js";

const apiRouter = Router();

apiRouter.use("/users", usersApi);
apiRouter.use("/carts", cartsRouter);

export default apiRouter;
