var express = require('express');
var router = express.Router();
var orm = require('../lib/orm');
var _ = require('lodash');

/* GET, INDEX messages listing. */
router.get('/:user_id/messages', function(req, res, next) {
  orm.Message.where({user_id: req.params.user_id}).fetchAll().then((collection) => {
    let messages = [];
    _.forEach(collection.models, function(model) {
      messages.push(model.attributes);
    });
    
		res.json({ messages: messages });
  });
});

/* GET, SHOW message listing. */
router.get('/:user_id/messages/:id', function(req, res, next) {
  orm.Message.where({user_id: req.params.user_id, id: req.params.id}).fetch().then((model) => {
			res.json({ message: model.attributes });
  });
});

/* POST, CREATE message listing. */
router.post('/:user_id/messages', function(req, res, next) {
  let attrs = req.body;
  new orm.Message({user_id: req.params.user_id, name: attrs['name'], email: attrs['email'], phone: attrs['phone'], sponsoring_entity: attrs['sponsoring_entity'], content: attrs['content']}).save().then(function(model) {
    res.status(201).json({ message: model.attributes });
  });
});

/* PUT, UPDATE message listing. */
router.put('/:user_id/messages/:id', function(req, res, next) {
  let attrs = req.body;
	new orm.Message({user_id: req.params.user_id, id: req.params.id}).save(attrs, {patch: true}).then((model) => {
		res.json({ message: model.attributes });
  });
});

module.exports = router;

