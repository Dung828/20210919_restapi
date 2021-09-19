var cors = require('cors');
var modules = require('./modules');
var fs = require('fs');
//var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('privatekey.pem', 'utf8');
var certificate = fs.readFileSync('certificate.pem', 'utf8');
var credentials = { key: privateKey, cert: certificate };
const httpsPort = 8888;

var express = require('express');
var app = express();
// your express configuration here
//var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
app.use(cors());
//---------------------------------
app.get('/gpio', (req, res) => {
    return modules.getGpio(req,res);
});
//---------------------------------
app.get('/pi', (req, res) => {
    return modules.get1(req,res);
});
app.post('/pi/:pin5', (req, res) => {
    return modules.post1(req,res);
});

app.put('/pi/:pin1/:pin2', (req, res) => {
    return modules.put1(req,res);
});

app.delete('/pi', (req, res) => {
    return modules.del1(req,res);
});

httpsServer.listen(httpsPort);
console.log('HTTPS - App Server is listening on port ',httpsPort);
