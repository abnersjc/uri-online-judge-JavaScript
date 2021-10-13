var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(ITEM => parseInt(ITEM));

var A = lines[0]
var B = lines[1]
var C = lines[2]
var D = lines[3]

if (B > C && D > A && (C + D) > (A + B) && C >= 0 && D >= 0 && A % 2 == 0) {
    console.log('Valores aceitos')
}

else {
    console.log('Valores nao aceitos')
};