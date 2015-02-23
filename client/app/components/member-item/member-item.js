goog.provide('app.memberItem');

goog.require('app.memberItem.MemberItemApiService');
goog.require('app.memberItem.MemberItemService');


/**
 * @type {!angular.Module}
 */
app.memberItem.module = angular.module(
    'app.memberItem', []);

app.memberItem.module.service('memberItemApiService',
    app.memberItem.MemberItemApiService);

app.memberItem.module.service('memberItemService',
    app.memberItem.MemberItemService);
