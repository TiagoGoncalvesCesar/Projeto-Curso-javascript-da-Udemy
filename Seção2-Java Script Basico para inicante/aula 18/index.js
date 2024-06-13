//ECMASCRIPT 2015 (ES6)
console.log('Usando VAR'); // com VAR aceita redeclarar a mesma variável com mesmo nome,mas imprimi o ultimo valor dentro dela.
var nome = 'Tiago';
var nome = 'Gonçalves Cesar'; 
console.log(nome);

console.log();

console.log('Usando LET'); //com LET não aceita redeclarar a mesma variável, gera erro.
let nome1 = 'Tiago';
nome1 = 'Gonçalves Cesar';
console.log(nome1);

console.log();

//Posso declarar variável sem VAR, LET ou CONST:
nome2 = 'Tiago'; //NÃO FAÇA ISSO
console.log(nome2);