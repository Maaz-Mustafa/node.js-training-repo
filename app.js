const express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the new application");
});

app.listen(3000, (req, res) => {
  console.log("Hello World");
});
