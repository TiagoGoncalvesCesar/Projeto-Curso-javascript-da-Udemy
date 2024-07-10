/* 
Operadores de comparação:
>  - Maior que
>= - Maior que ou igual a
<  - Menor que
<= - Menor que ou igyal a
== - Igualdade (mostra valor) --> não recomendado usar
=== - Igualdade estrita (mostra valor e tipo)
!= - Diferente (compara valores) --> não recomendado usar
!== - Diferente estrito (valor e tipo)
*/ 

const comparador = 10 > 5;
console.log('linha 14:',comparador); //comprarando se 10 é maior que 5, como é maior, informa que é true (verdadeiro)

const comparador1 = 10 >= 5;
console.log('linha 17:',comparador1); //comprarando se 10 é maior ou igual a 5, como é maior, informa que é true (verdadeiro)

const comparador2 = 10 >= 10;
console.log('linha 20:',comparador2); //comprarando se 10 é maior ou igual a 10, como é igual, informa que é true (verdadeiro)
 
const comparador3 = 10 >= 11;
console.log('linha 23:',comparador3); //comprarando se 10 é maior ou igual a 11, como é menor, informa que é false (falso)

const comparador4 = 10 < 11;
console.log('linha 26:',comparador4); //comprarando se 10 é menor que 11, como é menor, informa que é true (verdadeiro)

const comparador5 = 10 < 11;
console.log('linha 29:',comparador5); //comprarando se 10 é menor que 11, como é menor, informa que é true (verdadeiro)

const comparador6 = 10 <= 11;
console.log('linha 32:',comparador6); //comprarando se 10 é menor ou igual a 11, como é menor, informa que é true (verdadeiro)

const comparador7 = 10 == 10;
console.log('linha 35:',comparador7); //comprarando se 10 é igual a 10, como é igual, informa que é true (verdadeiro)

const comparador8 = 10 == 11;
console.log('linha 38:',comparador8); //comprarando se 10 é igual a 11, como não é igual, informa que é false (false)

const comparador9 = 10 == '10';
console.log('linha 41:',comparador9); //comprarando se 10 que é Number é igual a '10' que é String, não é igual, mas fez correção de tipo, informa que é true (verdadeiro), não é recomendado usar

const comparador10 = 10 === '10';
console.log('linha 44:',comparador10); //comprarando se 10 é Number é igual a '10' que é String,faz a verificação estrita, como são tipos diferente, informa que é false (falso)

const comparador11 = 10 === 10;
console.log('linha 47:',comparador11);// como verificou que os dois tipos são Number, informa true (verdadeiro)

const comparador12 = 10 != 10; //comparando se 10 é diferente de 10, como não são diferente, informa false (falso)
console.log('linha 50:',comparador12);

const comparador13 = 10 != 11; //comparando se 10 é diferente de 11, como são diferente, informa true (verdadeiro)
console.log('linha 53:',comparador13);

const comparador14 = 10 !== '10'; //comparando se 10 que é Number de '10' que é String, como tem valores e tipos diferente, informa true (verdadeiro)
console.log('linha 56:',comparador14);

const comparador15 = 10 !== 10; //comparando os tipos e verificando que ambos são Number, como tem valores e iguais, informa false (falso)
console.log('linha 59:',comparador15);