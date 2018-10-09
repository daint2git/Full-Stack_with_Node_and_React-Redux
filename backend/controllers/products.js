const { oneLine } = require('common-tags')
const pool = require('../connect.db')

module.exports.getProducts = (req, res, next) => {
  const sql = 'SELECT * FROM products ORDER BY created_at DESC'
  pool.query(sql, (err, response) => res.send(response.rows))
}

module.exports.getProduct = (req, res, next) => {
  const { id } = req.params
  const sql = `SELECT * FROM products WHERE id = ${id}`
  pool.query(sql, (err, response) => {
    if (err) next(err)
    res.send(response.rows[0])
  })
}

module.exports.getProductBeforeDelete = (req, res, next) => {
  const { id } = req.params
  const sql = `SELECT name FROM products WHERE id = ${id}`
  pool.query(sql, (err, response) => {
    if (err) next(err)
    res.send(response.rows[0])
  })
}

module.exports.postProduct = (req, res, next) => {
  const { name, description, image, price, quantity, manufacturer, category, active } = req.body
  const sql = oneLine`
    INSERT INTO
      products
      (
        name,
        description,
        image, price,
        quantity,
        manufacturer,
        category,
        active
      )
    VALUES
      (
        '${name}',
        '${description}',
        '${image}',
        ${price},
        ${quantity},
        '${manufacturer}',
        '${category}',
        ${active}
      )
  `
  pool.query(sql, (err, response) => {
    if (err) next(err)
    next()
  })
}

module.exports.patchProduct = (req, res, next) => {
  const { id } = req.params
  const { name, description, image, price, quantity, manufacturer, category, active } = req.body
  const sql = oneLine`
    UPDATE
      products
    SET
      name = '${name}',
      description = '${description}',
      image = '${image}',
      price = ${price},
      quantity = ${quantity},
      manufacturer = '${manufacturer}',
      category = '${category}',
      active = ${active},
      updated_at = CURRENT_TIMESTAMP
    WHERE
      id = ${id}
  `
  pool.query(sql, (err, response) => {
    if (err) next(err)
    next()
  })
}

module.exports.deleteProduct = (req, res, next) => {
  const { id } = req.params
  const sql = oneLine`
    DELETE FROM
      products
    WHERE
      id = ${id}
  `
  pool.query(sql, (err, response) => {
    if (err) next(err)
    next()
  })
}