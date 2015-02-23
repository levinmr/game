goog.provide('app');

goog.require('app.AppController');
goog.require('app.AppService');
goog.require('app.characterTemplate');
goog.require('app.itemTemplate');
goog.require('app.levela');
goog.require('app.memberItem');
goog.require('app.memberSkill');
goog.require('app.party');
goog.require('app.skillTemplate');
goog.require('goog.string');


/**
 * Module definition for the app module
 * Entry level module for app definition
 * @type {!angular.Module}
 */
app.module = angular.module(
    'template',
    ['ngRoute',
     'ngTouch',
     app.characterTemplate.module.name,
     app.itemTemplate.module.name,
     app.levela.module.name,
     app.memberItem.module.name,
     app.memberSkill.module.name,
     app.party.module.name,
     app.skillTemplate.module.name
    ]);


app.module.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({redirectTo: '/level-a'});
}]);

app.module.config(['$locationProvider', function($locationProvider) {
  // Removes hash from angular routes.
  $locationProvider.html5Mode(true);
}]);

app.module.controller('appController', app.AppController);

app.module.service('appService', app.AppService);

app.module.filter('unsafeResource', ['$sce', function($sce) {
  return function(val) {
    return $sce.trustAsResourceUrl(val);
  };
}]);
