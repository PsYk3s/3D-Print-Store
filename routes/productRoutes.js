const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route: /products/:id
router.get('/:id', productController.product);

module.exports = router;