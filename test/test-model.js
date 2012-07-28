/**
 * hub-model.js
 *
 * Copyright (c) 2012 Maximilian Antoni <mail@maxantoni.de>
 *
 * @license MIT
 */
'use strict';

var test    = require('utest');
var assert  = require('assert');

var hubJS   = require('hubjs');
var model   = require('../lib/model');


test('model', {


  'should return hub': function () {
    var result = model();

    assert.equal(typeof result,       'object');
    assert.equal(typeof result.on,    'function');
    assert.equal(typeof result.emit,  'function');
  },


  'should return given hub instance': function () {
    var hub = hubJS();

    var result = model(hub);

    assert.strictEqual(result, hub);
  }


});
