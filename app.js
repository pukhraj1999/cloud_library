import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
require("dotenv").config();

//--------Connecting database---------------------
mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("Successfully Connected!");
  }
);
//-------------------------------------------------

const app = express();

//----------MiddleWare-------------------------------------
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(cookieParser());
//----------------------------------------------------------

//----------Routes-------------------------------------
import { allRoutes } from "./api";
app.use("/api", allRoutes);
//---------------------------------------------------------

//--------Hosting on local server-------------------------------
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
//---------------------------------------------------------------
