goog.provide('app.party');

goog.require('app.party.PartyApiService');
goog.require('app.party.PartyService');


/**
 * @type {!angular.Module}
 */
app.party.module = angular.module(
    'app.party', []);

app.party.module.service('partyApiService',
    app.party.PartyApiService);

app.party.module.service('partyService',
    app.party.PartyService);
