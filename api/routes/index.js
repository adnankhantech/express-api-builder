const express = require('express');
const router = express.Router();
const users = require('./users');
const products = require('./products')

module.exports = () => {

	let middlewareFunction = (req, res, next) => {
		next();
	}

	router.use('/users', middlewareFunction, users);
	router.use('/products', middlewareFunction, products);
	
	return router;

};
