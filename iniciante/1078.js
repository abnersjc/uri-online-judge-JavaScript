var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var n = input.split(' ').map(item => parseInt(item));

for (i = 1; i <= 10; i ++){
    console.log(`${i} x ${n} = ${i * n}`)
}