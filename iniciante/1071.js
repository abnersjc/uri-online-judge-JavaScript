var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item=> parseInt(item));
var maior = 0
var menor = 0
var soma = 0

if (lines[0] < lines[1]){
    maior = lines[1]
    menor = lines[0]
}

if (lines[0] > lines[1]){
    maior = lines[0]
    menor = lines[1]
}

for (var i = menor + 1; i < maior; i ++){
    if (i % 2 != 0){
        soma += i
    }
}
console.log(soma)