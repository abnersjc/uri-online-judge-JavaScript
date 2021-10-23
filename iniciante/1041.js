var input = require('fs').readFileSync('stdin', 'utf8');
var eixos = input.split(' ').map(item => parseFloat(item));

if (eixos[0] > 0 && eixos[1] > 0){
    console.log('Q1')
}

if (eixos[0] < 0 && eixos[1] > 0){
    console.log('Q2')
}

if (eixos[0] < 0 && eixos[1] < 0){
    console.log('Q3')
}

if (eixos[0] > 0 && eixos[1] < 0){
    console.log('Q4')
}

if (eixos[0] == 0 && eixos[1] == 0){
    console.log('Origem')
}

if (eixos[0] > 0 && eixos[1] == 0){
    console.log('Eixo X')
}

if (eixos[0] < 0 && eixos[1] == 0){
    console.log('Eixo X')
}

if (eixos[1] > 0 && eixos[0] == 0){
    console.log('Eixo Y')
}

if (eixos[1] < 0 && eixos[0] == 0){
    console.log('Eixo Y')
}