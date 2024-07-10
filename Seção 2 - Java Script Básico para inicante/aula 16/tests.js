/* Tiago Gonçalves Cesar tem 39 anos, pesa 72 kg
tem 1.82 de altura e seu IMC é de 25.925925925925924
Tiago nasceu em 1985*/

const nome = 'Tiago';
const sobrenome = 'Gonçalves Cesar';
const idade = 39;
const peso = 72;
const alturaEmM = 1.82;
const anoAtual = 2024;

const anoNascimento = anoAtual - idade;
let IMC = peso / (alturaEmM * alturaEmM);

console.log('Opção 1: com templates')
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg.`);
console.log(`tem ${alturaEmM} e seu IMC é ${IMC}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

console.log();
console.log('Opção 2: com concatenação');

console.log(nome+' '+sobrenome +' tem ' + idade + ' anos, pesa '+ peso+' kg.');
console.log('tem '+alturaEmM+' e seu IMC é '+IMC+'.');
console.log(nome+' nasceu em '+anoNascimento+'.');

console.log();
console.log('Opção 3: com virgulas');
console.log(nome, sobrenome,'tem ', idade,'anos, pesa', peso,'kg.');
console.log('tem',alturaEmM,'e seu IMC é',IMC,'.');
console.log(nome,'nasceu em',anoNascimento,'.');

