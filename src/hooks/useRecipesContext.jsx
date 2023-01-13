import { RecipeContext } from '../context/RecipeContext'
import { useContext } from 'react'

export const useRecipesContext = () => {
    const context = useContext(RecipeContext)

    if(!context) {
        throw Error('useRecipeContext must be used inside a RecipeContextProvider')
    }
    return context
}