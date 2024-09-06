//Escreva uma função que recebe 2 números e retorne o maior deles
console.log('Usando IF,ELSE')
console.log("Exemplo 1:");
const numero1 = 30;
const numero2 = 40;
function maior(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
};
console.log(maior(numero1, numero2));

console.log();
console.log("Exemplo 2:");
function maior(numero3, numero4) {
  if (numero3 > numero4) {
    return numero3;
  } else {
    return numero4;
  }
};
console.log(maior(30, 20));

console.log();

console.log('Usando operação ternária:');
console.log('Exemplo 1:');
function maior(numero5, numero6){
    return numero5 > numero6 ? numero5 : numero6;
};
console.log(maior(50, 30));

console.log();
console.log('Usando a função arrow function:');
console.log('Exemplo 1:')
const maior2 = (numero7, numero8) => {
    return numero7 > numero8 ? numero7 : numero8;
};
console.log(maior(70,85));

console.log();
console.log('Exemplo 2:'); // aqui sem uso de {}
const maior3 = (numero9, numero10) => numero9 > numero10 ? numero9 : numero10;
console.log(maior3(65,40));