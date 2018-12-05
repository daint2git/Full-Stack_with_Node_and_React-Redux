const pool = require('../connect.db')

module.exports.postAccount = (req, res, next) => {
  const { email, password } = req.body
  const errors = {}

  if (!email || !password) {
    errors.reason = 'Please enter information!'
    res.status(400).send(errors)
    return next()
  }

  const sql = `SELECT * from accounts WHERE email = '${email}' and active = true`
  pool.query(sql, (err, response) => {
    const responseData = response.rows
    let account = {}

    if (!responseData || responseData.length !== 1) {
      errors.email = 'Email is invalid!'
      res.status(401).send(errors)
      return next()
    } else {
      account = {
        email: responseData[0].email,
        password: responseData[0].password,
        role: responseData[0].role,
        fullName: responseData[0].full_name,
        avatar: responseData[0].avatar,
        isAdministrator: responseData[0].role === 'administrator',
        isEditor: responseData[0].role === 'editor',
        isViewer: responseData[0].role === 'viewer',
      }
      if (password !== account.password) {
        errors.password = 'Password is invalid!'
        res.status(401).send(errors)
        return next()
      }
    }

    res.send(account)
  })
}
