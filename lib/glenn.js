#!/usr/bin/env node

var program = require('commander');
var chalk = require('chalk');
var wow = require('./wow.js');
var lang = require('./lang.js');

program
    .version('0.1.2')
    .usage('[options] <stuff to random>')
    .option('-r, --range <min>-<max>', 'glenn choses a number from a specified range (e.g. \'glenn -r 1-100\')', range)
    .option('-l, --language', 'glenn choses a back end programming language for you')
    .option('-f, --framework [language]', 'glenn choses a framework in your language for you (e.g. \'glenn -f php\')')
    .option('-w, --wow', 'glenn choses a race/class combination in world of warcraft for you')
    .parse(process.argv);

var keywords = program.args;
var regexRange = /[\d]-[\d]/;

if (program.range) {
    program.range = program.range || [];
    res(randomInRange(program.range[0], program.range[1]));
} else if (program.language) {
    var l = lang[Math.floor(Math.random() * lang.length)];
    res(l.name);
} else if (program.framework) {
    var l = program.framework;
    var framework;

    for (var i = 0; i < lang.length; i++)
        if (lang[i].name == l) {
            framework = lang[i].frameworks[Math.floor(Math.random() * lang[i].frameworks.length)];
            break;
        }

    if (framework)
        res(framework)
    else
        if (typeof l == 'string')
            console.log('glenn doesn\'t know any ' + l + ' frameworks :(');
        else
            program.help();
} else if (program.wow) {
    var r = wow[Math.floor(Math.random() * wow.length)];
    var c = r.classes[Math.floor(Math.random() * r.classes.length)];

    res(r.name + ' ' + c);
} else if (keywords.length > 2) {
    var v = keywords[Math.floor(Math.random() * keywords.length)];
    res(v);
} else {
    program.help();
}

function res(val) {
    console.log('glenn chose ' + chalk.green.bold(val) + '!');
}

function range(val) {
  return val.split('-').map(Number);
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}