var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => parseInt(item));
var horas = Math.floor(lines[0] / 3600)
var minutos = Math.floor (Math.floor(lines[0] % 3600) / 60)
var segundos = Math.floor (Math.floor(lines[0] % 3600) % 60)

console.log(`${horas}:${minutos}:${segundos}`)