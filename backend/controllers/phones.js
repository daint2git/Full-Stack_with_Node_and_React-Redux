const pool = require('../database/connect.db')

const getPhones = (req, res, next) => {
  const sql = 'SELECT * FROM phones WHERE active = true ORDER BY created_at DESC'
  pool.query(sql, (err, response) => {
    res.send(response.rows)
  })
}

const postPhone = (req, res, next) => {
  const { name, describe, price, quantity, category, active } = req.body
  const sql = `INSERT INTO phones (name, describe, price, quantity, category, active)
    VALUES ('${name}', '${describe}', '${price}', '${quantity}', '${category}', ${active})`
  pool.query(sql, (err, response) => {
    res.send('OK')
  })
}

const getPhone = (req, res, next) => {
  const { id } = req.params
  const sql = `SELECT * FROM phones WHERE id = ${id}`
  pool.query(sql, (err, response) => {
    res.send(response.rows[0])
  })
}

module.exports = { getPhones, postPhone, getPhone }