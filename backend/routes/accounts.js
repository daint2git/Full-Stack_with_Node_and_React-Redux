const express = require('express')
const router = express.Router()

const { postAccount } = require('../controllers/accounts')

router.post('/', postAccount)

module.exports = router
