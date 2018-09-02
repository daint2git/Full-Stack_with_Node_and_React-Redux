var express = require('express');
var router = express.Router();

const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'phone-store',
  password: 'password',
  port: 5432,
})

/* GET phones listing. */
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM phones WHERE active = true ORDER BY created_at DESC', (err, response) => {
    res.send(response.rows);
  })
});

router.post('/', function(req, res, next) {
  res.send('OK');
});

module.exports = router;
