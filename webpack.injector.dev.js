'use strict';

/**
 * @fileOverview exports webpack development config
 * generated by webpack-injector
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const injector = require('./index');

// ----------------------------------------
// Private
// ----------------------------------------

// ----------------------------------------
// Public
// ----------------------------------------

injector.helpers.copy('./node_modules/jquery/dist/jquery.min.js', './public/assets/js/vendors/jquery.js', true);
injector.helpers.copy('./src/js/app.js', './dist/js/app.js', true);
injector.helpers.copy('./node_modules/webpack/readme.md', './dist/TEST.md', true);

// ----------------------------------------
// Exports
// ----------------------------------------

// module.exports = injector.exportWebpackConfig();