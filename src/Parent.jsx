import React, { useEffect, useState } from 'react';
import Recipes from "./children/recipes";
import "./css/index.css"

const Parent = () => {
    const API_ID = "36a90097";
    const API_KEY = "025c9af3d60d1283ce527416c9912ba4";
    // const exampleGET_API = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`

    const [recipes, setRecipe] = useState( [] );  //state for api data []
    const [search, setSearch] = useState( "" );    // state for the input search field
    const [query, setQuery] = useState( "chicken" )  //state for full word search //set query to API chicken

    useEffect( () => { getRecipes() }, [query] );

    const getRecipes = async () => {
        const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}` )
        const data = await response.json();
        setRecipe( data.hits );
        console.log( data.hits )
    }
    const updateSearch = ( e ) => {
        setSearch( e.target.value )
    } //the search function with event obj

    const getSearch = ( e ) => {
        e.preventDefault();
        setQuery( search );
        setSearch( "" )
    }  //so we can search full words
    return (
        <div className="App">
            <form onSubmit={getSearch} className="searchform">
                <input className="searchbox" type="text" value={search} onChange={updateSearch} />
                <button className="searchbtn" type="submit">search</button>
            </form>
            <div className="allResults">
                {recipes.map( items => ( <Recipes
                    key={items.recipe.label}
                    title={items.recipe.label}
                    calories={items.recipe.calories}
                    image={items.recipe.image}
                    ingredients={items.recipe.ingredients}
                /> ) )}
            </div>

        </div>
    )
}

export default Parent;

