import { model, Schema, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "orders";
const schema = new Schema(
  {
    pizza_id: { type: Types.ObjectId, required: true, ref: "pizzas" },
    quantity: { type: Number, default: 1 },
    state: {
      type: String,
      enum: ["reserved", "paid", "delivered"],
      default: "reserved",
    },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

schema.pre("find", function () {
  this.populate("user_id", "-password -createdAt -updatedAt -__v");
});
schema.pre("find", function () {
  this.populate("event_id", "title poster place price");
});

const Order = model(collection, schema);
export default Order;
