var fs = require('fs');
var path = require('path');
var stream = '';
var data = '';
var fileExport = '';
fs.readdir("./lib", function(err, files) {

    files.forEach(function(fileName) {
        
        var file = path.join(__dirname, "lib", fileName);
        var fileExport = path.join(__dirname, "lib/export", fileName);
        var stats = fs.statSync(file);
        
        if(stats.isFile() && fileName !== ".DS_Store") {
            console.log(fileName);
            stream = fs.createReadStream(file, "UTF-8");
            stream.once("data", function() {
                console.log("\n\n\n");
                console.log("Started Reading File");
                console.log("\n\n\n");
            });
            
            stream.on("data", function(chunk) {
                process.stdout.write(`  chunk: ${chunk.length} |`);
                data += chunk;
            }); 
            
            stream.on("end", function(err) {
                if(err){ throw err;}

                console.log("\n\n\n");
               
                var myArray = "";
                let itemArray = JSON.parse(data);
                itemArray.results.forEach(element => {
                    element.alternatives.forEach(item =>{
                        //  console.log(item.transcript+'\n'); 
                         myArray+= ('\n'+item.transcript+'\n');
                         
                         
                });
            });
                fs.writeFile(fileExport, myArray.trim(), function(err) {

                    console.log("File Created");
                
                });
                
                console.log(`Finished Reading File ${data.length}`);
                console.log("\n\n\n");
            });
        }
        
    });
    
});
