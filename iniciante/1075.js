var input = require('fs').readFileSync('stdin', 'utf8');
var n = input.split(' ').map(item => parseInt(item));

for (i = 0; i <= 10000; i ++){
    if (i % n[0] == 2){
    console.log(i)        
    }
}
