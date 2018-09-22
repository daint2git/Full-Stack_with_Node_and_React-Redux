const size = require('lodash/size')
const pool = require('../database/connect.db')

const getIndex = (req, res, next) => {
  const { username, password } = req.body
  const errors = {}

  if (!username || !password) {
    errors.reason = 'Please enter information'
    res.status(404)
    res.send(errors)
    return next()
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

    if (size(errors) > 0) {
      res.status(401)
      res.send(errors)
      return next()
    }
    res.send(account)
  })
}

module.exports = { getIndex }