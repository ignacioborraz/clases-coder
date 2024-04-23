import { Schema , model} from "mongoose"


 const collection = "clothes"
 const schema = new Schema({ 
    name: { type: String, required: true, unique: true },
    category_id: { type: String, require: true},
    size_id: { type: String, require: true },
    stock: { type: Number, require: true , default : 10},
    photo: {
      type: String,
      default: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png",
    }},
  {
    timestamps: true,
  });
  const Clothe = model(collection, schema);
 export default Clothe ;