var express = require('express');

var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
  res.sendfile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
  var data = {age: 25, job: 'developer'};
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(8080);




// var server = http.createServer(function(req, res){
//     console.log('request was made: '+ req.url);
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if(req.url === '/contact'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     }
//     else if(req.url === '/api/coders'){
//         var coders = [{name: 'mel', age: 25}, {name: 'mario', age: 42}];
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(coders));
//     } 
//     else{
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
// });

// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');