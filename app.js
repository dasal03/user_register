const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/usuarios", require("./routes/user.routes"));

app.get("/", function (req, res) {
  res.send("hola");
});

module.exports = app;
