var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => parseInt(item)); 

var velCarroX = 60
var velCarroY = 90
var ultrapassa = 0
var minutos = 0

while(ultrapassa != lines[0]){
    ultrapassa += 1
    minutos += 2
}

console.log(`${minutos} minutos`)