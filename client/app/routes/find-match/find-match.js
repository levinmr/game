goog.provide('app.findMatch');

goog.require('app.findMatch.FindMatchController');


/**
 * Module definition for the findMatch module
 * Covers the display of findMatch route
 * @type {!angular.Module}
 */
app.findMatch.module = angular.module('app.findMatch', []);

app.findMatch.module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/find-match', {
    templateUrl: 'views/routes/find-match/find-match.html',
    controller: app.findMatch.FindMatchController,
    controllerAs: 'findMatchCtrl'
  });
}]);

app.findMatch.module.controller('findMatchCtrl',
    app.findMatch.FindMatchController);
