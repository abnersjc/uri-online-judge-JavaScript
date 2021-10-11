var input = require('fs').readFileSync('stdin', 'utf8');
var [a, b, c] = input.split(' ').map(item => parseFloat(item));

var delta = Math.pow((b*(-1)), 2) - 4 * a * c 


if ( delta >= 0 && a != 0) {
    var r1 = ((b * (-1)) + Math.sqrt(delta)) / (2 * a)
    var r2 = ((b * (-1)) - Math.sqrt(delta)) / (2 * a)
    console.log(`R1 = ${r1.toFixed(5)}`)
    console.log(`R2 = ${r2.toFixed(5)}`)
    }

    else {
        console.log('Impossivel calcular')
    }