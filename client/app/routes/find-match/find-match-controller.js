goog.provide('app.findMatch.FindMatchController');

goog.require('app.pubSub.PubSubService');



/**
 * @constructor
 * @param {!app.pubSub.PubSubService} pubSubService
 * @ngInject
 * @export
 * @struct
 */
app.findMatch.FindMatchController = function(pubSubService) {

  /**
   * [pubSubService_ description]
   * @type {app.pubSub.PubSubService}
   * @private
   */
  this.pubSubService_ = pubSubService;
};


/** @struct */
app.findMatch.FindMatchController.prototype = {

};
