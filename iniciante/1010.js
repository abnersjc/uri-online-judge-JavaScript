var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var infpeca1 = lines.shift().split(' ').map(item => parseFloat(item));
var infpeca2 = lines.shift().split(' ').map(item => parseFloat(item));

var numeroPeca1 = infpeca1[1];
var valorUnitarioPeca1 = infpeca1[2];
var numeroPeca2 = infpeca2[1];
var valorUnitarioPeca2 = infpeca2[2];
var valorPagar = ((numeroPeca1 * valorUnitarioPeca1) + (numeroPeca2 * valorUnitarioPeca2));

console.log(`VALOR A PAGAR: R$ ${valorPagar.toFixed(2)}`);

