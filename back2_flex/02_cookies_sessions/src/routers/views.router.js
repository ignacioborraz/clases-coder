import { Router } from "express";
import { productsManager } from "../data/manager.mongo.js";

const viewsRouter = Router();

const indexView = async (req, res) => {
  try {
    const products = await productsManager.readAll();
    res.status(200).render("index", { products });
  } catch (error) {
    res.status(error.statusCode || 500).render("error", { error });
  }
};
const productView = async (req, res) => {
  try {
    const { pid } = req.params;
    const products = await productsManager.readById(pid);
    res.status(200).render("product", { products });
  } catch (error) {
    res.status(error.statusCode || 500).render("error", { error });
  }
};
const registerView = async (req, res) => {
  try {
    res.status(200).render("register");
  } catch (error) {
    res.status(error.statusCode || 500).render("error", { error });
  }
};
const loginView = async (req, res) => {
  try {
    res.status(200).render("login");
  } catch (error) {
    res.status(error.statusCode || 500).render("error", { error });
  }
};

viewsRouter.get("/", indexView);
viewsRouter.get("/product/:pid", productView);
viewsRouter.get("/register", registerView);
viewsRouter.get("/login", loginView);

export default viewsRouter;
