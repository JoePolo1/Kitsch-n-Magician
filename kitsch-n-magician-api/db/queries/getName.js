const db = require('../connection')


const getName = (userId) => {
  return db.query(
    `SELECT first_name FROM users
    WHERE users.id = $1 `,
    [userId]
  )
  .catch((error) => {console.log(error)})
}

module.exports = getName
