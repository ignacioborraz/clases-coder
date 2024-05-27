import CustomRouter from "../CustomRouter.js";

class ViewsRouter extends CustomRouter {
  init() {
    this.read("/", ["PUBLIC"], async (req, res, next) => {
      try {
        return res.render("index", {
          title: "INDEX",
        });
      } catch (error) {
        return next(error);
      }
    });
  }
}

const viewsRouter = new ViewsRouter();
export default viewsRouter.getRouter();
