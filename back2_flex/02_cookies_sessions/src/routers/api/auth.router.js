import { Router } from "express";
import { usersManager } from "../../data/manager.mongo.js";

const authRouter = Router();

const registerCb = async (req, res, next) => {
  try {
    const { method, originalUrl: url } = req;
    const { email, password, city } = req.body;
    if (!email || !password || !city) {
      const error = new Error("Invalid data");
      error.statusCode = 401;
      throw error;
    }
    let user = await usersManager.readBy({ email });
    if (user) {
      const error = new Error("Invalid credentials");
      error.statusCode = 401;
      throw error;
    }
    user = await usersManager.createOne(req.body);
    const response = { message: "Registered", method, url };
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
const loginCb = async (req, res, next) => {
  try {
    const { method, originalUrl: url } = req;
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("Invalid data");
      error.statusCode = 401;
      throw error;
    }
    const user = await usersManager.readBy({ email });
    if (!user || user?.password !== password) {
      const error = new Error("Invalid credentials");
      error.statusCode = 401;
      throw error;
    }
    const opts = { maxAge: 7 * 24 * 60 * 60 * 1000, signed: true };
    const response = { message: "Logged in", method, url };
    res.status(200).cookie("user_id", user._id, opts).json(response);
  } catch (error) {
    next(error);
  }
};
const signoutCb = (req, res, next) => {
  try {
    const { method, originalUrl: url } = req;
    const response = { message: "Sign out", method, url };
    res.status(200).clearCookie("user_id").json(response);
  } catch (error) {
    next(error);
  }
};
const meCb = async (req, res, next) => {
  try {
    const { method, originalUrl: url } = req;
    const { user_id } = req.signedCookies;
    const user = await usersManager.readById(user_id);
    if (!user) {
      const error = new Error("Forbidden");
      error.statusCode = 403;
      throw error;
    }
    const { email, avatar, role } = user;
    const response = { response: { email, avatar, role }, method, url };
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

authRouter.post("/register", registerCb);
authRouter.post("/login", loginCb);
authRouter.post("/signout", signoutCb);
authRouter.post("/me", meCb);

export default authRouter;
