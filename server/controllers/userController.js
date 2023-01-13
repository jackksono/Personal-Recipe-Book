const User = require('../models/userModel')
const userControler = {};

userControler.createUser = (req, res, next) => {
    const { username, password } = req.body;
    if (!usermame || !password) return next('invalid request')
    bcrypt.hashSync(password, 10)
    User.create({ username, password })
        .then( response => {
            res.locals.userId = response._id.toString();
            return next();
        })
        .catch(err => {
            res.status(400);
            next({
                log: 'Error in sessionController.isLoggedIn',
                message: {err: 'Error in sessionController.isLoggedIn'}
            })
        })
}


userController.verifyUser = (req, res, next) => {
    // write code here
    const { username, password } = req.body //cookies?
    User.findOne({ username }, (err, user) => {
        if (err){
        return next('Error')
        }
        else if (!user) {
            res.redirect('/signup')
        } else {
            bcrypt.compare(password, user.password)
            .then(response => {
                res.locals.userId = response._id.toString();
                if (!response || response.password !== password) return res.redirect('/signup');
                return next();
              })
              .catch(e => next(e));
            }
    })
      
  
  };
  
  module.exports = userController;
  