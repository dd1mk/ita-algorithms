const readline = require('readline-sync');
const algorithms = require('./algorithms');

const start = process.argv[2] || readline.question('Enter start of range\n');
const end = process.argv[3] || readline.question('Enter end of range\n');

console.log(algorithms.task3(start, end));
