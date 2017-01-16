var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.end('Node JS and express running on a unikernel! Requested url: ' + req.url+' Timestamp:'+Date.now());
});

var port =3000;
app.listen(port);

module.exports = app;
