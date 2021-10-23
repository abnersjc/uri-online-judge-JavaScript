var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numeros = input.split('\n').map(item => parseInt(item));

var contadorGeral = 0
var contador = 0

while(numeros[contadorGeral] != 0){
    var lista = ''
    for (i = 1; i <= numeros[contadorGeral]; i ++){ 
        contador ++
        if (numeros[contadorGeral] > contador){
            lista += contador + ' '    
        } else {
            lista += contador
        } 
        if (numeros[contadorGeral] == contador){
            contador = 0 
            console.log(lista) 
            lista = 0 
        }    
    }
    contadorGeral ++
}