# Kitsch'n Magician Web Application
=========

When you're leading a busy life with little time to spare, meal planning can be a challenge. People often find themselves scrambling with the decision of what to cook for their next meal, and it can be a source of contention for people living together.

The solution? Kitsch'n Magician. This application takes count of your current kitchen and pantry inventory and returns recipe suggestions based on what you already have, removing the need to leave the house and pick up additional ingredients at the store. Users in the same household can add or remove items in the pantry, and they can also play a matching game where two people select recipes until they match on agreed recipes, adding automatically to meal plans for the week ahead.

Kitsch'n Magician is a Single Page App using React and Material UI for the front end, and Express and PG for the server end. Full dependencies are listed further below in the readme.




## Collaborators

This project was created by:

- [Hoss Agina](https://github.com/Hoss-Agina)
- [Tyler Brown](https://github.com/Tbrowwnnn)
- [Joe Polo](https://github.com/JoePolo1)


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - DB_USER: `labber` 
  - DB_PASS: `123` 
  - DB_NAME: `kitchen`
  - DB_PORT: `5432`
3. This app uses the Spoonacular API to enable recipe search functionality. You can [subscribe to Spoonacular](https://spoonacular.com/food-api) for free or premium services. The API key can be found on your user profile page following subscription. 
4. Install spoonacular's API key in the .env file in the main subdirectory under the name `SPOON_KEY`.
5. Install dependencies: `npm i`
6. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm start` from the api directory
8. Run the client: `npm start` from the kitsch-n-magician subdirectory
  - Note: nodemon is used, so you should not have to restart your server
9. Visit `http://localhost:3000/`

## Warnings & First Time Use Tips

- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.
- Users must be logged into an account in order to use the app features.

IMPORTANT: This app version is currently built for development Demo Mode and does not have bcrypt or cookie storage implemented. It currently uses local storage instead of cookies for session hosting and does not have a functional registration page. In order to demo this as a new user and household, seeding new user info to the database is required. It is recommended to use fake passwords in the Dev environment until bcrypt is implemented in a future update.

## Dependencies

- Axios 1.3
- React 18.x or above
- Node 10.x or above
- NPM 5.x or above
- Express 4.18
- pg 8.5 or above
- Storybook React 6.5 or above
- dotenv 2.0
- morgan 1.9.1
- Nodemon 2.0
- MUI
- SCSS 1.35

## Features

### The Landing Page - Reverse Recipe Search

The primary feature of the Kitsch'n Magician app is simply to add items to your kitchen list via a simple user interface, and search for recipes using yuour existing ingredients. A logged in user may type in ingredients that they own in the input field as shown below, then review recipes suggested by the app based on those ingredients.

Recipe cards populate in the middle of the screen and show the user time to prepare, gluten free/contains gluten, vegan or vegetarian stats as well as a summary of the recipe by clicking on the carrot expander. To keep the view of our app simple, the recipe steps are not shown on this page. Instead, clicking on the View Recipe button will open a new window with the full recipe details on the Spoonacular website. A user may also add recipes to their favourites list to save them for later.



https://user-images.githubusercontent.com/116848899/219198125-6b71bfb7-2dcc-4c2b-8446-f1b3c6da9566.mov


From here, users may also navigate to the [login](#the-login-page) or [register](#the-registration-page) page, the [My Recipes](#my-recipes-page) (favourites) page, the [Pantry](#my-pantry), and the [Matcher](#the-matcher) page.



### The Landing Page - Reverse Recipe Search - Advanced API Configuration

Kitsch'n Magician uses two API calls to spoonacular, one that retrieves ingredients and recipe IDs, and the other which fetches the recipe data itself to parse into the recipe cards. The [documentation on the Spooonacular Website](https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients) outlines the ability to adjust this recipe search based on specific parameters shown in the screenshot below. You can change the number of search results, choose to ignore pantry items or not (this is set to true by default) and maximize/minimize missing ingredients or used ingredients:

![Spoonacular API Parameters](https://github.com/JoePolo1/Kitsch-n-Magician/blob/main/docs/searchparameters.png?raw=true)

### The Registration Page

***NOTE: As mentioned [above](#warnings--first-time-use-tips), the registration page is not currently functional and exists only for Demo Mode purposes. See the instructions [above](#warnings--first-time-use-tips) for help with testing Demo user login sessions.***



### The Login Page

Existing users may log in via the login portal using their username and password as shown below:

https://user-images.githubusercontent.com/116848899/219199623-89b8ec63-4f20-405c-96f4-b4d9d20e0643.mov


### My Recipes Page

The My Recipes page consists of all recipes that a user has added to their favourites list. Selecting a recipe title on the left populates an expanded view card with the same details as the landing page recipe cards. Clicking the delete button automatically removes a recipe from My Recipes.

https://user-images.githubusercontent.com/116848899/219200303-ee560b0f-df45-4f20-9b7d-b304540fdce3.mov


### My Pantry

The pantry is a shared user experience - if two users are logged in they can simultaneously add and remove ingredients from their kitchen after they go shopping or use up ingredients in recipes. Adding or removing items from the pantry is as simple as typing ingredients in the input field on the left and pressing enter. Clicking the delete button automatically removes an item.

https://user-images.githubusercontent.com/116848899/219200938-60beb423-6aec-49d7-81a5-63768213160d.mov


### The Matcher

Elegantly dubbed "Tinder, but for food" by it's creators, the Matcher presents (default) 10 recipes to two users based on their existing pantry for them as a helpful decider on what to eat through the week. As users select recipes to match on, if a recipe is voted yes by both people it will be auto*magic*ally added to the meal plan on the right. Clicking on the button for the recipe will navigate a new browser tab to the full spoonacular website with all of the recipe details.

