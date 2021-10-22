var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

for (c = 1; c <= lines[0]; c ++ ){
    if (c % 2 == 0){
        console.log(`${c}^2 = ${c ** 2}`)
    }
}