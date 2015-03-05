goog.provide('app.itemTemplate');

goog.require('app.itemTemplate.ItemTemplateApiService');
goog.require('app.itemTemplate.ItemTemplateService');


/**
 * @type {!angular.Module}
 */
app.itemTemplate.module = angular.module(
    'app.itemTemplate', []);

app.itemTemplate.module.service('itemTemplateApiService',
    app.itemTemplate.ItemTemplateApiService);

app.itemTemplate.module.service('itemTemplateService',
    app.itemTemplate.ItemTemplateService);

app.itemTemplate.module.run(['itemTemplateService',
  function(itemTemplateService) {}]);
