const express = require('express')
const router = express.Router()
const controller = require('../controllers/phones')

router.get('/', controller.getPhones)
router.post('/', controller.postPhone)
router.get('/:id', controller.getPhone)

module.exports = router