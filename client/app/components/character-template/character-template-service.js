goog.provide('app.characterTemplate.CharacterTemplateService');

goog.require('app.characterTemplate.CharacterTemplateApiService');
goog.require('app.characterTemplate.CharacterTemplateModel');
goog.require('app.pubSub.PubSubService');



/**
 * @constructor
 * @param {!app.characterTemplate.CharacterTemplateApiService}
 *     characterTemplateApiService
 * @param {!app.pubSub.PubSubService} pubSubService
 * @ngInject
 * @export
 * @struct
 */
app.characterTemplate.CharacterTemplateService = function(
    characterTemplateApiService, pubSubService) {

  /**
   * @type {!app.characterTemplate.CharacterTemplateApiService}
   * @private
   */
  this.characterTemplateApiService_ = characterTemplateApiService;

  /**
   * @type {!Object.<string, app.characterTemplate.CharacterTemplateModel>}
   * @private
   */
  this.templates_ = {};

  pubSubService.subscribe('selectParty', 'launched',
      this.buildTemplates_.bind(this));
};


/** @struct */
app.characterTemplate.CharacterTemplateService.prototype = {

  /**
   * Get all templates from server and populate the templates_ object
   * @return {!angular.$http.HttpPromise}
   * @private
   */
  buildTemplates_: function() {
    var self = this;
    return this.characterTemplateApiService_.get().then(function(response) {
      var templates =
          /** @type {Array.<app.characterTemplate.CharacterTemplateModel>} */
          (response.data);
      templates.forEach(function(template) {
        self.templates_['' + template.id] = template;
      });
    });
  },

  /**
   * Return a reference to the object containing the templates
   * @return {!Object.<string, app.characterTemplate.CharacterTemplateModel>}
   */
  get: function() {
    return this.templates_;
  }
};
