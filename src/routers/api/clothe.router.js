import CustomRouter from "../CustomRouter.js";
import clotheManager from "../../data/mongo/managers/ClothesManager.mongo.js";

class ClothesRouter extends CustomRouter {
  init() {
    this.create("/", ["ADMIN"], create);
    this.read("/", ["PUBLIC"], read);
  }
}
const clothesRouter = new ClothesRouter();
export default clothesRouter.getRouter();

async function create(req, res, next) {
  try {
    const data = req.body;
    const one = await clotheManager.create(data);
    return res.message201("Created " + one._id);
  } catch (error) {
    return next(error);
  }
}
async function read(req, res, next) {
  try {
    const all = await clotheManager.read();
    return res.response200(all);
  } catch (error) {
    return next(error);
  }
}
