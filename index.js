var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listCoins', function (req, res) {
   fs.readFile( __dirname + "/" + "coin.json", 'utf8', function (err, data) {
      res.end( data );
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Hello", host, port)
})