const express = require('express')
const multer = require('multer')
const cors = require('cors')

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

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:6969',
  }),
)

app.use('/api/accounts', accountsRouter)
app.use('/api/products', productsRouter)

app.get('/', (req, res) => res.send('DaiNT2 - Hello backend!'))

app.listen(port, () => console.log(`Server listening on port ${port}`))
