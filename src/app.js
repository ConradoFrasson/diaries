import "dotenv/config";
import "./config/db.js";
import e from "express";
import diariesRoute from "./routes/diariesRoute.js";

const app = e();

app.use(e.json());

app.use("/diaries", diariesRoute);

app.listen(process.env.API_PORT, () => console.log("App running!"));