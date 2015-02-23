goog.provide('app.characterTemplate.CharacterTemplateApiService');

goog.require('app.characterTemplate.CharacterTemplateModel');
goog.require('app.constants');



/**
 * @constructor
 * @param {!angular.$http} $http
 * @export
 */
app.characterTemplate.CharacterTemplateApiService = function($http) {

  /**
   * @type {!angular.$http}
   * @private
   */
  this.$http_ = $http;
};


/** @struct */
app.characterTemplate.CharacterTemplateApiService.prototype = {

  /**
   * @return {!angular.$http.HttpPromise}
   */
  get: function() {
    return this.$http_.get(app.constants.apiRoot + 'character_template');
  },

  /**
   * @param {!app.characterTemplate.CharacterTemplateModel} characterTemplate
   * @return {!angular.$http.HttpPromise}
   */
  create: function(characterTemplate) {
    return this.$http_.post(app.constants.apiRoot + 'character_template',
        characterTemplate);
  },

  /**
   * @param {!app.characterTemplate.CharacterTemplateModel} characterTemplate
   * @return {!angular.$http.HttpPromise}
   */
  update: function(characterTemplate) {
    return this.$http_.put(app.constants.apiRoot + 'character_template/' +
        characterTemplate.id, characterTemplate);
  },

  /**
   * @param {!app.characterTemplate.CharacterTemplateModel} characterTemplate
   * @return {!angular.$http.HttpPromise}
   */
  destroy: function(characterTemplate) {
    return this.$http_.delete(app.constants.apiRoot + 'character_template/' +
        characterTemplate.id);
  }
};
