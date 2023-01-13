const express = require('express');
const { default: mongoose } = require('mongoose');
const path = require('path');
// const cookieParser = require('cookie-parser');
const MONGO_URI = 'mongodb+srv://kenzoman999:Uhfo97!!@recipes.9pfemsq.mongodb.net/test'
/* require controllers */
// const cookieController = require('./controllers/cookieController');
// const sessionController = require('./controllers/sessionController');
// const userController = require('./controllers/userController');

const recipesRoutes = require('./routes/recipes')

const PORT = 3000;
const app = express();

/*Automatically parse urlencoded body content and form data from incoming
requests and place it in req.body*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use('/src', express.static(path.resolve(__dirname, '../src')))

/*Router handler*/
app.use('/recipes', recipesRoutes)

/*--------------Express Routes-------------*/


/*Express Routes for Authenitcation*/
// app.get('/', cookieController.setCookie, (req, res) => {
//     res.sendFile(path.resolve(__dirname, '/src/index.html'))
// });

// /*signup*/
// app.get('/signup', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '/src/signup.html'))
// })

// app.post('/signup', userController.createUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
//     res.redirect('/')
// })

// app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
//     res.redirect('/')
// })



/*404 Handler*/
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
  });

/*Global Error Handler*/
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
  });
  
mongoose.connect(MONGO_URI)
.then(() => {
    app.listen(PORT, () => { console.log(`Connected to DB and Listening on port ${PORT}...`); });
})
.catch


module.exports = app