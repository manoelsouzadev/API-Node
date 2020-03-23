'use strict';

const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer-controller');
const authService = require('../services/auth-service');

router.post('/', customerController.post);
router.post('/authenticate', customerController.authenticate);
router.post('/refresh-token', authService.authorize, customerController.refreshToken);

module.exports = router;