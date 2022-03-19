function MyRecipesComponent({label,mealType, image, calories, ingredients}) {
    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container">
                <h3>{mealType}</h3>
            </div>
            
            <div className="container">
                <img src={image} alt="Dish" className="tasty"/>
            </div>

            <ul className="list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png"
                    className="icon" alt='Check'/>{ingredient}</li>
                ))}
            </ul>
            
            <div className="container">
                <p>{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}
export default MyRecipesComponent;