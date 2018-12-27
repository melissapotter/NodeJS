var fs = require('fs');

// fs.unlink('writeMe.txt'); // remove file

// fs.mkdirSync('stuff'); // create directory

// fs.mkdir('stuff', function(){
//     fs.readFile('README.txt', 'utf8', function(err, data){
//       fs.writeFile('./stuff/writeMe.txt', data);  
//     });
// }); // a syc way

// fs.rmdirSync('stuff'); // remove directory

fs.unlink('./stuff/writeMe.txt', function(){ // remove files inside dir and then remove dir a sync way

fs.rmdir('stuff');
});