var express = require('express');
var router = express.Router();
var orm = require('../lib/orm');
var _ = require('lodash');

/* GET, INDEX users listing. */
router.get('/', function(req, res, next) {
  orm.User.fetchAll().then((collection) => {
    let users = [];
    _.forEach(collection.models, function(model) {
      users.push(model.attributes);
    });
    
    console.log(['collection', users]);
		res.json({ users: users });
  });
});

/* GET, SHOW user listing. */
router.get('/:user_id', function(req, res, next) {
  orm.User.where({id: req.params.user_id}).fetch().then((model) => {
			res.json({ user: model.attributes });
  });
});

/* POST, CREATE user listing. */
router.post('/', function(req, res, next) {
  let attrs = req.body;
  new orm.User({google_id: attrs['google_id'], email: attrs['email'], given_name: attrs['given_name'], family_name: attrs['family_name'], picture: attrs['picture']}).save().then(function(model) {
    res.status(201).json({ user: model.attributes });
  });
});

/* PUT, UPDATE user listing. */
router.put('/:user_id', function(req, res, next) {
  let attrs = req.body;
	new orm.User({id: req.params.user_id}).save(attrs).then((model) => {
		res.json({ user: model.attributes });
  });
});

module.exports = router;
