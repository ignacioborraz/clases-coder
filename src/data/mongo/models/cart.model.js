import { Schema, model, Types } from "mongoose";

const collection = "carts";
const schema = new Schema(
  {
    user_id: { type: Types.ObjectId, ref: "users", required: true },
    clothe_id: { type: Types.ObjectId, ref: "clothes", required: true },
    quantity: { type: Number, required: true },
    state: {
      type: String,
      enum: ["reserved", "paid", "delivered"],
      default: "reserved",
    },
  },
  {
    timestamps: true,
  }
);

//POPULAR CON EL PARÁMETRO (PROPIEDAD A POBLAR)
schema.pre("find", function () {
  this.populate("clothe_id");
});

schema.pre("find", function () {
  this.populate({
    path: "user_id",
    select: "email role",
  });
});

const Cart = model(collection, schema);
export default Cart;
