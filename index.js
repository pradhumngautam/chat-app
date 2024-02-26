const express = require("express");
const http = require("http");
const path = require("path")
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});
io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
