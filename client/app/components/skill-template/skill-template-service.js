goog.provide('app.skillTemplate.SkillTemplateService');

goog.require('app.pubSub.PubSubService');
goog.require('app.skillTemplate.SkillTemplateApiService');
goog.require('app.skillTemplate.SkillTemplateModel');



/**
 * @constructor
 * @param {!app.skillTemplate.SkillTemplateApiService} skillTemplateApiService
 * @param {!app.pubSub.PubSubService} pubSubService
 * @ngInject
 * @export
 * @struct
 */
app.skillTemplate.SkillTemplateService = function(skillTemplateApiService,
    pubSubService) {

  /**
   * @type {!app.skillTemplate.SkillTemplateApiService}
   * @private
   */
  this.skillTemplateApiService_ = skillTemplateApiService;

  /**
   * @type {!Object.<string, app.skillTemplate.SkillTemplateModel>}
   * @private
   */
  this.templates_ = {};

  pubSubService.subscribe('selectParty', 'launched',
      this.buildTemplates_.bind(this));
};


/** @struct */
app.skillTemplate.SkillTemplateService.prototype = {

  /**
   * Get all templates from server and populate the templates_ object
   * @return {!angular.$http.HttpPromise}
   * @private
   */
  buildTemplates_: function() {
    var self = this;
    return this.skillTemplateApiService_.get().then(function(response) {
      var templates =
          /** @type {Array.<app.skillTemplate.SkillTemplateModel>} */
          (response.data);
      templates.forEach(function(template) {
        self.templates_['' + template.id] = template;
      });
    });
  },

  /**
   * Return a reference to the object containing the templates
   * @return {!Object.<string, app.skillTemplate.SkillTemplateModel>}
   */
  get: function() {
    return this.templates_;
  }
};
