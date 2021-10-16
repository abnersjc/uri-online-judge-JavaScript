var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r = Number(lines[0]);
var area = 3.14159 * r * r

console.log(`A=${area.toFixed(4)}`)