'use strict';

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order-controller');
const authService = require('../services/auth-service');

router.get('/', authService.authorize, orderController.get);
router.post('/', authService.authorize, orderController.post);

module.exports = router;
