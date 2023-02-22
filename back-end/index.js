import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

import AuthRote from "./Routes/AuthRoute.js"
import UserRouter from "./Routes/UserRoute.js";
import PostRouter from "./Routes/PostRoute.js";

// Routers


const app = express();


// Middlewares

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))





mongoose.set("strictQuery", true)
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(process.env.PORT, ()=> console.log(`Listening at PORT ${process.env.PORT}`)))
.catch((err)=> console.log("Error,", err))



// uses of Routes

app.use("/auth", AuthRote);
app.use("/user", UserRouter);
app.use("/posts", PostRouter);
