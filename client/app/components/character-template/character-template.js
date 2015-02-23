goog.provide('app.characterTemplate');

goog.require('app.characterTemplate.CharacterTemplateApiService');
goog.require('app.characterTemplate.CharacterTemplateService');


/**
 * @type {!angular.Module}
 */
app.characterTemplate.module = angular.module(
    'app.characterTemplate', []);

app.characterTemplate.module.service('characterTemplateApiService',
    app.characterTemplate.CharacterTemplateApiService);

app.characterTemplate.module.service('characterTemplateService',
    app.characterTemplate.CharacterTemplateService);
