ServeBDT.com - 1.0.0
=========
Bamboo Dump Truck
A server is a big truck you can just dump things on. The internet is a series of tubes.

A webserver experiment built on nodejs and expressjs :] You'll need an up-to-date version of Nodejs, a build at least as recent as 2014 06 xx.
A Batch script is included to start the server under Windows, but this tool will be optimized for Linux and not Windows Server.

Currently consists of example expressjs code, from here: http://shamadeh.com/blog/web/nodejs/express/2014/07/20/ExpressMultipleSites.html
The original code does not have a declared license. To all added code the AGPL3+ applies: http://opensource.org/licenses/AGPL-3.0

Use
===
Place the website directory inside this project, and add the domain/folder-name pair to the server script (by modifying it directly)[1].

Then just run BDT_start and your server is online!


[1]This is temporary, as it makes updating ServeBDT painful. This will be altered, so that domain/folder pairs will be loaded from a conf file.


Important Usage Notes:
* The bash script is designed to spawn node to run in the background, if you want to stop it you'll need to run kill it yourself ("kill node" in the terminal).

Existing Features:
* Hosts multiple domains and subdomains via vhost
* Generates Sitemap.xml for each site via a python2 script (requires beautiful soup 4, get with pip install bs4 )

Planned Features:
* Auto-detect subdirectories containing "*site*" in the name, and host them
* Cron script to make the server a Cron job; to check that it is running, based on a shell variable (ie, if you don't want the server to be running, or for the Cron job to start it up again, eg during extended maintenance).
* Add script for modifying the hosts file setting localhost as the address for the hosted domains


=========
Daniel Tadeuszow
dtadeuszow@gmail.com


