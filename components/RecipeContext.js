import React, {createContext, useState} from 'react'

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
   const [recipes, setRecipes] = useState([
        {
            recipeName:'שניצל',
            ingridList:'חזה עוף, ביצה, מלח, חרדל, פירוריי לחם',
            cookingTime:'חצי שעה',
            instructions:'חממו מחבת עם שמן עמוק. טבלו את חזה העוף בביצה, חרדל ופירוריי הלחם. טגנו עד להזהבה.',
            id:1
        },
        {
            recipeName:'חביתה',
            ingridList:'ביצה, מלח',
            cookingTime:'חצי שעה',
            instructions:'חממו מחבת עם שמן. ערבבו את הביצה, תבשלו עד שמוכן',
            id:1
        }



   ]);
   
   
   
   
   
    return (
        <RecipeContext.Provider value={[recipes, setRecipes]}>
            {props.children}
        </RecipeContext.Provider>
    )
}
