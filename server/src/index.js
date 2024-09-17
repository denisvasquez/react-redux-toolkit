require("dotenv").config();
const express = require("express");
const cors = require("cors");

// initializations
const app = express();
app.use(cors());

// settins
app.set("port", process.env.PORT || 8000);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/api", require("./modules/index.module"));

// start the server
app.listen(app.get("port"), () => console.log("Server on port", app.get("port")));