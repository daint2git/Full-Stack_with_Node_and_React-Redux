const express = require('express')
const multer = require('multer')

const accountsRouter = require('./routes/accounts')
const productsRouter = require('./routes/products')

const app = express()
const upload = multer()
const port = process.env.PORT || 9696

// for parsing application/json
app.use(express.json())

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }))

// for parsing multipart/form-data
app.use(upload.array())

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next()
// })

app.use('/api/accounts', accountsRouter)
app.use('/api/products', productsRouter)

app.get('/', (req, res) => res.send('DaiNT2 - Hello backend!'))

app.listen(port, () => console.log(`Server listening on port ${port}`))