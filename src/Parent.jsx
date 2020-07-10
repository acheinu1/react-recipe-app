import React, { useEffect, useState } from 'react';
import Recipes from "./children/recipes";

const Parent = () => {
    const API_ID = "36a90097";
    const API_KEY = "025c9af3d60d1283ce527416c9912ba4";
    // const exampleGET_API = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`

    const [recipes, setRecipe] = useState([]);

    useEffect( () => { getRecipes() }, [] );

    const getRecipes = async () => {
        const response = await fetch( `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}` )
        const data = await response.json();
        setRecipe( data.hit );
    }
    return (
        <div>
            <form className="searchform">
                <input className="searchbox" type="text" />
                <button className="searchbtn" type="submit">search</button>
            </form>
            {recipes.map( recipe => ( <Recipes /> ) )}
        </div>
    )
}

export default Parent;

