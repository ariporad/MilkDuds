/**
 * @name timelock.js
 * @desc Allows for making a property completly invisable & inaccessable to the tested code.
 * @status WIP
 */
 
/**
 * @name TimeLock
 * @desc A Construction function for a time lock.
 * 
 * @param {Object} obj
 * @desc The Object with the property to Time Lock.
 * 
 * @param {String} propName
 * @desc The name (key) of the property to lock.
 * 
 * @returns {TimeLock} a new time lock.
 */
function TimeLock(obj, propName){
    this.value = obj[propName];
    this.enabled = false;
    this.setValue = undefined;
    Object.defineProperty(obj, propName, {
        get: function(){
            
        },
        set: MakeSetter()
    })
}