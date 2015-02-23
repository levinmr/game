goog.require('app.AppController');


describe('app.AppController', function() {
  var uut;

  beforeEach(function() {
    uut = new app.AppController();
  });

  describe('constructor', function() {

    it('should initialise the controller', function() {
      expect(uut).toBeDefined();
    });
  });
});
