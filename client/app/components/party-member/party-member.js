goog.provide('app.partyMember');

goog.require('app.partyMember.PartyMemberApiService');
goog.require('app.partyMember.PartyMemberService');


/**
 * @type {!angular.Module}
 */
app.partyMember.module = angular.module(
    'app.partyMember', []);

app.partyMember.module.service('partyMemberApiService',
    app.partyMember.PartyMemberApiService);

app.partyMember.module.service('partyMemberService',
    app.partyMember.PartyMemberService);
