import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';
function App() {

  const My_ID = '1ef67cb7';
  const My_KEY = 'e8f5bae875a6b5e866f003d581f01339';

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado');

  useEffect(()=>{
    async function fetchData() {
    const response = await fetch (`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${My_ID}&app_key=${My_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data.hits);
  }
  fetchData()
}, [wordSubmitted])

  const myRecipeSearch = (e) => {
    console.log(e.target.value);
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

 return (
  <div className="App">
  <div className="container">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
    <h1>Find a Recipe</h1>
  </div>

  <div className='container'>
    <form onSubmit={finalSearch}>
      <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
      </input>
      <div className='container'>
    <button>
      <img src="https://img.icons8.com/color/48/000000/fry.png" className='icons' alt='Icon'/>
    </button>
  </div>
    </form>
  </div>

<div>
  {myRecipes.map((element, index) =>(
    <MyRecipesComponent 
    key={index}
    label = {element.recipe.label} 
    mealType={element.recipe.mealType}
    image={element.recipe.image} 
    calories={element.recipe.calories}
    ingredients={element.recipe.ingredientLines}
    />
  ))}
</div>
</div>
 )
}
 export default App;