import passportCb from "../../middlewares/passportCb.mid.js";
import CustomRouter from "../CustomRouter.js";

class AuthRouter extends CustomRouter {
  init() {
    this.create("/login", ["PUBLIC"], passportCb("login"), login);
    this.create("/register", ["PUBLIC"], passportCb("register"), register);
    this.create("/signout", ["USER"], signout);
  }
}

//sessionsRouter.post("/register", passportCb("register"), register);
//sessionsRouter.post("/signout", signout);

function register(req, res, next) {
  try {
    return res.message201("Registered!")
    // return res.json({ statusCode: 201, message: "Registered!" });

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
    //condicionar que pasa si no hay token (donde corresponde)
    return res.clearCookie("token").message200("Signed out!")
      // .json({ statusCode: 200, message: "Signed out!" });
  } catch (error) {
    return next(error);
  }
}

const authRouter = new AuthRouter();
export default authRouter.getRouter();
