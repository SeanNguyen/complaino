/**
 * Complain model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Complain = require('./complain.model');
var ComplainEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ComplainEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Complain.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ComplainEvents.emit(event + ':' + doc._id, doc);
    ComplainEvents.emit(event, doc);
  }
}

module.exports = ComplainEvents;
