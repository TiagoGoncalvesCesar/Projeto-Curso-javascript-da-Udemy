// Regras:
// Não podemos criar variáveis com palavras reservadas ex: let,if, console etc.
// Variáveis precisam ter nomes significativos.  ex: let n = 'João'
// Não pode começar o nome de variáveis com números. ex: 1nome
// Não pode conter espaços e traços. ex: let nome cliente ou let nome-Cliente
// Caso use nomes compostos de variáveis, utilize camelCase. ex: nomeCliente
// As variáveis são Case-sensitive, ou seja, letras maiúscula e letra minúscula fazem diferença
// Não podemos redeclarar variáveis usando let. ex: let nome,se for usar a variável nome de novo,usar sem let.
// Não utlize VAR, sempre use LET.

console.log('João nasceu em 1984.');
console.log('Em 2000 João conheceu Maria.');
console.log('João casou-se com Maria em 2012.');
console.log('Maria teve um filho com João em 2015.');
console.log('O filho de João chama se Eduardo.');

console.log();

// Uso de variáveis
let nome = 'João';
console.log(nome, ' nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve um filho com',nome,'em 2015.');
console.log('O filho de',nome,'chama se Eduardo.');

console.log();
let nome1; //Declarou variável
nome1 = 'Tiago'; //Inicializando a variável
console.log(nome1);
nome1 = 'Pedro'; // Posso mudar o valor da variável nome1
console.log(nome1)