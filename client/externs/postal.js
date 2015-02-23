/**
 * @typedef {{
 *  chanel: (Function)
 * }}
 */
var postal = {};

/**
 * @typedef {{
 *   subscribe: (Function)
 * }}
 */
postal.ChannelDefinition;

/**
 * @typedef {{
 *   unsubscribe: (Function)
 * }}
 */
postal.SubscriptionDefinition;

/**
 * @param {string} channels
 * @return {postal.ChannelDefinition}
 */
postal.channel = function(channels) {};


/**
 * @type {!postal}
 */
window.postal;
