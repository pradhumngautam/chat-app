const express = require("express");
const http = require("http");
const path = require("path")

const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});


server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
