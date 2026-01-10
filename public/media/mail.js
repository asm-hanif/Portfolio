var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');

var app = express();
var server = http.Server(app);
var port = 500;

app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'MyPortfolio/home.html')));

app.get("/", function(req, response){
    response.sendFile(path.join(__dirname, 'MyPortfolio/home.html'))
})

//initialize web server//
server.listen(port, function(){
    console.log('Server is running on port ' + port);
})