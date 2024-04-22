import { Router } from "express";

const viewsRouter = Router();

viewsRouter.get("/", async (req, res, next) => {
  try {
    return res.render("index", {
      title: "INDEX",
    });
  } catch (error) {
    return next(error);
  }
});

export default viewsRouter;
