const express = require('express');
const router = express.Router();
import { JWT_SECRET, APP_BASE_URL } from '../config/constants';
import jwt from 'jsonwebtoken';
const passport = require('passport');
require('../config/passport')(passport); // pass passport for configuration

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login. */
router.get('/login', function(req, res) {
	// render the page and pass in any flash data if it exists
	res.render('login', { home: APP_BASE_URL, message: req.flash('loginMessage') }); 
});

/* POST login. */

// router.post('/xxlogin', passport.authenticate('local-login', 
//   (err, user, info) => {
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/login'); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.redirect('/users/' + user.username);
//     });
//   })(req, res, next);
// ));

// router.post('/login', passport.authenticate('local-login'), 
//   (req, res) => {
//     console.log(['local-login', { req, user: req.user, secureLocation: req.body.secureLocation } ])
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     // res.redirect('/users/' + req.user.username);
//     // res.redirect(`http://localhost:3001?user=${JSON.stringify(res.user)}`);
//     const secureLocation = unescape(req.body.secureLocation);
//     const data = profileData(req) // {user, token}
//     res.redirect(`${secureLocation}?token=${data.token}`);
//   }
// );

router.post('/login', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect(`/login?page=${req.body.secureLocation}`); }
	  // if (!user) { res.render('login', { message: req.flash('loginMessage') }); }
    
    req.logIn(user, function(err) {
      if (err) { return next(err); }

      const secureLocation = unescape(req.body.secureLocation);
      const data = profileData(req) // {user, token}
      return res.redirect(`${secureLocation}?token=${data.token}`);
    });
  })(req, res, next);
});

// router.post('/login',
//   passport.authenticate('local-login', { failWithError: true }),
//   function(req, res, next) {
//     // handle success
//     // if (req.xhr) { return res.json({ id: req.user.id }); }
//     // return res.redirect('/');
//
//     const secureLocation = unescape(req.body.secureLocation);
//     const data = profileData(req) // {user, token}
//     return res.redirect(`${secureLocation}?token=${data.token}`);
//   },
//   function(err, req, res, next) {
//     // handle error
//     if (req.xhr) { return res.json(err); }
//     return res.redirect('/login');
//   }
// );

// router.post('/xlogin', passport.authenticate('local-login', {
// 	successRedirect : '/profile', // redirect to the secure profile section
// 	failureRedirect : '/login', // redirect back to the signup page if there is an error
// 	failureFlash : true // allow flash messages
// }));

/* GET signup. */
router.get('/signup', function(req, res) {
	// render the page and pass in any flash data if it exists
	res.render('signup', { home: APP_BASE_URL, message: req.flash('signupMessage') }); 
});

/* POST signup. */
// router.post('/signup', passport.authenticate('local-signup', {
// 	successRedirect : '/profile', // redirect to the secure profile section
// 	failureRedirect : '/signup', // redirect back to the signup page if there is an error
// 	failureFlash : true // allow flash messages
// }));

router.post('/signup', function(req, res, next) {
  passport.authenticate('local-signup', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect(`/signup?page=${req.body.secureLocation}`); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }

      const secureLocation = unescape(req.body.secureLocation);
      const data = profileData(req) // {user, token}
      return res.redirect(`${secureLocation}?token=${data.token}`);
    });
  })(req, res, next);
});

/* GET profile. */
router.get('/profile', isLoggedIn, 
	function(req, res, next) {

		// console.log(['profile:req', JSON.stringify(req.user), profileData(req), req.get('Content-Type')])
		if(!(req.get('Content-Type') === 'application/json')) {
			return next();
		}
		res.json(profileData(req));
	},
	function(req, res) {

		// console.log(['profile:req', JSON.stringify(req.user)])
		res.render('profile.ejs', profileData(req));
	}
);

/* GET logout. */
router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
			return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}

function requestJson(req, res, next) {
  if(!(req.get('Content-Type') === 'application/json')) {
		return;
	}
	return next();
}

function profileData(req) {
	const token = jwt.sign({ email: req.user.email }, JWT_SECRET, {
		expiresIn: 86400 // expires in 24 hours
	});

	return {
			user : req.user, // get the user out of session and pass to template
			token
	}
};

module.exports = router;
