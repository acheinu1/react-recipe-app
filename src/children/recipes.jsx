import React from 'react'
import style from "../css/recipe.module.css"

const Recipes = ( { title, calories, image, ingredients } ) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol className={style.ingredients}>{ingredients.map( ( ingdOBj ) => ( <li>{ingdOBj.text}</li> ) )}</ol>
            <p>{calories}</p>
            <img src={image} className={style.images} alt="" />
        </div>
    )
}

export default Recipes;
