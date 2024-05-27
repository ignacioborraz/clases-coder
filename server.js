import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";

import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";
import dbConnection from "./src/utils/dbConnection.util.js";
import cookieParser from "cookie-parser";

//server
const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => {
  console.log("server ready on port " + PORT);
  dbConnection();
};
server.listen(PORT, ready);

//views
server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views", __dirname + "/src/views");

//middlewares
server.use(cookieParser(process.env.SECRET_JWT))
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(morgan("dev"));

//endpoints
server.use("/", router);
server.use(errorHandler);
server.use(pathHandler);
