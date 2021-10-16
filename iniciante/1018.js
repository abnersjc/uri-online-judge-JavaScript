var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var total = parseInt(lines[0]);

var nota100 = Math.floor(total / 100);
var nota50 = Math.floor((total % 100) / 50);
var nota20 = Math.floor(((total % 100) % 50) / 20);
var nota10 = Math.floor((((total % 100) % 50) % 20) / 10);
var nota5 = Math.floor(((((total % 100) % 50) % 20) % 10) / 5);
var nota2 = Math.floor((((((total % 100) % 50) % 20) % 10) % 5) / 2);
var nota1 = Math.floor((((((((total % 100) % 50) % 20) % 10) % 5)) % 2) / 1);

console.log(total)
console.log(`${nota100} nota(s) de R$ 100,00`);
console.log(`${nota50} nota(s) de R$ 50,00`);
console.log(`${nota20} nota(s) de R$ 20,00`);
console.log(`${nota10} nota(s) de R$ 10,00`);
console.log(`${nota5} nota(s) de R$ 5,00`);
console.log(`${nota2} nota(s) de R$ 2,00`);
console.log(`${nota1} nota(s) de R$ 1,00`);