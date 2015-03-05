goog.provide('app.matchResult');

goog.require('app.matchResult.MatchResultController');


/**
 * Module definition for the matchResult module
 * Covers the display of matchResult route
 * @type {!angular.Module}
 */
app.matchResult.module = angular.module('app.matchResult', []);

app.matchResult.module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/match-result', {
    templateUrl: 'views/routes/match-result/match-result.html',
    controller: app.matchResult.MatchResultController,
    controllerAs: 'matchResultCtrl'
  });
}]);

app.matchResult.module.controller('matchResultCtrl',
    app.matchResult.MatchResultController);
