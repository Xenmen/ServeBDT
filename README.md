ServeBDT.com - 1.0.0
=========
Bamboo Dump Truck
A server is a big truck you can just dump things on. The internet is a series of tubes.
A webserver experiment built on nodejs and expressjs :]
You'll need an up-to-date version of Nodejs, a build at least as recent as 2014 06 xx.
A Batch script is included to start the server under Windows, but this tool will be optimized for Linux and not Windows Server.

Currently consists of example expressjs code, from here: http://shamadeh.com/blog/web/nodejs/express/2014/07/20/ExpressMultipleSites.html
The original code does not have a declared license. To all added code the AGPL3+ applies: http://opensource.org/licenses/AGPL-3.0

Use
===
Presently, you must modify the nodejs_server.js script itself, so git-pull won't be pleasant. This will be altered to be loaded from a conf file as I have time. My first priority is to get this code up and running for my personal site. Then, the conf file will be implemented, and then a script to register it as a service, and then the Cron job, as mentioned below in planned features.


Notes:
* The bash script is designed to spawn node to run in the background, if you want to stop it you'll need to run kill it yourself ("kill node" in the terminal).

Future Features:
* Install script to add the server to the services list and make it a Cron job to check that it is running, based on a shell variable (ie, if you don't want the server to be running, or for the Cron job to start it up again, eg during extended maintenance).


=========
Daniel Tadeuszow
dtadeuszow@gmail.com


