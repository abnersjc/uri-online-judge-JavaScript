var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n').map(item => parseInt(item));
let pares = 0

for (i = 0; i <= 4; i ++){
    if (valores[i] % 2 == 0){
        pares ++
    }
}

console.log(`${pares} valores pares`)