var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = String(lines[0]);
var SalarioFixo = Number(lines[1]);
var TotalVendas = Number(lines[2]);
var TotalReceber = (SalarioFixo + (TotalVendas * 0.15));

console.log(`TOTAL = R$ ${TotalReceber.toFixed(2)}`);