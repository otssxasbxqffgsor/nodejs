var fs = require('fs');
var path = require ('path');

var md = `
Sample Markdown Title
=====================

Sample subtitle
----------------

* point
* point
* point

`;
fs.writeFileSync('sample.md', md.trim(), function (err){
    if (err) {
        throw err;
    }
});

fs.readdir('./',function (err, files){

    console.log(files);
    files.forEach(element => {
        var file = path.join(__dirname, element);
        var stat = fs.statSync(file);
        if (stat.isFile() ){
            fs.readFile(file, 'UTF-8',function (error, content){
                if (error){
                    throw error;
                }
                console.log(content);
            });
        }
    });

});