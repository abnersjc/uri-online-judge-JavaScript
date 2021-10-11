var input = require('fs').readFileSync('stdin', 'utf8');
var [horas, velocidadeMedia] = input.split('\n').map(item => parseInt(item));
var consumo = 12;

var quantidadeLitros = (horas * velocidadeMedia) / consumo;

console.log(quantidadeLitros.toFixed(3));