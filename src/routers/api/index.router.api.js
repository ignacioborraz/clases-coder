import CustomRouter from "../CustomRouter.js";
import SessionsRouter from "./sessions.router.api.js";

const session = new SessionsRouter()

export default class ApiRouter extends CustomRouter {
  init() {
    this.use("/sessions", session.getRouter());
  }
}
