goog.provide('app.itemTemplate.ItemTemplateApiService');

goog.require('app.constants');
goog.require('app.itemTemplate.ItemTemplateModel');



/**
 * @constructor
 * @param {!angular.$http} $http
 * @export
 */
app.itemTemplate.ItemTemplateApiService = function($http) {

  /**
   * @type {!angular.$http}
   * @private
   */
  this.$http_ = $http;
};


/** @struct */
app.itemTemplate.ItemTemplateApiService.prototype = {

  /**
   * @return {!angular.$http.HttpPromise}
   */
  get: function() {
    return this.$http_.get(app.constants.apiRoot + 'item_template');
  },

  /**
   * @param {!app.itemTemplate.ItemTemplateModel} itemTemplate
   * @return {!angular.$http.HttpPromise}
   */
  create: function(itemTemplate) {
    return this.$http_.post(app.constants.apiRoot + 'item_template',
        itemTemplate);
  },

  /**
   * @param {!app.itemTemplate.ItemTemplateModel} itemTemplate
   * @return {!angular.$http.HttpPromise}
   */
  update: function(itemTemplate) {
    return this.$http_.put(app.constants.apiRoot + 'item_template/' +
        itemTemplate.id, itemTemplate);
  },

  /**
   * @param {!app.itemTemplate.ItemTemplateModel} itemTemplate
   * @return {!angular.$http.HttpPromise}
   */
  destroy: function(itemTemplate) {
    return this.$http_.delete(app.constants.apiRoot + 'item_template/' +
        itemTemplate.id);
  }
};
