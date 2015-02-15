var synDud    = require("./synDyd"),
	copierDud = require("./copyierDud");

/**
 * @desc Just a wrapper
 * 
 * @param {Object} methods or original
 * @desc Either a list of methods to synthesize, or an object to duplicate.
 * For duding methods, pass in an object of values:
 * {
 *		'method1': 'returnValue'
 *		'method2': 'returnValue'
 * }
 * 
 * To copy an object, simply pass in that object, the dud will appear to be the object,
 * but will log everything:
 * var express = milkduds.dud(require(express));
 * 
 * @returns A dud. That dud should be added to a box via `box.addDud(dud)`.
 * After running the test via 'box.run()', the collected data will be in __results.
 * __results has the following format:
 * {
 *		methods: {
 *			method1: {
 *				args: [
 *					["call 1, argument 1", { call: 1, arg: 2 }, ["call", 1, "arg", 1]],
 *					["call 2, argument 1", { call: 2, arg: 2 }, ["call", 2, "arg", 1]]
 *				]
 *			}
 *		}
 *		properties: {
 *			'prop1': ['original value', 'second value', 'third value'],
 *			'prop2': ['original value', 'second value', 'third value']
 *		}
 * }.
 * As you can see, it tracks each method call's arguments (each call gets an array in "methodName".args), 
 * and each property gets any changes to it's value tracked.
 */
 
module.exports = exports = function (original, properties) {
    if(arguments.length == 1) {
        return new copierDud.apply({}, arguments);
    }
    return new synDud.apply({}, arguments);
};