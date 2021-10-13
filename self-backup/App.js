import logo from './logo.png';
import './App.css';
import AddRecipe from './components/AddRecipe.js';
import {RecipeProvider} from './components/RecipeContext.js';
import RecipeList from './components/RecipeList.js';

function App() {
  return (
    <RecipeProvider>
    <div className="App">
      <h6 className="upperside">©Aviv and Ofir 2021 <img src={logo} className="hatanuricon"/></h6>
      <AddRecipe />
      <RecipeList />
    </div>
    </RecipeProvider>
  );
}

export default App;
