import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

dotenv.config();

const mongodb_uri = process.env.MONGO_URI;

// future implementation
// mongoose.set('strictQuery', true);

// mongoose.connect(mongodb_uri).then(res => {
//   console.log("Connected to DB");
// }).catch(err => {
//   console.log('At mongoose.connect:')
//   console.error(err.message)
// });

app.use(express.json());
app.use(express.static("public"));

import usersRoutes from "./API/users/usersRoutes";
app.use("/api/users", usersRoutes);


app.listen(PORT, () => {
  console.log(`server is active on port : ${PORT}`);
});
