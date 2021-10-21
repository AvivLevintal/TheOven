
 const path = require("path");
 const express = require("express");
 const bodyParser = require("body-parser");
 const app = express(); // create express app



 app.use(express.static(path.join(__dirname, "..", "build")));
 app.use(express.static("public"));
 app.use(bodyParser.json());






const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/theovendb');

const recipeSchema  = new mongoose.Schema({
    recipeName: String,
    ingridList: String,
    cookingTime: String,
    instructions: String
  });


const Recipe = mongoose.model('Recipe', recipeSchema, 'recipes')






app.post('/addRecipe', (req,res) => {

  console.log(req.body);
  sendRecipeDB(req.body, Recipe);

});
app.get('/displayCurrentRecipes', (req,res) => {

  const query = Recipe.find({}).lean();

  query.exec(function (err, recipe) {
      if (err) return handleError(err);
        // Prints "Space Ghost is a talk show host."
        res.send(JSON.stringify(recipe));
        //console.log(recipe[0].recipeName);

  });
});

app.listen(5000, () => {
   console.log("server started on port 5000");
 });




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