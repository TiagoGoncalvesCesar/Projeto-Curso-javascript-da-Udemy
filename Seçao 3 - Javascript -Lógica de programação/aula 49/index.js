//Aula 49: Mais diefrenças entre var, let/const
//LET tem escopo de bloco { tudo que está dentro de chaves}
// VAR só tem escopo de função
console.log('Usando LET:')
let nome = 'Tiago'; // usando LET não posso reutilizar a variável declarada,mesmo que seja com valore diferente
//let nome = 'Gonçalves' -> nessa linda teríamos erro
console.log('linha 5:',nome);

console.log();

console.log('Usando VAR:');
var nome2 = 'Tiago';  // usando VAR posso reutilizar a variável declarada,mesmo que seja com valore diferente
var nome2 = 'Gonçalves'; // aqui substituiu o valor "Tiago" por "Gonçalves"
console.log('linha 12:',nome2);

console.log();

const verdadeira =  true;
let nome3 = 'Tiago';
var nome2 = 'Gonçalves';

if (verdadeira){
    console.log('linha 21:',nome3, nome2); // aqui mostrou as variáveis com seus valores
}
if (verdadeira){
    let nome3 = 'Gonçalves'; // estamos criando outra variável e não reutilizando dentro do escopo de bloco
    console.log('linha 25:',nome3, nome2); // nesse caso, a variável "nome3", teve alteração de valor
}

if (verdadeira){
var nome2 = 'Cesar';
let nome3 = 'outra coisa'
}
console.log('linha 34:',nome3, nome2);// mostrou valor de "nome3", que está fora do escopo de bloco e 'nome2' que está dentro do ultimo escopo de bloco
