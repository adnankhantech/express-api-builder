const express = require('express');
const router = express.Router();
const users = require('./users');

module.exports = () => {

	let middlewareFunction = (req, res, next) => {
		next();
	}

	router.use('/exportCollections/', middlewareFunction, users);
	
	return router;

};
