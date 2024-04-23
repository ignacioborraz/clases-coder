import { Router } from "express";
import usersApi from "./users.api.js"

const apiRouter = Router();
apiRouter.use("/users", usersApi)

export default apiRouter;