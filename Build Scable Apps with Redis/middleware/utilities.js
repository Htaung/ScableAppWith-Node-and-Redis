
var config = require('../config');
//the other functions or you could put this at the top
exports.templateRoutes = function templateRoutes(req, res, next){
res.locals.routes = config.routes;
next();
};

//The other is our utility that will take it from the session and make it available to the template
module.exports.csrf = function csrf(req, res, next) {
    res.locals.token = req.csrfToken();
    console.log('csrf tokern ==> ' + res.locals.token);
    next();
};

module.exports.authenticated = function authenticated(req, res, next) {
    res.locals.isAuthenticated = req.session.isAuthenticated;
    if (req.session.isAuthenticated) {
        res.locals.user = req.session.user;
    }
    next();
};

module.exports.requireAuthentication = function
    requireAuthentication(req, res, next) {
    if (req.session.isAuthenticated) {
        next();
    } else {
        res.redirect(config.routes.login);
    }
};

module.exports.auth = function auth(username, password, session) {
    var isAuth = username === 'aung' || username === 'thiri';
    if (isAuth) {
        session.isAuthenticated = isAuth;
        session.user = { username: username };
    }
    return isAuth;
};

module.exports.logout = function logout(session) {
    session.isAuthenticated = false;
    delete session.user;
};


