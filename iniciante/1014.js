var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => parseFloat(item));


var kmTotal = lines[0];
var combustivelGasto =  lines[1];
var consumoMedio = kmTotal / combustivelGasto;

console.log(`${consumoMedio.toFixed(3)} km/l`);