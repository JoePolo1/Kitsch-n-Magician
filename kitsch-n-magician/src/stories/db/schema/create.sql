    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS household CASCADE;
    DROP TABLE IF EXISTS recipes CASCADE;
    DROP TABLE IF EXISTS ingredients CASCADE;
    DROP TABLE IF EXISTS recipes_ingredents CASCADE;
    DROP TABLE IF EXISTS kitchen_items CASCADE;
    DROP TABLE IF EXISTS favourite_recipes CASCADE;
    DROP TABLE IF EXISTS meal_prep CASCADE;
    DROP TABLE IF EXISTS matched_recipes CASCADE;

    CREATE TABLE users (
      id  SERIAL PRIMARY KEY NOT NULL,
      first_name VARCHAR(255) NOT NULL,
      last_name  VARCHAR(255) NOT NULL,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      household_id INTEGER REFERENCES household(id) ON DELETE CASCADE
    )

    CREATE TABLE household (
      id SERIAL PRIMARY KEY NOT NULL, 
      name VARCHAR (255) NOT NULL
    )

    CREATE TABLE recipes (
      id SERIAL PRIMARY KEY NOT NULL,
      title VARCHAR(255) NOT NULL,
      cookTime INTEGER,
      prepTime INTEGER,
      spoonUrl VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      summary VARCHAR(255) NOT NULL,
      vegetarian BOOLEAN DEFAULT FALSE,
      vegan BOOLEAN DEFAULT FALSE,
      gluten_free BOOLEAN DEFAULT FALSE,
      dairy_free BOOLEAN DEFAULT FALSE
    )

    CREATE TABLE ingredients (
      id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL
    )

    CREATE TABLE recipes_ingredients (
      id SERIAL PRIMARY KEY NOT NULL,
      measurement VARCHAR(255) NOT NULL,
      recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE, 
      ingredient_id INTEGER REFERENCES ingredients(id) ON DELETE CASCADE
    )

    CREATE TABLE kitchen_items (
      id SERIAL PRIMARY KEY NOT NULL,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      ingredient_id INTEGER REFERENCES ingredients(id) ON DELETE CASCADE
    )

    CREATE TABLE favourite_recipes (
      id SERIAL PRIMARY KEY NOT NULL,
      recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE, 
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
    )

    CREATE TABLE meal_prep (
      id SERIAL PRIMARY KEY NOT NULL,
      day_of_the_week VARCHAR(255) NOT NULL,
      household_id INTEGER REFERENCES household(id) ON DELETE CASCADE,
      recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE
    )

    CREATE TABLE matched_recipes (
      id SERIAL PRIMARY KEY NOT NULL,
      household_id INTEGER REFERENCES household(id) ON DELETE CASCADE,
      recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE
    )