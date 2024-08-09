// Aula while e Do while - Estrutura de repetição

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
console.log('Segue a vida ...');

console.log();
console.log('Usando WHILE:');

//            012345
const nome = 'Tiago';
let t = 0;
while(t < nome.length){
    console.log(nome[t]);
    t++;
}
console.log('Seguimos a vida de novo...');

console.log();
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50; 
let rand = random(min, max);
while(rand !== 10){                // toda vez que encontra o número 10, o while pula fora
    rand = random(min, max);       // checa a condição pra depois rodar a função
console.log(rand);
}
console.log('Parei no 10 ...');

console.log();
console.log('Usando DO WHUILE:');
function random(min1, max1){
    const r1 = Math.random() * (max1 - min1) + min1;
    return Math.floor(r1);
}
const min1 = 1;
const max1 = 50; 
let rand1 = random(min1, max1);
 do {                
    rand1 = random(min1, max1);  // usando do while                              
    console.log(rand1);         // primeiro roda a função, depois checa a condição
}
while (rand1 !== 10)
console.log('Parei no 10 ...');