'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var complainCtrlStub = {
  index: 'complainCtrl.index',
  show: 'complainCtrl.show',
  create: 'complainCtrl.create',
  update: 'complainCtrl.update',
  destroy: 'complainCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var complainIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './complain.controller': complainCtrlStub
});

describe('Complain API Router:', function() {

  it('should return an express router instance', function() {
    complainIndex.should.equal(routerStub);
  });

  describe('GET /api/complains', function() {

    it('should route to complain.controller.index', function() {
      routerStub.get
        .withArgs('/', 'complainCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/complains/:id', function() {

    it('should route to complain.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'complainCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/complains', function() {

    it('should route to complain.controller.create', function() {
      routerStub.post
        .withArgs('/', 'complainCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/complains/:id', function() {

    it('should route to complain.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'complainCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/complains/:id', function() {

    it('should route to complain.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'complainCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/complains/:id', function() {

    it('should route to complain.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'complainCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
