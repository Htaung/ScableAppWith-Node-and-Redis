
//The other is our utility that will take it from the session and make it available to the template
module.exports.csrf = function csrf(req, res, next){
    res.locals.token = req.csrfToken();
    console.log('csrf tokern ==> ' + res.locals.token);
    next();
    };