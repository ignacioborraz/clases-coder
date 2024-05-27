import CustomRouter from "./CustomRouter.js";
import apiRouter from "./api/index.router.api.js";
import viewsRouter from "./views/index.view.js";

class Indexouter extends CustomRouter {
  init() {
    this.use("/api", apiRouter);
    this.use("/", viewsRouter);
  }
}

const indexRouter = new Indexouter();
export default indexRouter.getRouter();
