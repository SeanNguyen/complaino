'use strict';

var app = require('../..');
var request = require('supertest');

var newComplain;

describe('Complain API:', function() {

  describe('GET /api/complains', function() {
    var complains;

    beforeEach(function(done) {
      request(app)
        .get('/api/complains')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          complains = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      complains.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/complains', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/complains')
        .send({
          name: 'New Complain',
          info: 'This is the brand new complain!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newComplain = res.body;
          done();
        });
    });

    it('should respond with the newly created complain', function() {
      newComplain.name.should.equal('New Complain');
      newComplain.info.should.equal('This is the brand new complain!!!');
    });

  });

  describe('GET /api/complains/:id', function() {
    var complain;

    beforeEach(function(done) {
      request(app)
        .get('/api/complains/' + newComplain._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          complain = res.body;
          done();
        });
    });

    afterEach(function() {
      complain = {};
    });

    it('should respond with the requested complain', function() {
      complain.name.should.equal('New Complain');
      complain.info.should.equal('This is the brand new complain!!!');
    });

  });

  describe('PUT /api/complains/:id', function() {
    var updatedComplain

    beforeEach(function(done) {
      request(app)
        .put('/api/complains/' + newComplain._id)
        .send({
          name: 'Updated Complain',
          info: 'This is the updated complain!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedComplain = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedComplain = {};
    });

    it('should respond with the updated complain', function() {
      updatedComplain.name.should.equal('Updated Complain');
      updatedComplain.info.should.equal('This is the updated complain!!!');
    });

  });

  describe('DELETE /api/complains/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/complains/' + newComplain._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when complain does not exist', function(done) {
      request(app)
        .delete('/api/complains/' + newComplain._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
