goog.provide('app.levela.LevelAController');

goog.require('app.levela.LevelAService');



/**
 * @constructor
 * @param {!app.levela.LevelAService} levelAService
 * @export
 * @ngInject
 */
app.levela.LevelAController = function(levelAService) {

  /**
   * @type {!app.levela.LevelAService}
   * @private
   */
  this.levelAService_ = levelAService;
};
