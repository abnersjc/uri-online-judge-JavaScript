var input = require('fs').readFileSync('stdin', 'utf8');
var x = input.split('\n').map(item => parseFloat(item));

if (x[0] >= 0 && x[0] <= 25){
    console.log('Intervalo [0,25]')
}
    else if(x[0] > 25 && x[0]<= 50){
    console.log('Intervalo (25,50]')
    }
    
    else if(x[0] > 50 && x[0]<= 75){
    console.log('Intervalo (50,75]')
    }
    
    else if(x[0] > 75 && x[0]<= 100){
    console.log('Intervalo (75,100]')
    } 
    
    else {
    console.log('Fora de intervalo')
    }