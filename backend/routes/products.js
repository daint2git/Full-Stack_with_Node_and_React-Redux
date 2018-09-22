const express = require('express')
const router = express.Router()

const controller = require('../controllers/products')

router.get('/', controller.getProducts)
router.get('/:id', controller.getProduct)
router.post('/', controller.postProduct)

module.exports = router