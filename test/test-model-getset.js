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
var sinon   = require('sinon');

var model   = require('../lib/model');


test('model get/set', {

  before: function () {
    this.model = model();
    this.model.emit('model', 'user', { email : String });
  },


  'should set field name and read the value multiple times': function () {
    var spy = sinon.spy();

    this.model.emit('user.email', 'a@bc.de', spy);
    this.model.emit('user.email', spy);
    this.model.emit('user.email', spy);

    sinon.assert.alwaysCalledWith(spy, null, 'a@bc.de');
  },


  'should convert given value to field type': function () {
    var spy = sinon.spy();

    this.model.emit('user.email', 123, spy);
    this.model.emit('user.email', spy);

    sinon.assert.alwaysCalledWith(spy, null, "123");
  },


  'should set field to null': function () {
    var spy = sinon.spy();

    this.model.emit('user.email', null, spy);
    this.model.emit('user.email', spy);

    sinon.assert.alwaysCalledWith(spy, null, null);
  }


});
