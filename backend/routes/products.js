const express = require('express')
const router = express.Router()

const {
  getProducts,
  getProduct,
  getProductBeforeDelete,
  postProduct,
  patchProduct,
  deleteProduct,
} = require('../controllers/products')

router.get('/', getProducts)
router.get('/:id', getProduct)
router.get('/beforeDelete/:id', getProductBeforeDelete, getProducts)
router.post('/', postProduct, getProducts)
router.patch('/:id', patchProduct, getProducts)
router.delete('/:id', deleteProduct, getProducts)

module.exports = router
