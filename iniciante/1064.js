var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n').map(item => parseFloat(item));
var valoresPositivos = []

for (i = 0; i < valores.length; i ++){  
    if(valores[i] >= 0){
        valoresPositivos.push(valores[i])
    }
}

var soma = valoresPositivos.reduce((soma, valoresPositivos) => soma + valoresPositivos, 0);
var media = soma / valoresPositivos.length
console.log(`${valoresPositivos.length} valores positivos`)
console.log(media.toFixed(1));