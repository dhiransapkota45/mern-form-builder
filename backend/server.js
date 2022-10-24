const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const formRoute = require("./Routes/fromRoute");
const submissionRoute = require("./Routes/submissionRoute")
const cors = require("cors");

app.use(
  cors()
);
app.use(express.json());
app.use("/user", userRoute);
app.use("/form", formRoute);
app.use("/submission", submissionRoute)



app.listen(process.env.PORT, () => {
  mongoose
    .connect("mongodb://localhost:27017/form-builder")
    .then(() => {
      console.log("connected to the database");
    })
    .catch((error) => {
      console.log("error occured at database");
    });
  console.log("listening at port ", process.env.PORT);
});
