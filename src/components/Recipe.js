import React, {useContext} from 'react'
import { RecipeContext } from './RecipeContext'

const Recipe = ({recipe, type}) => {
 if(type === 'frontPage'){
    return (
        <div className={'frontPage'}>
            <h3>{recipe.recipeName}</h3>
            <p>{recipe.ingridList}</p>
            <p>{recipe.cookingTime}</p>
            <p>{recipe.instructions}</p>            
        </div>
    )
}
else if(type === 'describedRecipe'){
    return(<div className={'describedRecipe'}>
        <h3>{recipe.recipeName}</h3>
        <p>{recipe.ingridList}</p>
        <p>{recipe.cookingTime}</p>
        <p>{recipe.instructions}</p>            
    </div>
    )
}   
}
export default Recipe
