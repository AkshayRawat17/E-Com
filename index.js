const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
require("./db_connect");

const Router = require("./routes/index");
const app = express();

let whitelist = ["http://localhost:3000", "http://localhost:8000"];
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin) !== -1) {
      callback(null, true);
    } else {
      callback(
        new Error("CORS Error, You Are Not Authenticated to access this API")
      );
    }
  },
};
app.use(cors(corsOptions));

app.use(express.json()); // used to parse incoming json data
app.use("/public", express.static("public")); // use to serve public files like uplaoded images
app.use(express.static(path.join(__dirname, "build")));

app.use("/api", Router);
app.use("*", express.static(path.join(__dirname, "build")));

let port = process.env.PORT || 8000;

app.listen(port, console.log(`Server is Running at http://localhost:${port}`));
