var rewire = require("rewire");

exports = module.exports = function (path) {
    return new box(path);
};

function box(path){
    this.__path = path;
}

box.prototype.__duds = {};
box.prototype.__env = "development"

box.prototype.addDud = function (name, dud) {
    this.__duds[name] = dud;
};

box.prototype.removeDud = function(name) {
    delete this.__duds[name];
};

box.prototype.env = function (env) {
    if (arguments.length > 0) {
        return this.__env = env;
    }
    return this.__env;
}
box.prototype.run = function(vars){
    var mod = rewire(this.__path).__set__(this.__duds);
    var p = process;
    process.env.NODE_ENV = this.__env;
    mod.__set__({process: p});
    return mod;
};