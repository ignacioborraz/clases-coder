import Manager from "../Manager.mongo.js";
import Size from '../models/size.model.js'

const sizesManager = new Manager(Size);
export default  sizesManager;