var fs = require("fs");
var Watcher = require("./watcher");

var watchDir = "./watch";
var processedDir = "./done";

var watcher = new Watcher(watchDir, processedDir);

watcher.on("process", function(fileName) {
    if (!fileName) {
        return;
    }
    console.log("fileName:",fileName);
    var watchFile = this.watchDir + "/" + fileName;
    var processedFile = this.processedDir + "/" + fileName.toLowerCase();
    fs.rename(watchFile, processedFile, function(err) {
        // if(err){ throw err;}
    })
})

watcher.start();

var server = require("./sockettest");
server.start();