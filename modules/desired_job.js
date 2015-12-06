var chance = require('chance')();

/**
 * Generates a random location for the user.
 * @returns {String} Returns the user's address.
 */
module.exports = function(){
    return chance.address();
};