const readline = require('readline-sync');
const algorithms = require('./algorithms');

const argument = process.argv[2] || readline.question('Enter number\n');

console.log(algorithms.task1(argument));
