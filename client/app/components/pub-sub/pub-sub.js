goog.provide('app.pubSub');

goog.require('app.pubSub.PubSubService');


/**
 * Module definition for the pubSub module
 * @type {!angular.Module}
 */
app.pubSub.module = angular.module('app.pubSub', []);

app.pubSub.module.service('pubSubService',
    app.pubSub.PubSubService);

app.pubSub.module.constant('postal', window['postal']);
