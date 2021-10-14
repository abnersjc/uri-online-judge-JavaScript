var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n').map(item => parseFloat(item));

var nota100 = Math.floor(valor[0] / 100);
var rnota100 = valor[0] % 100;
var nota50 = Math.floor(rnota100 / 50);
var rnota50 = rnota100 % 50;
var nota20 = Math.floor(rnota50 / 20);
var rnota20 = rnota50 % 20;
var nota10 = Math.floor(rnota20 / 10);
var rnota10 = rnota20 % 10;
var nota5 = Math.floor(rnota10 / 5);
var rnota5 = rnota10 % 5;
var nota2 = Math.floor(rnota5 / 2);
var rnota2 = rnota5 % 2;

var moeda1 = Math.floor(rnota2 / 1);
var rmoeda1 = rnota2 % 1;
var moeda050 = Math.floor(rmoeda1 / 0.50);
var rmoeda050 = rmoeda1 % 0.50;
var moeda025 = Math.floor(rmoeda050 / 0.25);
var rmoeda025 = rmoeda050 % 0.25;
var moeda010 = Math.floor(rmoeda025 / 0.10);
var rmoeda010 = rmoeda025 % 0.10;
var moeda005 = Math.floor(rmoeda010 / 0.05);
var rmoeda005 = rmoeda010 % 0.05;
var moeda001 = rmoeda005 / 0.01;

console.log('NOTAS:')
console.log(`${nota100} nota(s) de R$ 100.00`);
console.log(`${nota50} nota(s) de R$ 50.00`);
console.log(`${nota20} nota(s) de R$ 20.00`);
console.log(`${nota10} nota(s) de R$ 10.00`);
console.log(`${nota5} nota(s) de R$ 5.00`);
console.log(`${nota2} nota(s) de R$ 2.00`);
console.log('MOEDAS:');
console.log(`${moeda1} moeda(s) de R$ 1.00`);
console.log(`${moeda050} moeda(s) de R$ 0.50`);
console.log(`${moeda025} moeda(s) de R$ 0.25`);
console.log(`${moeda010} moeda(s) de R$ 0.10`);
console.log(`${moeda005} moeda(s) de R$ 0.05`);
console.log(`${moeda001.toFixed(0)} moeda(s) de R$ 0.01`);