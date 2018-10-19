/* function index(req, res){
     //res.send('Index');
     //res.render('index', {title: 'Index'});
     res.cookie('IndexCookie', 'This was set from Index');

     
    
     console.log('cook' + JSON.stringify(req.cookies));     

     res.render('index', {title: 'Index', cookie: JSON.stringify(req.cookies)});
 };*/

/*function index(req, res){
    res.cookie('IndexCookie', 'This was set from Index');
    res.render('index', {title: 'Index',
    cookie: JSON.stringify(req.cookies),
    session: JSON.stringify(req.session),
    signedCookie: JSON.stringify(req.signedCookies)});
};*/

//add a reference to util at the top of the file
var util = require('../middleware/utilities');
var config = require('../config');

function index(req, res) {
    //res.cookie('IndexCookie', 'This was set from Index');
    res.render('index', { title: 'Index' });
};

function login(req, res) {

    res.render('login', { title: 'Login ', message: req.flash('error') });
};

function logout(req, res){
    util.logout(req.session);
    res.redirect('/');
    };

function loginProcess(req, res) {
    //res.redirect('/');
    console.log(req.body);
    var isAuth = util.auth(req.body.username, req.body.password, req.session);
    if(isAuth) {
        res.redirect('/chat');
    }else{
        req.flash('error', 'Wrong userName or Password');
        res.redirect(config.routes.login);
    }
    //res.send(req.body.username + ' ' + req.body.password);


};

function chat(req, res) {
    res.render('chat', { title: 'Chat' });
};

module.exports = {
    index: index,
    login: login,
    loginProcess: loginProcess,
    chat: chat,
    logout: logout
};