import "dotenv/config.js";
import express, { json, urlencoded } from "express";
import morgan from "morgan";
import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import dbConnect from "./src/helpers/dbConnect.helper.js";

/* server settings */
const server = express();
const port = process.env.PORT || 8080;
const ready = async () => {
  console.log("server ready on port " + port);
  await dbConnect(process.env.URL_MONGO);
};
server.listen(port, ready);

/* middlewares settings */
server.use(urlencoded({ extended: true }));
server.use(json());
server.use(morgan("dev"));

/* router settings */
server.use("/", router);
server.use(errorHandler);
server.use(pathHandler);
