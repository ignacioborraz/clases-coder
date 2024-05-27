import CustomRouter from "../CustomRouter.js";
import cartsRouter from "./carts.router.api.js";
import usersApi from "./users.router.api.js";
import sizesRouter from "./size.router.api.js";
import categoryRouter from "./category.router.api.js";
import clotheRouter from "./clothe.router.js";

class ApiRouter extends CustomRouter {
  init() {
    this.use("/sizes", sizesRouter);
    this.use("/auth", usersApi);
    this.use("/carts", cartsRouter);
    this.use("/categories", categoryRouter);
    this.use("/clothes", clotheRouter);
  }
}

const apiRouter = new ApiRouter();
export default apiRouter.getRouter();
