console.log('index.js executing');

var express = require('express');
var app = express();

app.get('/',function(req, res){
  res.send('Hello, World!');
});

var port = 3000;
app.listen(port,function(){
  console.log('Listenting on port ' + port);
});
