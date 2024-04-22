import { connect } from "mongoose";

async function dbConnection() {
  try {
    await connect(process.env.MONGO_URI);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
}

export default dbConnection;
