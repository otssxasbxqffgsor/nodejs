var fs = require ('fs');

if (fs.existsSync('lib')){
console.log('Directory already there');
}else {

    fs.mkdir('lib',function(err){
        if (err){
            console.log(err);
        }
        console.log('directory created');
    });
}