var input = require('fs').readFileSync('stdin', 'utf8');
var idadeEmDias = input.split('\n').map(item => parseInt(item));

var ano = Math.floor(idadeEmDias[0] / 365);
var mes = Math.floor(Math.floor(idadeEmDias[0] % 365) / 30);
var dia = Math.floor(Math.floor(idadeEmDias[0] % 365) % 30);

console.log(`${ano} ano(s)`)
console.log(`${mes} mes(es)`)
console.log(`${dia} dia(s)`)