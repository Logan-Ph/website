let arg = process.argv.slice(2);
const chalk = require('chalk');


const colortext = chalk.red(arg[0]);
console.log(`Name: ${colortext}`);

console.log(`Age: ${arg[1]}`);
