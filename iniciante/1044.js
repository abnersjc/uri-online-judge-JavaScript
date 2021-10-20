var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numeros = input.split(' ').map(item => parseInt(item));

var maior = Math.max(...numeros);
var menor = Math.min(...numeros);

if ((maior % menor) == 0) {
    console.log('Sao Multiplos')
} else {
    console.log('Nao sao Multiplos')
}