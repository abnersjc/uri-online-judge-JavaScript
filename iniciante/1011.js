var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = Number(lines[0]);
var volume = (4/3) * 3.14159 * Math.pow(Number(raio), 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);