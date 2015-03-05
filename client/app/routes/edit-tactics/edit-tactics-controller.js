goog.provide('app.editTactics.EditTacticsController');

goog.require('app.pubSub.PubSubService');



/**
 * @constructor
 * @param {!app.pubSub.PubSubService} pubSubService
 * @ngInject
 * @export
 * @struct
 */
app.editTactics.EditTacticsController = function(pubSubService) {

  /**
   * [pubSubService_ description]
   * @type {app.pubSub.PubSubService}
   * @private
   */
  this.pubSubService_ = pubSubService;
};


/** @struct */
app.editTactics.EditTacticsController.prototype = {

};
