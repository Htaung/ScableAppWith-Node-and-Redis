<h1>Build Scable Apps with redis and node </h1>


<h3>Remember that the middleware is processed in order </h3>



<h1>Redis as a session store </h1>
<h1> Redis on window https://github.com/MicrosoftArchive/redis/releases </h1>
redis-cli -h 192.168.10.01 -p  6380 ping

<p>
First install Redis_cli if you are using window
<pre><code>
npm install redis -save
npm install connect-redis -save
</code></pre>

For a production-ready scalable application, Redis will be moved to a separate
server or even several servers.
</p>

Alt+ shift + F Source formatting in windows


<h2>Comment in EJS </h2>
<pre><code>
<% /* %>

<% */ %>
</code></pre>


Res.locals is a special object that is available to all templates that have access
to this response

The app.use function will apply the middleware to
every request coming in.

For some though, the middleware should only be executed on certain routes
app.get('/chat', [util.requireAuthentication], routes.chat);

Our authentication middleware sets req.locals.isAuthenticated, which means
that any request can run a Boolean check on it. It also sets the req.locals.user
object for the template.

Flash messaging is
when we have something to tell the user from one request to the next

use connect-flash to let the user know when something has happened.
Connect-flash uses the session, so it must be after the session middleware

//variable declarations
Var flash = require('connect-flash');
//middleware stack after session, but before the routes
app.use(flash());


req.flash('error', 'Wrong Username or Password');
//The message is now in the session.

To display this
req.flash('error'); //will also delete it from the session


Let's say
our app grows and the secret is referenced in two other middleware. This will create
a lot of pain and waste time tracking down weird bugs in the code. What we need is
a config file to store all the application's settings.

A quick check of our application shows that we
are using the string '/login' in four different places. Let's all make it in one place.

res.locals.routes = config.routes;
just adds the routes object from config to res.locals.
Every template will now be able to use the login and logout routes.


Page No.45
