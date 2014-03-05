var express = require('express');
var app = express();

//for debug
app.use(express.logger());

app.configure(function(){
	app.use(express.compress());
	app.use(express.urlencoded());
	app.use(express.json());
	app.use(express.cookieParser());
	app.use(express.methodOverride());
});

//app.use(express.static(__dirname + '/html', { maxAge: 86400 }));
app.use(express.static(__dirname + '/html'));

var PORT= process.env.PORT|| 8888;
app.listen(PORT);
console.log('Application start, port: '+ PORT);
