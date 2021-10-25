var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split(' ').map(item => parseFloat(item));

valores.sort((a, b) => b-a);

var A = valores[0]
var B = valores[1]
var C = valores[2]


if (A >= (B + C)){
    console.log('NAO FORMA TRIANGULO')
} else {
    if ((A ** 2) == ((B ** 2) + (C ** 2))){
        console.log('TRIANGULO RETANGULO')
    }
    
    
    if ((A ** 2) > ((B ** 2) + (C ** 2))){
        console.log('TRIANGULO OBTUSANGULO')
        
    }
    
    if ((A ** 2) < ((B ** 2) + (C ** 2))){
        console.log('TRIANGULO ACUTANGULO')
    }
    
    if (A == B && B == C && C == A){
        console.log('TRIANGULO EQUILATERO')
    }
    
    //ISOSCELES
    if (A == B && B != C){
        console.log('TRIANGULO ISOSCELES')
        
    }
    
    if (A == C && C != B){
        console.log('TRIANGULO ISOSCELES')
    }
    
    if (B == C && C != A){
        console.log('TRIANGULO ISOSCELES')
    }

}