function validateParams(params) {
    var attrs = ['keys', 'paths'];
    for (var i in attrs) {
        if (!params[attrs[i]]) {
            throw attrs[i]+' must be truthy';
        }
    }

    if (!params.paths.env || !params.paths.jenv) {
        throw "one of the paths is missing. The params.env object must include the env and jenv attribute";
    }

    return true;
}

var fs = require('fs');
var gulp = require('gulp');
var m = {};
m.copy = function(params) {
    validateParams(params);
    var keys = params.keys;
    var paths = params.paths;
    var fileContent = fs.readFileSync(paths.env, 'utf8');
    var lines = fileContent.split('\n');
    var o = {};
    for (var i in lines) {
        if (lines[i] === '') {
            continue;
        }
        var content = lines[i].split('=');
        if (keys.indexOf(content[0]) != -1 || keys.indexOf('*') != -1) {
            o[content[0]] = content[1];
        }
    }
    fs.writeFile(paths.jenv, JSON.stringify(o));
    console.log('----- json env version written successfully -------');
};


module.exports = m;


