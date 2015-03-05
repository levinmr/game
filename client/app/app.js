goog.provide('app');

goog.require('app.AppController');
goog.require('app.AppService');
goog.require('app.characterTemplate');
goog.require('app.editParty');
goog.require('app.editTactics');
goog.require('app.findMatch');
goog.require('app.itemTemplate');
goog.require('app.matchResult');
goog.require('app.memberItem');
goog.require('app.memberSkill');
goog.require('app.party');
goog.require('app.pubSub');
goog.require('app.root');
goog.require('app.selectParty');
goog.require('app.signIn');
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
     app.editParty.module.name,
     app.editTactics.module.name,
     app.findMatch.module.name,
     app.itemTemplate.module.name,
     app.matchResult.module.name,
     app.memberItem.module.name,
     app.memberSkill.module.name,
     app.party.module.name,
     app.root.module.name,
     app.selectParty.module.name,
     app.signIn.module.name,
     app.skillTemplate.module.name,
     app.pubSub.module.name
    ]);


app.module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    redirectTo: function(current, path, search) {
      return '/' + (search['goto'] ? search['goto'] : 'root');
    }
  }).otherwise({redirectTo: '/root'});
}]);

app.module.config(['$locationProvider', function($locationProvider) {
  // Removes hash from angular routes.
  $locationProvider.html5Mode(true);
}]);

app.module.controller('appController', app.AppController);

app.module.service('appService', app.AppService);
