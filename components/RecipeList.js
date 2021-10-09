
import Recipe from './Recipe'
import React, {useContext} from 'react'
import { RecipeContext } from './RecipeContext'

const RecipeList = ({type}) => {
    const [recipes, setRecipe] = useContext(RecipeContext);
    return (
        <div>
             {recipes.map((recipe) => 
          (<Recipe key={recipe.id} recipe={recipe} type={type}/>
          ))}  
        </div>
    )
}

export default RecipeList
