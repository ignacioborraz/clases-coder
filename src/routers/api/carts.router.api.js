import { Router } from "express";
import cartsManager from "../../data/mongo/managers/CartsManager.mongo.js";

const cartsRouter = Router();

cartsRouter.post("/", create);
cartsRouter.get("/", read);

export default cartsRouter;

async function create(req, res, next) {
  try {
    const data = req.body;
    //aplicar politicas para que funcione correctamente!
    console.log(req.user);
    data.user_id = req.user._id;
    const one = await cartsManager.create(data);
    return res.json({
      statusCode: 201,
      message: "CREATED",
      response: one,
    });
  } catch (error) {
    return next(error);
  }
}
async function read(req, res, next) {
  try {
    //aplicar politicas para que funcione correctamente!
    console.log(req.user);
    const user_id = req.user._id;
    if (user_id) {
      const all = await cartsManager.read({ user_id });
      if (all.length > 0) {
        return res.json({
          statusCode: 200,
          message: "READ",
          response: all,
        });
      }
    }
    const error = new Error("NOT FOUND");
    error.statusCode = 404;
    throw error;
  } catch (error) {
    return next(error);
  }
}
