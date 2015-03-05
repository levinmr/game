goog.provide('app.itemTemplate.ItemTemplateService');

goog.require('app.itemTemplate.ItemTemplateApiService');
goog.require('app.itemTemplate.ItemTemplateModel');
goog.require('app.pubSub.PubSubService');



/**
 * @constructor
 * @param {!app.itemTemplate.ItemTemplateApiService} itemTemplateApiService
 * @param {!app.pubSub.PubSubService} pubSubService
 * @ngInject
 * @export
 * @struct
 */
app.itemTemplate.ItemTemplateService = function(itemTemplateApiService,
    pubSubService) {

  /**
   * @type {!app.itemTemplate.ItemTemplateApiService}
   * @private
   */
  this.itemTemplateApiService_ = itemTemplateApiService;

  /**
   * @type {!Object.<string, app.itemTemplate.ItemTemplateModel>}
   * @private
   */
  this.templates_ = {};

  pubSubService.subscribe('selectParty', 'launched',
      this.buildTemplates_.bind(this));
};


/** @struct */
app.itemTemplate.ItemTemplateService.prototype = {

  /**
   * Get all templates from server and populate the templates_ object
   * @return {!angular.$http.HttpPromise}
   * @private
   */
  buildTemplates_: function() {
    var self = this;
    return this.itemTemplateApiService_.get().then(function(response) {
      var templates =
          /** @type {Array.<app.itemTemplate.ItemTemplateModel>} */
          (response.data);
      templates.forEach(function(template) {
        self.templates_['' + template.id] = template;
      });
    });
  },

  /**
   * Return a reference to the object containing the templates
   * @return {!Object.<string, app.itemTemplate.ItemTemplateModel>}
   */
  get: function() {
    return this.templates_;
  }
};
