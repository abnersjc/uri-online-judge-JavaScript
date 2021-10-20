var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var retas = input.split(' ').map(item => parseFloat(item));

var a = retas[0]
var b = retas[1]
var c = retas[2]

if((b - c) < a && a < (b + c) && (a - c) < b && b < (a + c) && (a - b) < c && c < (a + b)){
    var perimetro = a + b + c
    console.log(`Perimetro = ${perimetro.toFixed(1)}`)
} else {
    var area = ((a + b) * c) / 2
    console.log(`Area = ${area.toFixed(1)}`)
}