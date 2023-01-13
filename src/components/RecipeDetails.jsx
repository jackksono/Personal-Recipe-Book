import React from "react";
import { useRecipesContext } from "../hooks/useRecipesContext";

export const RecipeDetails = ( {key, recipe }) => {

    const { dispatch } = useRecipesContext()

    const handleClick = async () => {
        const response = await fetch('/recipes/'+recipe._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_RECIPE', payload: json})
        }
    }
    return(
        <div className="recipe-details">
            <h4>Recipe: {recipe.recipeName}</h4>
            <p><strong>Steps: {recipe.steps}</strong></p>
            <p><strong>Ingredients: {recipe.ingredients}</strong></p>
            <p><strong>Date: {recipe.date}</strong></p>
            <p><strong>Comments: {recipe.comments}</strong></p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}