var rewire = require("rewire");

exports = module.exports = function (path) {
    return new box(path);
};

function box(path){
    this.__path = path;
}

box.prototype.__duds = {};

box.prototype.addDud = function (name, dud) {
    this.__duds[name] = dud;
};

box.prototype.removeDud = function(name) {
    delete this.__duds[name];
};

box.prototype.run = function(vars){
    
};