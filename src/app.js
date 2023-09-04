const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const expressSanitizer = require("express-sanitizer");

const apiV1 = require("./routes/apiV1");

const app = express();

app.use(cors());
// app.use(morgan("combined"));

app.use(express.json());
app.use(expressSanitizer());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", apiV1);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
