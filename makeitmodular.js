var filterfn = require('./filterfile');
var dir = process.argv[2];
var ext = process.argv[3];

filterfn(dir,ext,function(err,list){
 
    if(err){
        console.log(err);
    }
    list.forEach(function(file){
   
        console.log(file);

    });


});
