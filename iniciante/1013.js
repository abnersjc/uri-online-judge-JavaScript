var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(item => parseInt(item));
var maximo = Math.max(...lines);

console.log(`${maximo} eh o maior`)