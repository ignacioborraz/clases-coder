import SizesRouter  from "./sizes.router.api.js";
import CustomRouter from "../CustomRouter.js";
import ClothesRouter from "./clothes.router.api.js";
import SessionsRouter from "./sessions.router.api.js";

const session = new SessionsRouter();
const clothes = new ClothesRouter();
const sizes = new SizesRouter();

export default class ApiRouter extends CustomRouter {
  init() {
    this.use("/sessions", session.getRouter());
    this.use("/clothes", clothes.getRouter());
    this.use("/sizes", sizes.getRouter())
  }
}
