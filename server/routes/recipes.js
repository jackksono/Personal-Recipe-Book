const express = require('express')
const router = express.Router();
const recipeController = require('../controllers/recipeController')


//GET all recipes
router.get('/', recipeController.getRecipes, (req, res) => {
    res.status(200).json(res.locals.allRecipes)
})

//GET a single recipe
router.get('/:id', recipeController.getOneRecipe, (req, res) => {
    res.status(200).json(res.locals.oneRecipe)
})

//POST a new recipe
router.post('/', recipeController.createRecipe, (req, res) => {
    res.status(200).json(res.locals.newRecipe)
})

//DELETE a recipe
router.delete('/:id', recipeController.deleteRecipe, (req, res) => {
    res.status(200).json(res.locals.deletedRecipe)
})
//UPDATE a recipe
router.patch('/:id', recipeController.updateRecipe, (req, res) => {
    res.status(200).json(res.locals.updatedRecipe)
})
module.exports = router