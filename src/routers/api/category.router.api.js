import CustomRouter from "../CustomRouter.js";
import categoryManager from "../../data/mongo/managers/CategoriesManager.mongo.js";

class CategoriesRouter extends CustomRouter {
  init() {
    this.create("/", ["ADMIN"], create);
    this.read("/", ["PUBLIC"], read);
  }
}

const categoriesRouter = new CategoriesRouter();
export default categoriesRouter.getRouter();

async function create(req, res, next) {
  try {
    const data = req.body;
    const size = await categoryManager.create(data);
    return res.json({
      statusCode: 201,
      message: "CREATED",
      response: size,
    });
  } catch (error) {
    return next(error);
  }
}
async function read(req, res, next) {
  try {
    const sizes = await categoryManager.read();
    if (sizes.length > 0) {
      return res.json({
        statusCode: 200,
        message: "READ ALL CATEGORIES",
        response: sizes,
      });
    }
  } catch (error) {
    return next(error);
  }
}
