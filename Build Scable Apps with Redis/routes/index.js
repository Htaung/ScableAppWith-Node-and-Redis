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

    function index(req, res){
        //res.cookie('IndexCookie', 'This was set from Index');
        res.render('index', {title: 'Index'});
        };

    function login(req, res){
        
        res.render('login', {title: 'Login '});
    };

    function loginProcess(req, res){
        //res.redirect('/');
        console.log(req.body);
        res.send(req.body.username + ' ' + req.body.password);
        

    };

    function chat(req, res){
        res.render('chat', {title: 'Chat'});
    };

    module.exports = {
        index: index,
        login: login,
        loginProcess: loginProcess,
        chat: chat
    };