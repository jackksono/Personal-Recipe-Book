const cookieController = {};


/*sets cookie with random number*/
cookieController.setCookie = (req, res, next) => {
    res.cookie('setCookie', Math.floor(Math.random() * 1000))
    next()
}

/*store user ID in a cookie*/
cookieController.setSSIDCookie = (req, res, next) => {
    const id = res.locals.userId;
    res.cookie('SSID', id, { httpOnly: true});
    next();
}