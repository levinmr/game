goog.provide('app.editTactics');

goog.require('app.editTactics.EditTacticsController');


/**
 * Module definition for the editTactics module
 * Covers the display of editTactics route
 * @type {!angular.Module}
 */
app.editTactics.module = angular.module('app.editTactics', []);

app.editTactics.module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edit-tactics', {
    templateUrl: 'views/routes/edit-tactics/edit-tactics.html',
    controller: app.editTactics.EditTacticsController,
    controllerAs: 'editTacticsCtrl'
  });
}]);

app.editTactics.module.controller('editTacticsCtrl',
    app.editTactics.EditTacticsController);
