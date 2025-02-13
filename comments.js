// Create web server
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
var https = require('https');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');

// Create and listen on HTTP server
server.listen(3000, '');