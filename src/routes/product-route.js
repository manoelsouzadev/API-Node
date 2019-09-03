'use strict';

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

router.get('/', productController.get);
router.get('/:slug', productController.getBySlug);
router.post("/", productController.post);
router.put("/:id", productController.put);
router.delete("/", productController.delete);

module.exports = router