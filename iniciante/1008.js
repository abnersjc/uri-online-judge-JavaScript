var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Numero = Number(lines[0]);
var QntHoras = Number(lines[1]);
var ValorPorHora = Number(lines[2]);
var salary = (QntHoras * ValorPorHora);

console.log(`NUMBER = ${Numero}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);