var fs = require ('fs');;
var path = require ('path');

fs.readdir('./lib',function (err, files){

    console.log(files);
    files.forEach(element => {
        var file = path.join(__dirname, 'lib', element);
        var stat = fs.statSync(file);
        if (stat.isFile() && element != '.DS_Store'){
            fs.readFile(file, 'UTF-8',function (error, content){
                if (error){
                    throw error;
                }
                console.log(content);
            });
        }
    });

});