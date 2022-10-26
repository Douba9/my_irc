const app = require('express')();
const httpServer = app.listen(8080, () => console.log("Server is running."));
const { Server } = require('socket.io');
const io = new Server(httpServer);

io.on('connection', socket => {
  console.log("connected [" + socket.id + "]");

  socket.on("disconnect", socket => {
    console.log("disconnected [" + socket.id + "]");
  });

  socket.on("NameTag", (name) => {
    console.log("["+socket.id+"]: "+name);
      io.to(socket.id).emit('Valid Name', name);
  });

});