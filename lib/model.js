/**
 * hub-model.js
 *
 * Copyright (c) 2012 Maximilian Antoni <mail@maxantoni.de>
 *
 * @license MIT
 */
'use strict';

var hubJS = require('hubjs');


var field = function (converter) {
  var value;
  return function (newValue, callback) {
    if (newValue !== undefined) {
      value = newValue === null ? null : converter(newValue);
    }
    callback(null, value);
  };
};


var define = function (name, fields) {
  var key;
  for (key in fields) {
    if (fields.hasOwnProperty(key)) {
      this.hub.on(name + '.' + key, field(fields[key]));
    }
  }
};


module.exports = function (hub) {
  var model = hub || hubJS();
  model.on('model', define);
  return model;
};