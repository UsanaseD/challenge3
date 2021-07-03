import express from "express";
import Reques from "./Request.js"

const routes = express.Router();

routes.get("/request/photos/:id", Reques.callExtrenalApiUsingRequest);

export default routes;