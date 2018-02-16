var config = require('../knexfile');
var knex = require('knex')(config.development);
var bookshelf = require('bookshelf')(knex);

var Message = bookshelf.Model.extend({
  tableName: 'messages',
})

var User = bookshelf.Model.extend({
  tableName: 'users',
  messages: function() {
    return this.hasMany(Message);
  }
})

module.exports = {Message: Message, User: User};


