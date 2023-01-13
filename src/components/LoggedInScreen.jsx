import { use } from 'chai';
import React, { useState, useEffect } from 'react';
import {RecipeDetails} from './RecipeDetails'
import { useRecipesContext } from '../hooks/useRecipesContext';

export const LoggedInScreen = () => {

    const { recipes, dispatch } = useRecipesContext()

    useEffect(() => {
        console.log('useEffect ran')
        fetch('/recipes', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
              dispatch({type:'SET_RECIPES', payload: data}) 
            })
            .catch((error) => console.log('ERROR'));
        }, [])


    // let today = new Date()

    // const [recipes, setRecipes] = useState([
    //     {recipeName: 'Fried Egg', steps: 'Crack Egg, Flip, Serve', ingredients: 'Egg', date: today.toLocaleString(), comments: 'Easy', id: 1},
    //     {recipeName: 'Ramen', steps: 'Boil Noodles, Add Packet, Serve', ingredients: 'Maruchan', date: today.toLocaleString(), comments: 'Easy', id: 2}
    // ])
    
    // const handleDelete = (id) => {
    //     const deleteRecipes = recipes.filter(recipe => recipe.id !==id)
    //     setRecipes(deleteRecipes);
    // }

   
    // const { recipeName, steps, ingredients, date, comments } = info;

    const displayRecipes = [];
    if (recipes) {
        recipes.forEach((recipe) =>{
            displayRecipes.push(<RecipeDetails key={recipe.id} recipe={recipe}/>)
        })
    }

    return (
            <div className='loginscreen'>
                <div className='recipes'>
                    {displayRecipes}
                </div>
                {/* <RecipeList recipes= {recipes} title='All Recipes' handleDelete={handleDelete}/> */}
            </div>
    )
}