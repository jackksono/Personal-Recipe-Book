const Session = require('../models/sessionModel')
const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
    const { SSID } = req.cookies;
    Session.findOne({cookieID: SSID})
        .then((response) => {
           if (!response) res.redirect('/signup');
           else next();
        })
        .catch(err => {
            res.status(400);
            next({
                log: 'Error in sessionController.isLoggedIn',
                message: {err: 'Error in sessionController.isLoggedIn'}
            })
        })
}

sessionController.startSession = (req, res, next) => {
    Session.create({ cookieID : res.locals.userId})
        .then(response => {
            next();
        })
        .catch(err => {
            res.status(400);
            next({
                log: 'Error in sessionController.startSession',
                message: {err: 'Error in sessionController.startSession'}
            })
        })
}

module.exports = sessionController