goog.provide('app.selectParty.SelectPartyController');

goog.require('app.characterTemplate.CharacterTemplateModel');
goog.require('app.characterTemplate.CharacterTemplateService');
goog.require('app.itemTemplate.ItemTemplateModel');
goog.require('app.itemTemplate.ItemTemplateService');
goog.require('app.pubSub.PubSubService');
goog.require('app.skillTemplate.SkillTemplateModel');
goog.require('app.skillTemplate.SkillTemplateService');



/**
 * @constructor
 * @param {!app.pubSub.PubSubService} pubSubService
 * @param {!app.characterTemplate.CharacterTemplateService}
 *     characterTemplateService
 * @param {!app.itemTemplate.ItemTemplateService} itemTemplateService
 * @param {!app.skillTemplate.SkillTemplateService} skillTemplateService
 * @ngInject
 * @export
 * @struct
 */
app.selectParty.SelectPartyController = function(pubSubService,
    characterTemplateService, itemTemplateService, skillTemplateService) {

  /**
   * @type {Object.<string, app.characterTemplate.CharacterTemplateModel>}
   * @expose
   */
  this.characterTemplates = characterTemplateService.get();

  /**
   * @type {Object.<string, app.itemTemplate.ItemTemplateModel>}
   * @expose
   */
  this.itemTemplates = itemTemplateService.get();

  /**
   * @type {Object.<string, app.skillTemplate.SkillTemplateModel>}
   * @expose
   */
  this.skillTemplates = skillTemplateService.get();

  pubSubService.publish('selectParty', 'launched', '');
};


/** @struct */
app.selectParty.SelectPartyController.prototype = {

};
