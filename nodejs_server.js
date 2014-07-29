
// Original code copyright Saleh Hamadeh: http://shamadeh.com/blog/web/nodejs/express/2014/07/20/ExpressMultipleSites.html
// Original commit is Saleh's code entirely, released under undeclared license
// Xenmen (Daniel Tadeuszow) assumes CC attribution is acceptable
// All code added since the initial commit is released under the AGPL3+
// A copy of the license is included in the repo, and the original can be found @ http://opensource.org/licenses/AGPL-3.0

// Module dependencies.
var application_root = __dirname,
    express = require( 'express' );

function createVirtualHost(domainName, dirPath) {
    var vhost = express();
    //parses request body and populates request.body
    vhost.use( express.bodyParser() );
    //checks request.body for HTTP method overrides
    vhost.use( express.methodOverride() );
    //Where to serve static content
    vhost.use( express.static( dirPath ) );
    //Show errors
    vhost.use( express.errorHandler({ dumpExceptions: true, showStack: true }));

    return express.vhost(domainName, vhost)
}

//Create server
var server = express();

//Create the virtual hosts
var tadeuszowHost = createVirtualHost("www.tadeuszow.com", "Tadeuszow-site");
var becoolHost = createVirtualHost("www.iwannabecool.ca", "iwannabecool-site");

//Use the virtual hosts
server.use(tadeuszowHost);
server.use(becoolHost);

//Start server
var port = 80;
server.listen(
	port, function() {
		console.log( 'Express server listening on port %d in %s mode', port, server.settings.env );
	}
);
