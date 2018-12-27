var fs = require('fs');

// var readMe = fs.readFileSync('README.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readMe);

fs.readFile('README.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
});

