goog.require('app.pubSub.PubSubService');
goog.require('app.pubSub.constants');

describe('PubSubService', function() {

  var uut,
      $q,
      mockPostal,
      errorChannel;

  beforeEach(inject(function($injector) {
    $q = $injector.get('$q');

    mockPostal = jasmine.createSpyObj(
        'mockPostal', ['channel']);

    errorChannel = jasmine.createSpyObj('channel', ['subscribe', 'publish']);
    mockPostal.channel.andReturn(errorChannel);

    uut = new app.pubSub.PubSubService(mockPostal);
  }));

  describe('constructor', function() {
    it('creates channels from the constants file', function() {
      app.pubSub.constants.channels.forEach(function(channel) {
        expect(mockPostal.channel).toHaveBeenCalledWith(channel);
      });
      expect(mockPostal.channel.calls.length)
          .toBe(app.pubSub.constants.channels.length);
    });
  });

  describe('subscribe', function() {
    it('subscribes to a particular channel and topic with the supplied ' +
        'callback', function() {
          var callback = function() {};
          uut.subscribe('errors', 'topic', callback);
          expect(errorChannel.subscribe)
              .toHaveBeenCalledWith('topic', callback);
        });
  });

  describe('publish', function() {
    it('publishes an event using the supplied channel, topic, and message',
        function() {
          var topic = 'topic',
              message = 'message';
          uut.publish('errors', topic, message);
          expect(errorChannel.publish).toHaveBeenCalledWith(topic, message);
        });
  });

});
