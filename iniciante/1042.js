var input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split(' ').map(item => parseInt(item));
const inicio = input.split(' ').map(item => parseInt(item));

function comparaNumeros(a,b) { 
    if (a == b) return 0; 
    if (a < b) return -1; 
    if (a > b) return 1; 
};

let listaOrdenada = lines.sort(comparaNumeros);

console.log(listaOrdenada[0]);
console.log(listaOrdenada[1]);
console.log(listaOrdenada[2]);
console.log('');
console.log(inicio[0]);
console.log(inicio[1]);
console.log(inicio[2]);