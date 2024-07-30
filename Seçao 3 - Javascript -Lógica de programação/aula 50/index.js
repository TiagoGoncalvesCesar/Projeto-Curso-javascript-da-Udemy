 // Aula atribuição via destruturação

 let a = 'A';  // variável a receber o valor variável b
 let b = 'B'; // variável b receber o valor variável c
 let c = 'C'; // variável c receber o valor de variável a
console.log('linha 6:',a, b, c);

const letras = [b,c,a]; // exemplo de atribuição via destruturação,modificou os valores das variaveis
[a,b,c]= letras;
console.log('linha 10:',a,b,c);

[a, b, c] = [1,2,3]; // acontece a atribuição via destruturação, modifica valores das variáveis
console.log('linha 13:',a, b, c);

const numeros = [4,5,6]; // outra atribuição via destruturação,modificou novamente os valores das variaveis
[a,b,c]= numeros;
console.log('linha 17:',a,b,c);

console.log();
// índice         0  1  2  3  4  5  6  7  8
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeiroNumero2 = numeros2[0];

console.log('linha 24:',numeros2);
console.log('linha 25:',numeros2[0]);
console.log('linha 26:',primeiroNumero2);
console.log('linha 28:',primeiroNumero2);

console.log();
// índice         0  1  2  3  4  5  6  7  8
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero3, segundoNumero3] = numeros3;
console.log('linha 33:',primeiroNumero3, segundoNumero3); // atribuição via destruturação

console.log();
// usando operador rest
// índice         0  1  2  3  4  5  6  7  8
const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero4, segundoNumero4,terceironumero4, ...resto] = numeros4;
console.log('linha 40:',primeiroNumero4, segundoNumero4, terceironumero4);
console.log('linha 41:',resto); //pegou resto do array

console.log();
// índice         0  1  2  3  4  5  6  7  8
const numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero5,  ,terceiroNumero5, ,quintoNumero5, ,setimoNumero5, ,nonoNumero5] = numeros5;// pulando os numeros com array vazio nas posições usando via destruturação
console.log('linha 47:',primeiroNumero5, terceiroNumero5, quintoNumero5, setimoNumero5, nonoNumero5); 

console.log();
// índice  numeros6   0          1          2
//índice           0  1  2    0  1  2    0  1   2
const numeros6 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [primeiroNumero6, segundoNumero6] = numeros6; //acessando numero 6 no indice 1
console.log('linha 54:', numeros6[1][2]);

console.log();
// índice  numeros6   0          1          2
//índice           0  1  2    0  1  2    0  1   2
const numeros7 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,seis]]= numeros7; //outra forma de acessaar o numero 6 no indice 1
console.log('linha 61:', seis); 

console.log();
// índice  numeros6   0          1          2
//índice           0  1  2    0  1  2    0  1   2
const numeros8 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros8; //outra forma de acessaar o numero 6
console.log('linha 68:', lista2[2]);




