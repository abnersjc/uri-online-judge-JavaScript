var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var inn = 0
var out = 0

for (i = 1; i <= lines[0]; i ++){
    if (lines[i] >= 10 && lines[i] <= 20){
        inn ++
    } else {
        out ++
    }
}

console.log(`${inn} in`)
console.log(`${out} out`)