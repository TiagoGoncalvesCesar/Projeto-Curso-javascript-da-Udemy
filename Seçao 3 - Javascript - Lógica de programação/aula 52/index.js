// For clássico - estrutura de repetição

console.log('For Clássico:');
console.log('Código com linhas de repetição de 0 a 5 sem usar FOR:');
console.log('Linha: 0');
console.log('Linha: 1');
console.log('Linha: 2');
console.log('Linha: 3');
console.log('Linha: 4');
console.log('Linha: 5');

console.log();
console.log('Código com linhas de repetição de 0 a 5 usando FOR:');
let i ;
for ( i = 0; i <= 5; i++ ){
console.log('Linha:',i);
}

 console.log();
console.log('Código com linhas de repetição de 0 a 50 usando FOR:');
for ( i = 0; i <= 50; i++ ){
console.log(`Linha: ${i}`);
}

console.log();
console.log('Código com linhas de repetição de 0 a 50 pulando de 10 em 10 usando FOR:');
for ( i = 0; i <= 50; i+= 10 ){
console.log(`Linha: ${i}`);
}

console.log();
console.log('Código com linhas de repetição de -50 a 50 usando FOR:');
for ( i = -50; i <= 50; i++ ){
console.log(`Linha: ${i}`);
}

console.log();
console.log('Código com linhas de repetição de 50 a 0 usando FOR:');
for ( i = 50; i >= 0; i-= 10 ){
console.log(`Linha: ${i}`);
}

console.log();
console.log('Código com linhas de repetição de 0 a 50 para saber se é par(true) ou ímpar(false)  usando FOR:');
for ( i = 0; i <= 50; i++ ){
    const par = i % 2 === 0;
console.log('Linha:',i, par);
}
console.log();
console.log('Código com linhas de repetição de 0 a 50 usando FOR com estrutura ternária:');
for ( i = 0; i <=50; i++ ){
    const par = i % 2 === 0 ? 'par' : 'impar';
console.log('Linha:', i, par);
}

console.log();
console.log('Código com linhas de repetição de 0 a 3 com variáveis e array usando FOR:');
const frutas = ['maçã', 'pera', 'uva'];
for ( i = 0; i < frutas.length; i++ ){
console.log(`Linha: ${i}`);
}

console.log();
for ( i = 0; i < frutas.length; i++ ){
    console.log('Fruta:',frutas[i]);
    }

    console.log();
    for ( i = 0; i < frutas.length; i++ ){
        console.log(`Índice ${i}:`, frutas[i]);
        }