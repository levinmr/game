goog.provide('app.memberItem.MemberItemApiService');

goog.require('app.constants');
goog.require('app.memberItem.MemberItemModel');



/**
 * @constructor
 * @param {!angular.$http} $http
 * @ngInject
 * @export
 */
app.memberItem.MemberItemApiService = function($http) {

  /**
   * @type {!angular.$http}
   * @private
   */
  this.$http_ = $http;
};


/** @struct */
app.memberItem.MemberItemApiService.prototype = {

  /**
   * @return {!angular.$http.HttpPromise}
   */
  get: function() {
    return this.$http_.get(app.constants.apiRoot + '/member_item');
  },

  /**
   * @param {!app.memberItem.MemberItemModel} memberItem
   * @return {!angular.$http.HttpPromise}
   */
  create: function(memberItem) {
    return this.$http_.post(app.constants.apiRoot + '/member_item',
        memberItem);
  },

  /**
   * @param {!app.memberItem.MemberItemModel} memberItem
   * @return {!angular.$http.HttpPromise}
   */
  update: function(memberItem) {
    return this.$http_.put(app.constants.apiRoot + '/member_item/' +
        memberItem.id, memberItem);
  },

  /**
   * @param {!app.memberItem.MemberItemModel} memberItem
   * @return {!angular.$http.HttpPromise}
   */
  destroy: function(memberItem) {
    return this.$http_.delete(app.constants.apiRoot + '/member_item/' +
        memberItem.id);
  }
};
