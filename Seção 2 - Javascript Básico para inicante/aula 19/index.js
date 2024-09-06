// Tipos de dados primitivos:
// String, number, undefined, null, boolean.

console.log('String:');
const nome = 'Tiago'; // usando aspas simples.
console.log('nome:',nome);

console.log();

const nome1 = "Tiago"; // usando aspas dupla.
console.log('nome1:',nome1);

console.log();

const nome2 = `Tiago`; //usando clase(Template String)
console.log(`nome2:${nome2}`);

console.log()

console.log('Number:');
const num1 = 10; // number
console.log(num1);

console.log();

const num2 = 10.52; // number
console.log(num2);

console.log();
console.log('Variável Undefined:');
let nomeAluno; // undefined, não aponta pra local nenhum na memória.
console.log(nomeAluno);

console.log();
console.log("Variável NULL:");
let sobreNomeAluno = null; // nulo, não aponta pra local nenhum na memória.
console.log(sobreNomeAluno)

console.log();
console.log('Variável Boolean');// Boolean true = verdadeiro, false = falso (valor logico)
const alunoAprovado = true;
console.log('O aluno foi ou não aprovado?',alunoAprovado);
const alunoReprovado = false
console.log('O aluno foi ou aprovado?',alunoReprovado);

console.log();
console.log('Saber o tipo da variável'); //Usa o typeof e valor da variável
console.log('A variável nome é do tipo',typeof nome,'e valor',nome);
console.log('A variável num1 é do tipo',typeof num1, 'e valor',num1);
console.log('A variável nomeAluno é do tipo',typeof nomeAluno, 'e valor',nomeAluno);
console.log('A variável sobreNomeAluno é do tipo',typeof sobreNomeAluno, 'e valor',sobreNomeAluno);
console.log('A variável alunoAprovado é do tipo',typeof alunoAprovado, 'e valor',alunoAprovado);
console.log('A variável alunoReprovado é do tipo',typeof alunoReprovado, 'e valor',alunoReprovado);

console.log();
console.log('Tipos devalores Referência');
const a = [1, 2];
const b = a;
console.log(a, b);

console.log();

b.push(3);
console.log(a, b);

console.log();

b.push(3, 4);
console.log(a, b);