const pool = require('../database/connect.db')

const getProducts = (req, res, next) => {
  const sql = 'SELECT * FROM products WHERE active = true ORDER BY created_at DESC'
  pool.query(sql, (err, response) => res.send(response.rows))
}

const getProduct = (req, res, next) => {
  const { id } = req.params
  const sql = `SELECT * FROM products WHERE id = ${id}`
  pool.query(sql, (err, response) => res.send(response.rows[0]))
}

const postProduct = (req, res, next) => {
  const { name, description, image, price, quantity, manufacturer, category, active } = req.body
  const sql = `
    INSERT INTO products (name, description, image, price, quantity, manufacturer, category, active)
    VALUES (
      '${name}',
      '${description}',
      '${image}',
      '${price}',
      '${quantity}',
      '${manufacturer}',
      '${category}',
      ${active}
    )
  `
  pool.query(sql, (err, response) => res.send('OK'))
}

module.exports = { getProducts, getProduct, postProduct }