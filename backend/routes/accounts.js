const express = require('express')
const router = express.Router()

const controller = require('../controllers/accounts')

router.post('/', controller.postAccount)

module.exports = router
