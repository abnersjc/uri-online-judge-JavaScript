var input = require('fs').readFileSync('stdin', 'utf8');
var inf = input.split('\n');

if(inf[0] == 'vertebrado' && inf[1] == 'ave' && inf[2] == 'carnivoro'){
    console.log('aguia')
}

if(inf[0] == 'vertebrado' && inf[1] == 'ave' && inf[2] == 'onivoro'){
    console.log('pomba')
}

if(inf[0] == 'vertebrado' && inf[1] == 'mamifero' && inf[2] == 'onivoro'){
    console.log('homem')
}

if(inf[0] == 'vertebrado' && inf[1] == 'mamifero' && inf[2] == 'herbivoro'){
    console.log('vaca')
}

if(inf[0] == 'invertebrado' && inf[1] == 'inseto' && inf[2] == 'hematofago'){
    console.log('pulga')
}

if(inf[0] == 'invertebrado' && inf[1] == 'inseto' && inf[2] == 'herbivoro'){
    console.log('lagarta')
}

if(inf[0] == 'invertebrado' && inf[1] == 'anelideo' && inf[2] == 'hematofago'){
    console.log('sanguessuga')
}

if(inf[0] == 'invertebrado' && inf[1] == 'anelideo' && inf[2] == 'onivoro'){
    console.log('minhoca')
}