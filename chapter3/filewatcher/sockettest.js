var net = require("net");

var server = net.createServer(function(socket) {
    socket.on('connect', function() {
        console.log("socket connect to server!");
    })
    socket.on('data', function(data) {
        socket.write(data);
    });
    socket.on('close', function() {
        console.log("socket disconnect~!");
    })
});

exports.start = function(){server.listen(7000);};