import { Router } from "express";
import { cartsManager } from "../../data/manager.mongo.js";

const cartsRouter = Router();

const createOne = async (req, res, next) => {
  try {
    const data = req.body;
    const one = await cartsManager.createOne(data);
    res.status(201).json({
      method: req.method,
      url: req.originalUrl,
      response: one,
    });
  } catch (error) {
    next(error);
  }
};
const readAll = async (req, res, next) => {
  try {
    const filter = req.query;
    const all = await cartsManager.readAll(filter);
    if (all.length > 0) {
      res.status(200).json({
        method: req.method,
        url: req.originalUrl,
        response: all,
      });
    } else {
      const error = new Error("Not found");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};
const readById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const one = await cartsManager.readById(id);
    if (one) {
      res.status(200).json({
        method: req.method,
        url: req.originalUrl,
        response: one,
      });
    } else {
      const error = new Error("Not found");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};
const updateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const one = await cartsManager.updateById(id, data);
    if (one) {
      res.status(200).json({
        method: req.method,
        url: req.originalUrl,
        response: one,
      });
    } else {
      const error = new Error("Not found");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};
const destroyById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const one = await cartsManager.destroyById(id);
    if (one) {
      res.status(200).json({
        method: req.method,
        url: req.originalUrl,
        response: one,
      });
    } else {
      const error = new Error("Not found");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};
cartsRouter.post("/", createOne);
cartsRouter.get("/", readAll);
cartsRouter.get("/:id", readById);
cartsRouter.put("/:id", updateById);
cartsRouter.delete("/:id", destroyById);

export default cartsRouter;
