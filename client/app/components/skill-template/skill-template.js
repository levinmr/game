goog.provide('app.skillTemplate');

goog.require('app.skillTemplate.SkillTemplateApiService');
goog.require('app.skillTemplate.SkillTemplateService');


/**
 * @type {!angular.Module}
 */
app.skillTemplate.module = angular.module(
    'app.skillTemplate', []);

app.skillTemplate.module.service('skillTemplateApiService',
    app.skillTemplate.SkillTemplateApiService);

app.skillTemplate.module.service('skillTemplateService',
    app.skillTemplate.SkillTemplateService);

app.skillTemplate.module.run(['skillTemplateService',
  function(skillTemplateService) {}]);
