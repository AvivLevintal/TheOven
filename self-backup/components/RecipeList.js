
import Recipe from './Recipe'
import React, {useContext} from 'react'
import { RecipeContext } from './RecipeContext'

const RecipeList = () => {
    const [recipes, setRecipe] = useContext(RecipeContext);
    return (
        <div>
             {recipes.map((recipe) => 
          (<Recipe key={recipe.id} recipe={recipe}/>
          ))}  
        </div>
    )
}

export default RecipeList
