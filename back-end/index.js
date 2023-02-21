import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { config } from "dotenv";
config()

const app = express();
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))





mongoose.set("strictQuery", true)
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(process.env.PORT, ()=> console.log(`Listening at PORT ${process.env.PORT}`)))
.catch((err)=> console.log("Error,", err))