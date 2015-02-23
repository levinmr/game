goog.provide('app.memberSkill.MemberSkillApiService');

goog.require('app.constants');
goog.require('app.memberSkill.MemberSkillModel');



/**
 * @constructor
 * @param {!angular.$http} $http
 * @export
 */
app.memberSkill.MemberSkillApiService = function($http) {

  /**
   * @type {!angular.$http}
   * @private
   */
  this.$http_ = $http;
};


/** @struct */
app.memberSkill.MemberSkillApiService.prototype = {

  /**
   * @return {!angular.$http.HttpPromise}
   */
  get: function() {
    return this.$http_.get(app.constants.apiRoot + 'member_skill');
  },

  /**
   * @param {!app.memberSkill.MemberSkillModel} memberSkill
   * @return {!angular.$http.HttpPromise}
   */
  create: function(memberSkill) {
    return this.$http_.post(app.constants.apiRoot + 'member_skill',
        memberSkill);
  },

  /**
   * @param {!app.memberSkill.MemberSkillModel} memberSkill
   * @return {!angular.$http.HttpPromise}
   */
  update: function(memberSkill) {
    return this.$http_.put(app.constants.apiRoot + 'member_skill/' +
        memberSkill.id, memberSkill);
  },

  /**
   * @param {!app.memberSkill.MemberSkillModel} memberSkill
   * @return {!angular.$http.HttpPromise}
   */
  destroy: function(memberSkill) {
    return this.$http_.delete(app.constants.apiRoot + 'member_skill/' +
        memberSkill.id);
  }
};
