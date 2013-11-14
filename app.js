var cluster = require('cluster');
var http = require('http');
var path = require('path');
var numCPUs = require('os').cpus().length;
var express = require('express');
var routes = require('./routes');
var service = require('./routes/service');
var repository = require('./routes/repository');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
//app.use(express.session({secret:'8u7y6g'}));
app.use(app.router);
app.use(express.compress());
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/browser/', service.getRepositories);
app.get('/browser/:repositoryId', repository.router);
app.post('/browser/:repositoryId', repository.router);
//app.get('/connections/:address', connections.connect);


http.createServer(app).listen(app.get('port'), '0.0.0.0', function () {
    console.log('Express server listening on port ' + app.get('port'));
});
/*

 if (cluster.isMaster) {
 console.log("master start...");

 // Fork workers.
 for (var i = 0; i < numCPUs; i++) {
 cluster.fork();
 }

 cluster.on('listening', function (worker, address) {
 console.log('listening: worker ' + worker.process.pid + ', Address: ' + address.address + ":" + address.port);
 });

 cluster.on('exit', function (worker, code, signal) {
 console.log('worker ' + worker.process.pid + ' died');
 });
 } else {
 http.createServer(app).listen(app.get('port'), '0.0.0.0', function () {
 console.log('Express server listening on port ' + app.get('port'));
 });

 }
 */
