var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(item => parseFloat(item));

var novoSalario = 0
var reajuste = 0
var percentual = 0

// 0 - 400.00 -- 15%
if (lines[0] > 0 && lines[0] <= 400){
    percentual = 0.15
    reajuste = percentual * lines[0]
    novoSalario = lines[0] + reajuste
}

// 400.01 - 800.00 -- 12%
if (lines[0] > 400 && lines[0] <= 800){
    percentual = 0.12
    reajuste = percentual * lines[0]
    novoSalario = lines[0] + reajuste
}
// 800.01 - 1200.00 -- 10%
if (lines[0] > 800 && lines[0] <= 1200){
    percentual = 0.10
    reajuste = percentual * lines[0]
    novoSalario = lines[0] + reajuste
}
// 1200.01 - 2000.00 -- 7%
if (lines[0] > 1200 && lines[0] <= 2000){
    percentual = 0.07
    reajuste = percentual * lines[0]
    novoSalario = lines[0] + reajuste
}
// acima de 2000.00
if (lines[0] > 2000){
    percentual = 0.04
    reajuste = percentual * lines[0]
    novoSalario = lines[0] + reajuste
}

console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${(percentual * 100).toFixed(0)} %`);