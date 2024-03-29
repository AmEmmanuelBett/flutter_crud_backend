const productsController = require("../controllers/products.controller")
const express = require('express')
const router = express.Router()

router.get('/products', productsController.findAll)
router.get('/products/:id', productsController.findOne)
router.post('/products', productsController.create)
router.put('/products/:id', productsController.update)
router.delete('/products/:id', productsController.delete)

module.exports = router