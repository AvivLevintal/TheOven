import React, {useState, useContext} from 'react';
import { RecipeContext } from './RecipeContext'

const AddRecipe = () => {
    const [recipeName, setName] = useState();
    const [ingridList, setIngrid] = useState();
    const [cookingTime, setCookingTime] = useState();
    const [instructions, setInstructions] = useState();
    
    const [recipes, setRecipes] = useContext(RecipeContext);

    const addRecipe = (e) => {
        e.preventDefault();
        
        setRecipes(prevRecipes => [...prevRecipes, {recipeName: recipeName, ingridList: ingridList, cookingTime: cookingTime, instructions: instructions, id: recipes.length-1}]);

    }
    const onSubmit = () => {
        console.log('test')
    }

    return (
        <form className='add-form' onSubmit={addRecipe}>
            <div className='form-control'>
                <label>שם מתכון</label>
                <input type='text' placeholder='שם...' value={recipeName} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>מרכיבים</label>
                <input type='text' placeholder='מרכיבים...' value={ingridList} onChange={(e) => setIngrid(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>זמן בישול</label>
                <input type='text' placeholder='זמן בישול...' value={cookingTime} onChange={(e) => setCookingTime(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>הוראות הכנה</label>
                <input type='text' placeholder='הוראות הכנה' value={instructions} onChange={(e) => setInstructions(e.target.value)}/>
            </div>

            <input type="submit" value="הוסף מתכון" className="btn btn-block"/>
        </form>
    )
}

export default AddRecipe
