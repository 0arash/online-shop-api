require("dotenv").config();

const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const colors = require("ansi-colors");
const dbConnect = require("../database/connect")

// connect database
dbConnect()

// routers
const userRouter = require("./router/user.router");

// port from env
const PORT = process.env.PORT;

// middlewares
app.use(bodyParse.json());

// apply routers
app.use("/", userRouter);

app.listen(PORT, () => {
  console.clear();
  console.log(
    `server is running in ${colors.blueBright(`http://localhost:${PORT}`)}`
  );
});
