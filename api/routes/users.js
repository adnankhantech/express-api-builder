const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/:collection/:doc_id', usersController.getCollectionData);

module.exports = router;
