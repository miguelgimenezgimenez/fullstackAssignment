var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  title: String,
  date: Date,
  venue: String
});

module.exports = mongoose.model('Event', eventSchema);
