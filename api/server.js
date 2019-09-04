const express = require('express');
const router = require('../suppliers/suppliers-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ message: 'got it' });
});

module.exports = server;