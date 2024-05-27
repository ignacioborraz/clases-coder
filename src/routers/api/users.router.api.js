import { Router } from "express";
import passportCb from "../../middlewares/passportCb.mid.js";

const sessionsRouter = Router();

sessionsRouter.post("/register", passportCb("register"), register);
sessionsRouter.post("/login", passportCb("login"), login);
sessionsRouter.post("/signout", signout);

function register(req, res, next) {
  try {
    return res.json({ statusCode: 201, message: "Registered!" });
  } catch (error) {
    return next(error);
  }
}
function login(req, res, next) {
  try {
    return res.cookie("token", req.user.token).json({
      statusCode: 200,
      message: "Logged in!",
    });
  } catch (error) {
    return next(error);
  }
}
function signout(req, res, next) {
  try {
    return res
      .clearCookie("token")
      .json({ statusCode: 200, message: "Signed out!" });
  } catch (error) {
    return next(error);
  }
}

export default sessionsRouter;
