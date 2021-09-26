const express = require("express");
const dotenv = require("dotenv");
const authRoute = require("./routes/v1/auth.route");
dotenv.config();

const PORT = process.env.PORT || 5000;
const APP_NAME = process.env.APP_NAME || "lite movie database";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.get("/", (req, res) => {
  res.send("Welcome the lite move db 😊");
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} is server at localhost on port ${PORT}`);
});
