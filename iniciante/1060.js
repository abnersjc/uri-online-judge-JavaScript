var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n').map(item => parseInt(item));
var contador = 0

for (i = 0; i < 6; i ++){
    if (valores[i] > 0){
        contador ++
    } 
}

console.log(`${contador} valores positivos`)