goog.provide('app.skillTemplate.SkillTemplateApiService');

goog.require('app.constants');
goog.require('app.skillTemplate.SkillTemplateModel');



/**
 * @constructor
 * @param {!angular.$http} $http
 * @ngInject
 * @export
 */
app.skillTemplate.SkillTemplateApiService = function($http) {

  /**
   * @type {!angular.$http}
   * @private
   */
  this.$http_ = $http;
};


/** @struct */
app.skillTemplate.SkillTemplateApiService.prototype = {

  /**
   * @return {!angular.$http.HttpPromise}
   */
  get: function() {
    return this.$http_.get(app.constants.apiRoot + '/skill_templates');
  },

  /**
   * @param {!app.skillTemplate.SkillTemplateModel} skillTemplate
   * @return {!angular.$http.HttpPromise}
   */
  create: function(skillTemplate) {
    return this.$http_.post(app.constants.apiRoot + '/skill_templates',
        skillTemplate);
  },

  /**
   * @param {!app.skillTemplate.SkillTemplateModel} skillTemplate
   * @return {!angular.$http.HttpPromise}
   */
  update: function(skillTemplate) {
    return this.$http_.put(app.constants.apiRoot + '/skill_templates/' +
        skillTemplate.id, skillTemplate);
  },

  /**
   * @param {!app.skillTemplate.SkillTemplateModel} skillTemplate
   * @return {!angular.$http.HttpPromise}
   */
  destroy: function(skillTemplate) {
    return this.$http_.delete(app.constants.apiRoot + '/skill_templates/' +
        skillTemplate.id);
  }
};
