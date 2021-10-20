var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var notas = input.split(' ').map(item => parseFloat(item));
var exame = input.split('\n').map(item => parseFloat(item));

var n1 = notas[0];
var n2 = notas[1];
var n3 = notas[2];
var n4 = notas[3];
var notaExame = exame[1];

var pn1 = 2;
var pn2 = 3;
var pn3 = 4;
var pn4 = 1;

var media = ((n1 * pn1) + (n2 * pn2) + (n3 * pn3) + (n4 * pn4)) / 10

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0){
    console.log('Aluno aprovado.')
} else if (media < 5.0){
    console.log('Aluno reprovado.')
} else if (media >= 5.0 && media <= 6.9){
    console.log('Aluno em exame.')
    //var notaExame = notas[4];
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`)
    var mediaFinal = (media + notaExame) / 2
    if(mediaFinal >= 5.0){
        console.log('Aluno aprovado.')
        console.log(`Media final: ${mediaFinal.toFixed(1)}`)
    } else if(mediaFinal <= 4.9){
        console.log('Aluno reprovado.')
        console.log(`Media final: ${mediaFinal}`)
    }            
}