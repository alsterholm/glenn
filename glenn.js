#!/usr/bin/env node

var program = require('commander');
var chalk = require('chalk');

program
    .version('0.1.0')
    .usage('[options] <stuff to random>')
    .option('-r, --range <min>-<max>', 'glenn choses a number from a specified range (e.g. \'glenn -r 1-100\')', range)
    .parse(process.argv);

var keywords = program.args;
var regexRange = /[\d]-[\d]/;

if (program.range) {
    program.range = program.range || [];
    res(randomInRange(program.range[0], program.range[1]));
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