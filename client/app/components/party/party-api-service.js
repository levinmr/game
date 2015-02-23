goog.provide('app.party.PartyApiService');

goog.require('app.constants');
goog.require('app.party.PartyModel');



/**
 * @constructor
 * @param {!angular.$http} $http
 * @export
 */
app.party.PartyApiService = function($http) {

  /**
   * @type {!angular.$http}
   * @private
   */
  this.$http_ = $http;
};


/** @struct */
app.party.PartyApiService.prototype = {

  /**
   * @return {!angular.$http.HttpPromise}
   */
  get: function() {
    return this.$http_.get(app.constants.apiRoot + 'party');
  },

  /**
   * @param {!app.party.PartyModel} party
   * @return {!angular.$http.HttpPromise}
   */
  create: function(party) {
    return this.$http_.post(app.constants.apiRoot + 'party',
        party);
  },

  /**
   * @param {!app.party.PartyModel} party
   * @return {!angular.$http.HttpPromise}
   */
  update: function(party) {
    return this.$http_.put(app.constants.apiRoot + 'party/' +
        party.id, party);
  },

  /**
   * @param {!app.party.PartyModel} party
   * @return {!angular.$http.HttpPromise}
   */
  destroy: function(party) {
    return this.$http_.delete(app.constants.apiRoot + 'party/' +
        party.id);
  }
};
