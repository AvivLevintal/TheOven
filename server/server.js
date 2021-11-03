
/*
Purpose: The main express server file.
Author:Aviv
*/

 const path = require("path");
 const express = require("express");
 const bodyParser = require("body-parser");
 const app = express(); // create express app


//Default path to search the build. Important to run build before testing.
 app.use(express.static(path.join(__dirname, "..", "build")));
 app.use(express.static("public"));
 app.use(bodyParser.json());





//Connect to the db via mongoose libary
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/theovendb');

//Create a new schema for recipes
const recipeSchema  = new mongoose.Schema({
    recipeName: String,
    ingridList: String,
    cookingTime: String,
    instructions: String
  });


const Recipe = mongoose.model('Recipe', recipeSchema, 'recipes')





//Post request for adding a recipe, more info in AddRecipe.js
app.post('/addRecipe', (req,res) => {

  console.log(req.body);
  sendRecipeDB(req.body, Recipe);

});
//Get request for fetching recipes, more info in RecipeContext.js
app.get('/displayCurrentRecipes', (req,res) => {

  const query = Recipe.find({}).lean();

  query.exec(function (err, recipe) {
      if (err) return handleError(err);
        res.send(JSON.stringify(recipe));

  });
});

app.listen(5000, () => {
   console.log("server started on port 5000");
 });



/*
Insert a single recipe into the db. 
*/
const sendRecipeDB = (request, Recipe) => {

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  
  console.log("Connection Successful!");
  

  const recipeTest = new Recipe({
      recipeName: request.recipeName,
      ingridList: request.ingridList,
      cookingTime: request.cookingTime,
      instructions: request.instructions

  });

  console.log(recipeTest.recipeName);

  recipeTest.save(function (err, recipe   ){
      if (err) return console.log(err);
      console.log(recipe.recipeName + " saved to collection theovendb");

  });

}