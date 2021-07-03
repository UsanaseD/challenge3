import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRoutes from "./Route.js";

dotenv.config();

const app = express();

app.use(cors({ origin: true }));
app.use(apiRoutes);


const port = process.env.PORT || 3000;
app.listen(port);

console.log("app running on port", port);

export default app;