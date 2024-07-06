// Valores primitivos e valores por referência

/*Tipos de dados primitivos (valores imutáveis): String, Number, boolean, undefined, 
null, (bigint, symbol) -  valores são copiados

Tipos de dados por referência (valores mutáveis): arrays, object e function */

//          012345
console.log('Dados primitivos');
let nome = 'Tiago';
nome[0 ]= 'L'; //a string é imutavel, ou seja,o valor(dado) não muda,continua exibindo o "T" em vez de trocar por "L"
console.log('linha 11:',nome[0]);
console.log('linha 12:',nome);

console.log();
let a = 'A';
let b = a; // copiando valor da variável "a" para variável "b"
console.log('linha 17:', a, b);

a = 'c'; // muda apenas o valor de "a", que passa ter o valor "c", o valor de "b" continua sendo "A"
console.log('linha 20:', a, b);

console.log();

console.log('Dados por referência:');
let c = [1, 2, 3]; // copiando valor da variável "c" para variável "d"
let d = c;
console.log('linha 26:', c,d);
c.push(4);
console.log('linha 28:',c); // passa ter 4 indíce
console.log('linha 29:', c, d); // nesse caso mudou valor de "c" e "d"
d.pop(); // removendo indíce 4
console.log('linha 31:',c);// removeu valor do indíce 4, ou seja, mudou valor
console.log('linha 32:', c,d); // "c e d" voltam a ter valores ter 3 indíces, mudam valores de ambos de novo

console.log();
const pessoa = {
    nome: 'Tiago',
    sobrenome: 'Gonçalves Cesar'
};
const pessoa1 = pessoa;
console.log('linha 42:',pessoa1);
pessoa.nome = 'Paulo'; // nesse caso nome recebe Paulo, mudando tambem o nome dentro de pessoa1
console.log('linha 44:',pessoa1);



