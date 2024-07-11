/*
Operadores lógicos:
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras pra retornar true(verdadeiro)
|| -> OR  -> OU
!  -> NOT -> NÃO
*/ 

console.log('Usando operador &&(AND):');
const expressaoAnd = true && true && true;
console.log('linha 10:',expressaoAnd); // como as expressões são todas verdadeiras,retorna true (verdadeiro)

const expressaoAnd1 = true && false && true;
console.log('linha 13:',expressaoAnd1); // como tem um expressão falsa, retorna false(falso)

console.log();
console.log('Usando operador ||(OR):');
const expressaoOr = false || true || false ; // apresentando pelo menos uma expressão verdadeira, retorna true(verdadeiro)
console.log('linha 18:', expressaoOr);

const expressaoOr1 = false || false || false; // todas expressões são falsas, retorna false(falso)
console.log('linha 21:',expressaoOr1);

const  expressaoOr2 = true || true || true; // todas expressões são verdadeiras, retorna true (verdadeiro)
console.log('linha 24:',expressaoOr2);

const expressaoOr3 = false || true || false; // como tem expressão verdadeira, retorna true(verdadeiro)
console.log('linha 27:',expressaoOr3);

const expressaoOr4 = false || false || false; // como todas expressões são falsas, retorna false(falso)
console.log('linha 30:', expressaoOr4);

console.log();
console.log('USando operador !(NOT):');
const expressaoNot = true; // como tem expressão true, retorna true(verdadeiro)
console.log('linha 35:',expressaoNot);

const expressaoNot1 = true; // como tem expressão true, mas usei o ponto de exclamação,que é operador de negação, retorna false(falso)
console.log('linha 38:',!expressaoNot1);

const expressaoNot2 = false; // como tem expressão false, mas usei o ponto de exclamação,que é operador de negação, retorna true(verdadeiro)
console.log('linha 41:',!expressaoNot2);


console.log();
console.log('Exemplo de um banco de dados:');  
const usuario = 'Tiago'; // form que usuario digitou
const senha = 123456; // form que usuário digitou
const  vaiLogar = usuario === "Tiago" &&  senha === 123456; //vai retornar true porque o usuário digitou os dados corretos, usuário vai logar na conta
console.log('linha 49:',vaiLogar);

const usuario1 = 'Tiago'; // form que usuario digitou
const senha1 = 123456; // form que usuário digitou
const  vaiLogar1 = usuario === "Tiago" &&  senha === 12345; // vai retornar false porque o usuário digitou os dados errados, usuário não vai logar
console.log('linha 54:',vaiLogar1);









