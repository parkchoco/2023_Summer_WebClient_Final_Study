const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(52273);

io.on('connectionb', (socket)=>{
    socket.emit('news', {
        hello:'world'
    });
    socket.on('other event', (data)=>{
        console.log(data);
    });
});