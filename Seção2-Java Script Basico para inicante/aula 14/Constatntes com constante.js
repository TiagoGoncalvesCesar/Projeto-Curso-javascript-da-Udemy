// Regras:
// Não podemos criar constantes com palavras reservadas ex: let,if, console etc.
// Constantes precisam ter nomes significativos.  ex: let n = 'João'
// Não pode começar o nome de constantes com números. ex: 1nome
// Não pode conter espaços e traços. ex: let nome cliente ou let nome-Cliente
// Caso use nomes compostos de constantes, utilize camelCase. ex: nomeCliente
// Não pode declarar constante sem colocar o valor dela
// Não pode modificar o valor de uma constante 
// As constantes são Case-sensitive, ou seja, letras maiúscula e letra minúscula fazem diferença
// Não podemos redeclarar constantes  usando let. ex: let nome,se for usar a variável nome de novo,usar sem let.
// Não utlize VAR, sempre use CONST.

const nome = 'João'; // não aceita a variável sem valor
console.log(nome)

console.log();

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(`A multiplicação de ${primeiroNumero} e ${segundoNumero} é igual ${resultado}`);

const resultadoDuplicado = resultado * 2;
console.log(`O valor duplicado de ${resultado} é ${resultadoDuplicado}`);

let resultadoTriplicado = resultado * 3;
console.log(`O valor triplicado de ${resultado} é ${resultadoTriplicado}`);
resultadoTriplicado = resultadoTriplicado + 5;
console.log(`O valor de ${resultadoTriplicado} + 5 é ${resultadoTriplicado}`); // vai da erro de valores pq o tipo da variável resultadoTriplicado foi declrada como LET e não CONST.

console.log();
//numero dentro de aspas é string. Ex '5'.
// numero fora de aspas é number. Ex 5.
console.log('Usando typeof para saber o tipo de valor que a variável ta recebndo,Ex string ou number');
console.log('A variável primeiroNumero é do tipo',typeof primeiroNumero)
