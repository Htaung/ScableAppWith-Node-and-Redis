var express = require('express');
var app = express();
var routes = require('./routes');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

//variable declarations
var bodyParser = require('body-parser');
var csrf = require('csurf');
var util = require('./middleware/utilities');


//all the other variables declarations at the top of app.js
var partials = require('express-partials');
var errorHandlers = require('./middleware/errorhandlers');
var log = require('./middleware/log');

app.set('view engine', 'ejs');
//app.use(log.logger);
//with all the other requires at the top of the file
//in the middleware stack
app.use(express.static(__dirname + '/static'));
//app.use(cookieParser());
app.use(cookieParser('secret'));
//app.use(session());
//app.use(session({secret: 'secret'}));
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    store: new RedisStore(
     {url: 'redis://localhost', socket: 6379})
    })
);

//middleware stack right after session
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser());
app.use(csrf()); //The first is the built-in middleware that will add the token to the session.
app.use(util.csrf); //The other is our utility that will take it from the session and make it available to the template

app.use(partials());
//all other middleware functions
//after variable declarations
app.set('view options', {defaultLayout: 'layout'});
//but before the middleware


app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/account/login', routes.login);
app.get('/chat', routes.chat);

app.get('/error', function(req, res, next){
next(new Error('A contrived error'));
});

app.use(errorHandlers.error);
app.use(errorHandlers.notFound);




app.listen(3000);
console.log('listening 30000');