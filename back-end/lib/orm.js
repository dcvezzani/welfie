var config = require('../knexfile');
var knex = require('knex')(config.development);
var bookshelf = require('bookshelf')(knex);

var Orm = {
  User: bookshelf.Model.extend({
    tableName: 'users',
    // posts: function() {
    //   return this.hasMany(Posts);
    // }
  })
}

module.exports = Orm;


