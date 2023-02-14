    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS households CASCADE;
    DROP TABLE IF EXISTS recipes CASCADE;
    DROP TABLE IF EXISTS ingredients CASCADE;
    DROP TABLE IF EXISTS recipes_ingredients CASCADE;
    DROP TABLE IF EXISTS kitchen_items CASCADE;
    DROP TABLE IF EXISTS favourite_recipes CASCADE;
    DROP TABLE IF EXISTS meal_preps CASCADE;
    DROP TABLE IF EXISTS game_recipes CASCADE;


    CREATE TABLE households (
      id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR (255) NOT NULL
    );

    CREATE TABLE users (
      id SERIAL PRIMARY KEY NOT NULL,
      first_name VARCHAR(255) NOT NULL,
      last_name  VARCHAR(255) NOT NULL,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      household_id INTEGER REFERENCES households(id) ON DELETE CASCADE
    );

    CREATE TABLE recipes (
      id SERIAL PRIMARY KEY NOT NULL,
      title VARCHAR(255) NOT NULL,
      ready_in_minutes INTEGER,
      spoon_url VARCHAR(255) NOT NULL,
      image VARCHAR(255),
      summary VARCHAR(5000) NOT NULL,
      vegetarian BOOLEAN NOT NULL DEFAULT FALSE,
      vegan BOOLEAN NOT NULL DEFAULT FALSE,
      gluten_free BOOLEAN NOT NULL DEFAULT FALSE,
      dairy_free BOOLEAN NOT NULL DEFAULT FALSE
    );


    CREATE TABLE ingredients (
      id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL
    );

    CREATE TABLE recipes_ingredients (
      id SERIAL PRIMARY KEY NOT NULL,
      measurement VARCHAR(255) NOT NULL,
      recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
      ingredient_id INTEGER REFERENCES ingredients(id) ON DELETE CASCADE
    );

    CREATE TABLE kitchen_items (
      id SERIAL PRIMARY KEY NOT NULL,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      ingredient_id INTEGER REFERENCES ingredients(id) ON DELETE CASCADE,
      household_id INTEGER REFERENCES households(id) ON DELETE CASCADE
    );

    CREATE TABLE favourite_recipes (
      id SERIAL PRIMARY KEY NOT NULL,
      recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
    );

    -- ALTER TABLE favourite_recipes
    -- ADD CONSTRAINT no_repitions UNIQUE (recipe_id, user_id);

    CREATE TABLE game_recipes (
      id SERIAL PRIMARY KEY NOT NULL,
      household_id INTEGER REFERENCES households(id) ON DELETE CASCADE,
      recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
      matcher_decision INTEGER NOT NULL DEFAULT 0,
      time_played INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE meal_preps (
      id SERIAL PRIMARY KEY NOT NULL,
      household_id INTEGER REFERENCES households(id) ON DELETE CASCADE,
      recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE
    );
