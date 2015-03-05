goog.provide('app.editParty.EditPartyController');

goog.require('app.pubSub.PubSubService');



/**
 * @constructor
 * @param {!app.pubSub.PubSubService} pubSubService
 * @ngInject
 * @export
 * @struct
 */
app.editParty.EditPartyController = function(pubSubService) {

  /**
   * [pubSubService_ description]
   * @type {app.pubSub.PubSubService}
   * @private
   */
  this.pubSubService_ = pubSubService;
};


/** @struct */
app.editParty.EditPartyController.prototype = {

};
