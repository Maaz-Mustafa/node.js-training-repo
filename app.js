import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// To pass port and env to node server from command line arguments and set those values in server
const args = process.argv.splice(2);
const port = args[0]?.split("=")[1];

const defaultPort = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to the new application");
});

app.listen(port || defaultPort || 5000, (req, res) => {
  !port
    ? console.log("listening to default port")
    : console.log("listening to port from command line");
});
