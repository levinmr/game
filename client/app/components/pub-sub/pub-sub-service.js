goog.provide('app.pubSub.PubSubService');

goog.require('app.pubSub.constants');



/**
 * @constructor
 * @param {Object} postal
 * @ngInject
 * @export
 */
app.pubSub.PubSubService = function(postal) {

  /**
   * @type {Object}
   * @private
   */
  this.postal_ = postal;

  /**
   * @type {Object<string, Object>}
   * @private
   */
  this.channels_ = {};

  this.init_();
};

app.pubSub.PubSubService.prototype = {

  /**
   * @private
   */
  init_: function() {
    var self = this;
    app.pubSub.constants.channels.forEach(function(channel) {
      self.channels_[channel] = self.postal_.channel(channel);
    });
  },

  /**
   * @param {string} channel
   * @param {string} topic
   * @param {Function} callback
   * @return {Object}
   */
  subscribe: function(channel, topic, callback) {
    return this.channels_[channel].subscribe(topic, callback);
  },

  /**
   * @param {string} channel
   * @param {string} topic
   * @param {*} message
   */
  publish: function(channel, topic, message) {
    console.log('%s %s %s', channel, topic, message);
    this.channels_[channel]['publish'](topic, message);
  }
};
