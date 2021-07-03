import express from "express";
import dotenv from "dotenv";
import apiRoutes from "./Route.js";

dotenv.config();

const app = express();


app.use(apiRoutes);


const port = process.env.PORT || 3000;
app.listen(port);

console.log("app running on port", port);

export default app;