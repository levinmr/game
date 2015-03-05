goog.provide('app.matchResult.MatchResultController');

goog.require('app.pubSub.PubSubService');



/**
 * @constructor
 * @param {!app.pubSub.PubSubService} pubSubService
 * @ngInject
 * @export
 * @struct
 */
app.matchResult.MatchResultController = function(pubSubService) {

  /**
   * [pubSubService_ description]
   * @type {app.pubSub.PubSubService}
   * @private
   */
  this.pubSubService_ = pubSubService;
};


/** @struct */
app.matchResult.MatchResultController.prototype = {

};
