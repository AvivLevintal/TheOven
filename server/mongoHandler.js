
 const mongoHandler = () => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/theovendb');

    const recipeSchema  = new mongoose.Schema({
        recipeName: String,
        ingridList: String,
        cookingTime: String,
        instructions: String
    });


    const Recipe = mongoose.model('Recipe', recipeSchema, 'recipes')

    const query = Recipe.find();

    query.exec(function (err, recipe) {
        if (err) return handleError(err);
    // Prints "Space Ghost is a talk show host."
    console.log(recipe);
    });



}
export default mongoHandler