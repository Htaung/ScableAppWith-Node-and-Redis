var express = require('express');
var app = express();
var routes = require('./routes');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var flash = require('connect-flash');


//variable declarations
var bodyParser = require('body-parser');
var csrf = require('csurf');
var util = require('./middleware/utilities');

//all the other variables declarations at the top of app.js
var partials = require('express-partials');
var errorHandlers = require('./middleware/errorhandlers');
var log = require('./middleware/log');

var config = require('./config');

app.set('view engine', 'ejs');
app.use(log.logger);
//with all the other requires at the top of the file
//in the middleware stack
app.use(express.static(__dirname + '/static'));
//app.use(cookieParser());
app.use(cookieParser(config.secret));
//app.use(session());
//app.use(session({secret: 'secret'}));
app.use(session({
    secret: config.secret,
    saveUninitialized: true,
    resave: true,
    store: new RedisStore(
     {url: config.redisUrl, socket: config.redisSocket})
    })
);
//middleware stack after session, but before the routes
app.use(flash());
app.use(util.templateRoutes);

//middleware stack right after session
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser());
app.use(csrf()); //The first is the built-in middleware that will add the token to the session.
app.use(util.csrf); //The other is our utility that will take it from the session and make it available to the template
app.use(util.authenticated);

app.use(partials());
//all other middleware functions
//after variable declarations
app.set('view options', {defaultLayout: 'layout'});
//but before the middleware

app.get(config.routes.login, routes.login);
app.post(config.routes.login, routes.loginProcess);
app.get(config.routes.logout, routes.logout);


/* 
// before config
app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/logout', routes.logout);
app.post('/login', routes.loginProcess);
app.get('/account/login', routes.login);
//app.get('/chat', routes.chat);
app.get('/chat', [util.requireAuthentication], routes.chat);
*/


app.get('/error', function(req, res, next){
next(new Error('A contrived error'));
});

app.use(errorHandlers.error);
app.use(errorHandlers.notFound);




app.listen(3000);
console.log('listening 30000');