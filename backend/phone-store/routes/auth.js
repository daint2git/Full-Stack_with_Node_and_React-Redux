var express = require('express');
var router = express.Router();

const { Pool } = require('pg')
const { size } = require('lodash')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'phone-store',
  password: 'password',
  port: 5432,
})

/* POST login listing. */
router.post('/', function(req, res, next) {
  const { username, password } = req.body
  const errors = {}

  if (!username || !password) {
    errors.reason = 'Please enter information'
    return res.status(404).send(errors)
  }

  const sql = `SELECT * from accounts WHERE user_name = '${username}' and active = true`
  pool.query(sql, (err, response) => {
    const data = response.rows
    let account = {}

    if (data && data.length > 0) {
      account = {
        ...data[0],
        username: data[0].user_name,
        fullName: data[0].full_name,
      }
      if (!(account.password === password)) errors.password = 'Password is invalid'
    } else {
      errors.username = 'Username is invalid'
    }

    if (size(errors) > 0)  return res.status(401).send(errors)
    res.send(account);
  })
});

module.exports = router;
