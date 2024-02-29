import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "categories";
const schema = new Schema(
  {
    category: { type: String, required: true, unique: true, index: true },
    photo: {
      type: String,
      default: "https://i.postimg.cc/wTgNFWhR/profile.png",
    },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const Category = model(collection, schema);
export default Category;
