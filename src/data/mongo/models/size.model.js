import { Schema, model } from "mongoose";

const collection = "size";
const schema = new Schema(
    {
        size: { type: String, required: true, unique: true },
        description: { type: String },
    },
    {
        timestamps: true,
    }
);

const Size = model(collection, schema);
export default Size;
