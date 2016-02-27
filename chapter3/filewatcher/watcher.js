var events = require("events");
var util = require("util");
var fs = require("fs");

function Watcher(watchDir, processedDir) {
    this.watchDir = watchDir;
    this.processedDir = processedDir;
}

util.inherits(Watcher, events);

// Watcher.prototype.watch = function() {
//     var watcher = this;
//     fs.readdir(this.watchDir, function(err, files) {
//         if (err) {
//             throw err;
//         }
//         for (var index = 0; index < files.length; index++) {
//             var fileName = files[index];
//             watcher.emit("process", fileName);
//         }
//     });
// }

Watcher.prototype.start = function () {
    var watcher = this;
    fs.watch(this.watchDir, function (event, fileName) {
        if (event == "change") {
            watcher.emit("process", fileName);
        }
    });
}

module.exports = Watcher;