"use strict";

module.exports = function setups(options, imports, register) {
	var httpServer = imports.httpServer;
	var engine = require('engine.io');
	var server = engine.attach(httpServer);

	register(null,{
		socketServer: server
	});
}
