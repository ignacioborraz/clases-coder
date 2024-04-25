import { Router } from "express";
import usersManager from "../../data/mongo/managers/UsersManager.mongo.js";

const usersApi = Router();

usersApi.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const one = await usersManager.create(data);
    return res.json({
      statusCode: 201,
      message: "CREATED ID: " + one.id,
    });
  } catch (error) {
    return next(error);
  }
});

usersApi.get("/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    let one = undefined;
    if (email) {
      one = await usersManager.readByEmail(email);
    }
    if (one) {
      return res.json({
        statusCode: 200,
        response: one,
      });
    } else {
      const error = new Error("Item not found");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
});

export default usersApi;
