var input = require('fs').readFileSync('stdin', 'utf8');
var senhas = input.split('\n').map(item => Number(item));
var senha = Number(2002)
var contador = Number(-1)

while(senhas[contador] != senha){
    contador ++
    if (senhas[contador] == senha){
        console.log('Acesso Permitido')
        break
    }
    console.log('Senha Invalida') 
}