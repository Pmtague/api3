const express = require('express');

const server = express();

server.get('/', () => {
	res.status(200).json({ message: 'got it' });
});

module.exports = server;