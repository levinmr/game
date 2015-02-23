goog.provide('app.memberSkill');

goog.require('app.memberSkill.MemberSkillApiService');
goog.require('app.memberSkill.MemberSkillService');


/**
 * @type {!angular.Module}
 */
app.memberSkill.module = angular.module(
    'app.memberSkill', []);

app.memberSkill.module.service('memberSkillApiService',
    app.memberSkill.MemberSkillApiService);

app.memberSkill.module.service('memberSkillService',
    app.memberSkill.MemberSkillService);
