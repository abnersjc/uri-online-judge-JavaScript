var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valor = input.split(' ').map(item =>parseInt(item));


for (i = 1; i <= valor[0]; i ++){
    if (i % 2 != 0){
        console.log(i)
    }
}
