const express = require('express')
const multer = require('multer')

const authRouter = require('./routes/auth')
const phonesRouter = require('./routes/phones')

const app = express()
const upload = multer()
const port = process.env.PORT || 9696

// for parsing application/json
app.use(express.json())

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }))

// for parsing multipart/form-data
app.use(upload.array())

app.use('/api/auth', authRouter)
app.use('/api/phones', phonesRouter)

app.get('/', (req, res) => res.send('DaiNT2 - Hello backend!'))

app.listen(port, () => console.log(`Server listening on port ${port}`))