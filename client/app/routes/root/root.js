goog.provide('app.root');

goog.require('app.root.RootController');


/**
 * Module definition for the root module
 * Covers the display of root route
 * @type {!angular.Module}
 */
app.root.module = angular.module('app.root', []);

app.root.module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/root', {
    templateUrl: 'views/routes/root/root.html',
    controller: app.root.RootController,
    controllerAs: 'rootCtrl'
  });
}]);

app.root.module.controller('rootCtrl', app.root.RootController);
