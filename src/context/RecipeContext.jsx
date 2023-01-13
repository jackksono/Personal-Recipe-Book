import React, { createContext, useReducer } from 'react';

export const RecipeContext = createContext()

export const recipesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RECIPES' :
            return {
                recipes: action.payload
            }
        case 'CREATE_RECIPE' :
            return {
                recipes: [action.payload, ...state.recipes] //add new recipe and also all previous states
            }
        case 'DELETE_RECIPE' :
            return {
                recipes: state.recipes.filter((recipe) => recipe._id !== action.payload._id)
            }
        default:
            return state
    }
}
export const RecipeContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(recipesReducer, {
        recipes: null
    })

    return(
        <RecipeContext.Provider value={{...state, dispatch}}>
            { children }
        </RecipeContext.Provider>
    )
}