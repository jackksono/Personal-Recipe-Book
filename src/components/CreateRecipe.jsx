import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useRecipesContext } from '../hooks/useRecipesContext';

export const CreateRecipe = (props) => {

    const {dispatch} = useRecipesContext()

    let today = new Date()

        const [recipeName, titleOnChange] = useState('');
        const [steps, stepsOnChange] = useState('');
        const [ingredients, ingredientsOnChange] = useState('');
        const [date, dateOnChange] = useState(today.toLocaleString());
        const [comments, commentsOnChange] = useState('')

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const recipe = {recipeName, steps, ingredients, date, comments}

        const response = await fetch('/recipes', {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
            const json = await response.json()

            if (response.ok) {
                titleOnChange(''),
                stepsOnChange(''),
                ingredientsOnChange(''),
                dateOnChange(today.toLocaleString()),
                commentsOnChange('')
                dispatch({type: 'CREATE_RECIPE', payload: json })
            }
        }

        // fetch('/recipes', {
        //     method: 'POST',
        //     headers: {'Content-Type:': 'application/json'},
        //     body: JSON.stringify({recipe})
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data)
        //         titleOnChange(''),
        //         stepsOnChange(''),
        //         ingredientsOnChange(''),
        //         dateOnChange(''),
        //         commentsOnChange('')
        //     })
        //     .catch((error) => console.log("ERROR"))
        // }
    




    return (
        <div>
        <section> 
            <h1>Enter your recipe here</h1>
            <form className='create' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="recipeName">Recipe Name</label>
                    <input name='recipeName' onChange={(e) =>titleOnChange(e.target.value)} value={recipeName} ></input>
                </div>
                <div>
                    <label htmlFor="steps">Steps</label>
                    <input name='steps' onChange={(e) =>stepsOnChange(e.target.value)} value={steps} ></input>
                </div>
                <div>
                    <label htmlFor="ingredients">Ingrendients</label>
                    <input name='recipeName'  onChange={(e) =>ingredientsOnChange(e.target.value)} value={ingredients}></input>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input name='date'  onChange={(e) =>dateOnChange(e.target.value)} value={date}></input>
                </div>
                <div>
                    <label htmlFor="comments">Comments</label>
                    <textarea rows='5' cols='5' name='comments'  onChange={(e) =>commentsOnChange(e.target.value)} value={comments}></textarea>
                </div>
                
                <div className="createRecipeButton">
                    <Link to='/' className='backLink'>
                        <button type='button'>Cancel </button>
                    </Link>
                    <button>Add recipe</button> 
                </div>
            </form>
        </section>
        </div>
    )
    }

