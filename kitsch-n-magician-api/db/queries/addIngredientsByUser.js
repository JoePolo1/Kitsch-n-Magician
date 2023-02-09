const db = require('../connection');

const addIngredientsByUser = (userId, ingredient) => {
    const query = `INSERT INTO kitchen_items (user_id, ingredient_id, household_id)
    VALUES ($1, $2, (SELECT household_id FROM users WHERE users.id = $1))`
    const values = [userId, ingredient]
    return db.query(query, values)
    .catch((error) => {console.log(error)})
}

module.exports = addIngredientsByUser
