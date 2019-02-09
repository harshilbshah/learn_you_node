var fs = require("fs");

var buf;

fs.readFile(process.argv[2],"UTF-8", function(err,buf){
     
    if(err){
        throw err;
    }

    var str = buf.toString();

    var cnt = str.split("\n").length;

    console.log(cnt - 1);
});

