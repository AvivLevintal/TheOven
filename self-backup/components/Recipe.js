import React, {useContext} from 'react'
import { RecipeContext } from './RecipeContext'

const Recipe = ({recipe}) => {
 
    return (
        <div>

            <h3>{recipe.recipeName}</h3>
            <p>{recipe.ingridList}</p>
            <p>{recipe.cookingTime}</p>
            <p>{recipe.instructions}</p>
            
            
        </div>
    )

    
}

export default Recipe
