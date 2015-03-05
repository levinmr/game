goog.provide('app.root.RootController');

goog.require('app.pubSub.PubSubService');



/**
 * @constructor
 * @param {!app.pubSub.PubSubService} pubSubService
 * @ngInject
 * @export
 * @struct
 */
app.root.RootController = function(pubSubService) {

  /**
   * [pubSubService_ description]
   * @type {app.pubSub.PubSubService}
   * @private
   */
  this.pubSubService_ = pubSubService;
};


/** @struct */
app.root.RootController.prototype = {

};
