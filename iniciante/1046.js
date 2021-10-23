var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var horas = input.split(' ').map(item => parseInt(item));

var contadorHora = 0

while (true){
    if (horas[0] >= 24){
        horas[0] = 0
    }
    contadorHora ++
    horas[0] += 1
    if (horas[0] == horas[1] || contadorHora > 23 || horas[0] == 24 && horas[1] == 0){
        break
    }
}

console.log(`O JOGO DUROU ${contadorHora} HORA(S)`)