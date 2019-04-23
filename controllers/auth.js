const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.getSignUp = (req, res, next) => {
    res.render('auth/sign-up', {
        path: '/sign-up',
        pageTitle: 'Sign Up',
        isAuthenticated: false
    });
};

exports.postLogin = (req, res, next) => {
  User.findById('5c9bcb71c002b440b081e0e1')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
