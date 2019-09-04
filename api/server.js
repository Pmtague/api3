const express = require('express');
const supplierRouter = require('../suppliers/suppliers-router.js');

const server = express();

server.use(express.json());

server.use('/suppliers', supplierRouter);

server.get('/', (req, res) => {
	res.status(200).json({ message: 'got it' });
});

module.exports = server;