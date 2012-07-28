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

var fork    = require('hubjs-fork');
var model   = require('../lib/model');


test('model fork', {

  before: function () {
    var forkableModel = fork(model());
    var self          = this;
    forkableModel.emit('fork', function (err, forked) {
      self.forked = forked;
    });
  },


  'should call model on fork of a model': function () {
    var spy = sinon.spy();

    this.forked.emit('model', 'test', { a : Number });
    this.forked.emit('test.a', '123', spy);

    sinon.assert.calledWith(spy, null, 123);
  }


});
