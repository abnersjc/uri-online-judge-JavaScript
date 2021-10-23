var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(item => parseInt(item));

for (c = 1; c < lines[0] + 1; c ++){
    if (lines[c] % 2 == 0 && lines[c] > 0){
        console.log('EVEN POSITIVE')
    } 
    if (lines[c] % 2 == 0 && lines[c] < 0){
        console.log('EVEN NEGATIVE')
    }
    if ((lines[c] % 2) != 0 && lines[c] > 0){
        console.log('ODD POSITIVE')
    } 
    if ((lines[c] % 2) != 0 && lines[c] < 0){
        console.log('ODD NEGATIVE')
    }
    if (lines[c] == 0){
        console.log('NULL')
    }
}