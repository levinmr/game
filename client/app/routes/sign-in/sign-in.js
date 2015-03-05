goog.provide('app.signIn');

goog.require('app.signIn.SignInController');


/**
 * Module definition for the signIn module
 * Covers the display of signIn route
 * @type {!angular.Module}
 */
app.signIn.module = angular.module('app.signIn', []);

app.signIn.module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sign-in', {
    templateUrl: 'views/routes/sign-in/sign-in.html',
    controller: app.signIn.SignInController,
    controllerAs: 'signInCtrl'
  });
}]);

app.signIn.module.controller('signInCtrl', app.signIn.SignInController);
