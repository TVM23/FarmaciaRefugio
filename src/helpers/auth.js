const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    /* req.flash('autorizacion', 'Not authorized') */
    res.redirect('/')
}

export default helpers;