goog.provide('app.editParty');

goog.require('app.editParty.EditPartyController');


/**
 * Module definition for the editParty module
 * Covers the display of editParty route
 * @type {!angular.Module}
 */
app.editParty.module = angular.module('app.editParty', []);

app.editParty.module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edit-party', {
    templateUrl: 'views/routes/edit-party/edit-party.html',
    controller: app.editParty.EditPartyController,
    controllerAs: 'editPartyCtrl'
  });
}]);

app.editParty.module.controller('editPartyCtrl',
    app.editParty.EditPartyController);
