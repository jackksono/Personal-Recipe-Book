const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const MONGO_URI = 'mongodb+srv://kenzoman999:<Uhfo97!!>@recipes.9pfemsq.mongodb.net/test'

// mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: 'Recipes'
// })

const recipeSchema = new Schema ({
    recipeName: {type: String, required: true},
    steps: {type: String, required: true},
    ingredients: {type: String, required: true},
    date: {type: String, required: true},
    comments: {type: String}
})

const Recipes = mongoose.model('Recipes', recipeSchema)

module.exports = {
    Recipes
}