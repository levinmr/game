goog.provide('app.partyMember.PartyMemberApiService');

goog.require('app.constants');
goog.require('app.partyMember.PartyMemberModel');



/**
 * @constructor
 * @param {!angular.$http} $http
 * @ngInject
 * @export
 */
app.partyMember.PartyMemberApiService = function($http) {

  /**
   * @type {!angular.$http}
   * @private
   */
  this.$http_ = $http;
};


/** @struct */
app.partyMember.PartyMemberApiService.prototype = {

  /**
   * @return {!angular.$http.HttpPromise}
   */
  get: function() {
    return this.$http_.get(app.constants.apiRoot + '/party_member');
  },

  /**
   * @param {!app.partyMember.PartyMemberModel} partyMember
   * @return {!angular.$http.HttpPromise}
   */
  create: function(partyMember) {
    return this.$http_.post(app.constants.apiRoot + '/party_member',
        partyMember);
  },

  /**
   * @param {!app.partyMember.PartyMemberModel} partyMember
   * @return {!angular.$http.HttpPromise}
   */
  update: function(partyMember) {
    return this.$http_.put(app.constants.apiRoot + '/party_member/' +
        partyMember.id, partyMember);
  },

  /**
   * @param {!app.partyMember.PartyMemberModel} partyMember
   * @return {!angular.$http.HttpPromise}
   */
  destroy: function(partyMember) {
    return this.$http_.delete(app.constants.apiRoot + '/party_member/' +
        partyMember.id);
  }
};
