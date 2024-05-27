import { Router } from "express";
import clotheManager from "../../data/mongo/managers/ClothesManager.mongo.js";

const clotheRouter = Router();

clotheRouter.post("/", create);
clotheRouter.get("/", read);

export default clotheRouter;

async function create(req, res, next) {
  try {
    const data = req.body;
    //aplicar politicas para que sólo admins puedan crear prendas
    const one = await clotheManager.create(data);
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
    const all = await clotheManager.read();
    return res.json({
      statusCode: 200,
      message: "READ ALL CLOTHES",
      response: all,
    });
  } catch (error) {
    return next(error);
  }
}
