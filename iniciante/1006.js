var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = Number(lines[0]);
var b = Number(lines[1]);
var c = Number(lines[2]);
var media = (((a * 2) + (b * 3) + (c * 5)) / 10);

console.log(`MEDIA = ${media.toFixed(1)}`);