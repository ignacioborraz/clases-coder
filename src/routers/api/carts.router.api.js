import CustomRouter from '../CustomRouter.js'
import cartsManager from "../../data/mongo/managers/CartsManager.mongo.js";

class CartsRouter extends CustomRouter {

  init() {
    this.create("/", ["USER"], create);
    this.read("/", ["USER"], read);
  }
}


const cartsRouter = new CartsRouter()
export default cartsRouter.getRouter()

async function create(req, res, next) {
  try {
    const data = req.body;
    //aplicar politicas para que funcione correctamente!
    console.log(req.user);
    data.user_id = req.user._id;
    const one = await cartsManager.create(data);
    //Se envía con one el objeto creado completo
    return res.response201("CREATED", one);
    //Si se quisiera enviar solo el id, se envía un objeto con la propiedad 
    //return res.response201("CREATED", {id: one._id});
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
        return res.response200(all);
      }
    }
    return res.error404()
  } catch (error) {
    return next(error);
  }
}
