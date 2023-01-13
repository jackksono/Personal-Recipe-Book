const models = require ('../models/recipeModel');
const mongoose = require('mongoose')
const recipeController = {};

/*GET all workouts in DB */
recipeController.getRecipes = (req, res, next) => {
   // console.log('Made it here')
    models.Recipes.find()
        .then(recipes => {
            res.locals.allRecipes = recipes
            next();
        })
        .catch(err => {
            res.status(400).json({err: 'Cannot Find Recipes'})
        })
}

/*GET a single Workout in DB*/
recipeController.getOneRecipe =  (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such validID'})
    }
    models.Recipes.findById(id)
        .then(recipe => {
            res.locals.oneRecipe = recipe;
            next()
        })
        .catch(err => {
            res.status(400).json({err: 'Cannot Find Single Recipe'})
        })
}

/*Create a new workout*/
recipeController.createRecipe = (req, res, next) => {
    //const { recipeName, steps, ingredients, date, comments } = req.body

    models.Recipes.create(req.body)
        .then(newRecipe => {
            res.locals.newRecipe = newRecipe;
            return next()
        })
        .catch(err => {
            res.status(400).json({err: 'Cannot Create'})
        })
}

/*Delete a workout*/
recipeController.deleteRecipe = (req, res, next) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such validID'})
    }
    models.Recipes.findByIdAndDelete(id)
        .then(deletedRecipe => {
            res.locals.deletedRecipe = deletedRecipe
            next();
        })
        .catch(err => {
            res.status(400).json({err: 'Cannot Delete Recipe'})
        })
}

recipeController.updateRecipe = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such validID'})
    }
    models.Recipes.findByIdAndUpdate(id)
        .then(updatedRecipe => {
            res.locals.updatedRecipe = updatedRecipe
        })
        .catch(err => {
            res.status(400).json({err: 'Cannot Update Recipe'})
        })
}


/*Update a workout*/

module.exports = recipeController;