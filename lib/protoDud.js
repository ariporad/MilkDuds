/** 
 * @desc Prototype Dud.
 * Provides some basic methods for other types of duds.
 * Should not be used, exept to subclass.
 */
 
var protoDud = exports = module.exports = function(){
	throw new Error("DO NOT USE PROTODUD EXEPT TO SUBCLASS. YOU WILL BE EXTERMINATED. EXTERMINATE! EXTERMINATE! EXXXTERMINATEEEEE!\n" + require("../top-secret/dalek"));
};

/**
 * @name initTrackers()
 * @desc Adds all the trackers to the dud so we can log it.
 * `
 * It should be called right before the test is run.
 */

protoDud.prototype.___milkduds___.initTrackers = function(){
	this.milkduds = this.___milkduds___;
	resetResults(this);
	for(var propertyName in this) {
		if(typeof this[propertyName] == 'function') {
		   this.___milkduds___.results.methods[propertyName] = { args: [] }; 
		   this[propertyName] = dudFunction(this, propertyName);
		} else {
			this.___milkduds___.results.properties[propertyName] = [];
			dudProperty(this, propertyName);
	   	}
	}
}

/**
 * @name {Boolean} __isRunningTests
 * @desc Are the tests currently running or not? Used to determine logging of usage.
 * @default false
 */
protoDud.prototype.___milkduds___.isRunningTests = false;

/**
 * @name testsStarting()
 * @desc Notifies the dud that tests are starting. Also removes the link from ___milkduds___ to milkduds.
 */
protoDud.prototype.___milkduds___.testsStarting = function () {
	this.___milkduds___.isRunningTests = true;
	delete this.milkduds;
}

/**
 * @name testsStarting()
 * @desc Notifies the dud that tests are done. Also restores the link from ___milkduds___ to milkduds.
 */
protoDud.prototype.___milkduds___.testsEnding = function () {
	this.___milkduds___.isRunningTests = false;
	this.milkduds = this.____milkduds____;
}

/**
 * @name resetResults(obj)
 * @desc Reset the results object to prepare to be run.
 * 
 * @param {Object} obj
 * @desc The object to be reset.
 */

function resetResults(obj){
	this.___milkduds___ = {
		isRunningTests: false,
		results: {
			methods: {},
			properties: {}
		}
	}
}

/**
 * @name dudFunction()
 * @desc Generates a function that logs the function call & arguemnts then calls the passed in function.
 * 
 * @param {Object} obj
 * @desc The Object with the method to dud.
 * 
 * @param {String} funcName
 * @desc The name (key) of the method to dud.
 * 
 * @returns {Function} a function which logs the call, then invokes obj[funcName].
 * 
 * Intended Usage:
 * obj.methodX = dudFunction(obj, "methodX");
 */
function dudFunction(obj, funcName){
	var func = obj[funcName];
	return function() {
		obj.___milkduds___.results.methods[funcName].args.push(arguments);
		var result = obj[funcName].bind(this, arguments);
		obj.___milkduds___.results.methods[funcName].returns.push(result);
		return result;
	}
}

/**
 * @name dudProperty(obj, propertyName)
 * @desc Add setters and getters to obj[propertyName] so any change to the value is logged
 * 
 * @param {Object} obj
 * @desc The object with the property to dud.
 * 
 * @param {String} propertyName
 * @desc The name (key) of the property to dud.
 * 
 * @returns Nothing
 */
function dudProperty(obj, propertyName) {
	var value = obj[propertyName]
	obj[propertyName].__defineGetter__(function(){
		return value;
	});
	obj[propertyName].__defineSetter__(function(newValue){
		obj.___milkduds___.results.properties[propertyName].push(newValue);
		return value = newValue;
	});
 }