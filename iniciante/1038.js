var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(item => Number(item));

if(lines[0] == 1){
    var valor = lines[1] * 4.0
} else if(lines[0] == 2){
    var valor = lines[1] * 4.5
} else if(lines[0] == 3){
    var valor = lines[1] * 5.0
} else if(lines[0] == 4){
    var valor = lines[1] * 2.00
} else if(lines[0] == 5){
    var valor = lines[1] * 1.50
}
console.log(`Total: R$ ${valor.toFixed(2)}`)