// Escreva um função ePaisagem que recebe dois argumentos, 
// largura e altura de uma imagem(number).
// Retorne true se a imagem estiver no modo paisagem.

console.log('Exemplo 1:');
function ePaisagem(largura, altura){
    return largura > altura ? true : false;
}
console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));

console.log();

console.log('Exemplo 2:');
function ePaisagem(largura, altura){
    return largura > altura;
}
console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));

console.log();

console.log('Exemplo 3:');
const ePaisagem1 = (largura, altura) => largura > altura; // usando arrow function

console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));