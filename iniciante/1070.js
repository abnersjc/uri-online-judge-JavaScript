var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ').map(item => parseInt(item));

var contador = lines[0]
var impar = 0

while (impar < 6){
    if (contador % 2 != 0){
        impar ++
        console.log(contador)
    }
    if (impar > 6)
    break
    contador ++
}