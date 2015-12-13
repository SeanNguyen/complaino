'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var ComplainSchema = new Schema({
  content: String,
  userEmail: String,
  company: String,
  rate: Number,
  customerId: String,
  referenceId: String,
  messages: Array,
  status: Boolean,
  timestamp: Date
});

module.exports = mongoose.model('Complain', ComplainSchema);
