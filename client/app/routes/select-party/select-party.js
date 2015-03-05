goog.provide('app.selectParty');

goog.require('app.selectParty.SelectPartyController');


/**
 * Module definition for the selectParty module
 * Covers the display of selectParty route
 * @type {!angular.Module}
 */
app.selectParty.module = angular.module('app.selectParty', []);

app.selectParty.module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/select-party', {
    templateUrl: 'views/routes/select-party/select-party.html',
    controller: app.selectParty.SelectPartyController,
    controllerAs: 'selectPartyCtrl'
  });
}]);

app.selectParty.module.controller('selectPartyCtrl',
    app.selectParty.SelectPartyController);
