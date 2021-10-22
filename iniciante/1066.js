var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n').map(item => parseInt(item));
var pares = 0
var impares = 0
var positivo = 0
var negativo = 0

for(i = 0; i < 5; i ++){
    if (valores[i] % 2 == 0){
        pares ++
    }
}

for(i = 0; i < valores.length; i ++){
    if ((valores[i] % 2) < 0 || (valores[i] % 2) > 0){
        impares ++
    }
}

for(i = 0; i < valores.length; i ++){
    if (valores[i] > 0 && valores[i] != 0){
        positivo ++
    }
}

for(i = 0; i < valores.length; i ++){
    if (valores[i] < 0 && valores[i] != 0){
        negativo ++
    }
}

console.log(`${pares} valor(es) par(es)`)
console.log(`${impares} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`)
console.log(`${negativo} valor(es) negativo(s)`)