'use strict';

/**
 * @module
 * @author Oleg Dutchenko <dutchenko.o.dev@gmail.com>
 * @licence MIT
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const argv = require('../utils/argv');
const fromCWD = require('from-cwd');

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @namespace
 */
const defaults = {
	/**
	 * @type {boolean}
	 */
	isProduction: argv('production'),

	/**
	 * @type {boolean}
	 */
	isWatching: argv('watch'),

	/**
	 * @type {boolean}
	 */
	isHot: argv('hot'),

	/**
	 * @type {WebpackInjectorSource}
	 */
	app: {},

	/**
	 * @type {WebpackInjectorSource[]}
	 */
	sass: [],

	/**
	 * @type {string[]|RegExp[]}
	 */
	vendors: [],

	/**
	 * @type {Object[]}
	 */
	externals: [],

	/**
	 * @type {Object[]}
	 */
	plugins: [],

	/**
	 * @type {Object[]}
	 */
	customRules: [],

	/**
	 * @type {Object[]}
	 */
	postcssLoaderPlugins: [],

	/**
	 * @type {Object[]}
	 */
	cssLoaderOptions: [
		{
			get sourceMap () {
				return !!defaults.sourcemaps;
			},
			importLoader: 1
		}
	],

	/**
	 * @type {Object[]}
	 */
	styleLoaderOptions: [
		{
			sourceMap () {
				return !!defaults.sourcemaps;
			},
			get hmr () {
				return !!defaults.isHot;
			}
		}
	],

	/**
	 * @type {Object[]}
	 */
	sassLoaderOptions: [
		{
			sourceMap () {
				return !!defaults.sourcemaps;
			}
		}
	],

	/**
	 * @type {Object}
	 * @enum {string}
	 */
	resolveAlias: {},

	/**
	 * @type {string[]}
	 */
	resolveModules: [
		fromCWD('./node_modules/')
	],

	/**
	 * @type {string|undefined}
	 */
	publicPath: undefined,

	/**
	 * @type {string|boolean}
	 */
	sourcemaps: false
};

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = defaults;