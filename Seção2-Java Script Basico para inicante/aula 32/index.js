//Objetos(Básicos)
console.log('Com varíaveis constante:')
const array = [1, 2, 3]; // dentro do array das variáveis constantes posso mudar valor de cada indice, ex:mudar o número "1" na posição 0 pela String 'Tiago'
array.push(4);
array[0] = 'Tiago';
//array = 'Pedro'; não aceita mudar o valor da variável constante, não pode reatribuir valores
console.log('linha 7:',array);//muda o valor do indíce 0 passando de "1" para "Tiago"

console.log();
console.log("Com varíaveis let:")
let array1 = [1, 2, 3]; 
array1.push(4);
array1[0] = 'Tiago';
console.log('linha 14:',array1) //muda o valor do indíce 0 passando de "1" para "Tiago"
array1 = 'Pedro'; //usando variaves do tipo let,aceita mudar o valor da variável 
console.log('linha 16:',array1);

console.log();
/*const nome01 = 'Tiago';
const sobreNome01 = 'Gonçalves';
const idade01 = '39 anos';

const nome02 = 'Paulo';
const sobreNome02 = 'Silva';
const idade02 = '35 anos';*/
console.log('Criando um objeto:');
const pessoa1 = {
    nome : 'Tiago',
    sobreNome: 'Gonçalves',   //criando atributos dentro de pessoa1
    idade: '39 anos'
}
console.log('Pessoa1:');
console.log('Nome:',pessoa1.nome);
console.log('Sobre nome:',pessoa1.sobreNome);
console.log('Idade:',pessoa1.idade);

console.log();
const pessoa2 = {
    nome : 'Paulo',
    sobreNome: 'Silva',   //criando atributos dentro de pessoa1
    idade: '35 anos'
}
console.log('Pessoa2:');
console.log('Nome:',pessoa2.nome);
console.log('Sobre nome:',pessoa2.sobreNome);
console.log('Idade:',pessoa2.idade);

console.log();
console.log('Usando function pra criar pessoas:');
function criaPessoa (nome, sobrenome, idade){
return{nome,sobrenome,idade};
}
const pessoa3 = criaPessoa('Tiago','Gonçalves', '39 anos');
const pessoa4 = criaPessoa('Paulo','Silva', '35 anos');
const pessoa5 = criaPessoa('Ana','Ferreira', '333 anos');
const pessoa6 = criaPessoa('Pedro','Rosa', '29 anos');
const pessoa7 = criaPessoa('José','Pereira', '53 anos');
console.log(pessoa3.nome,pessoa3.sobrenome,pessoa3.idade);
console.log(pessoa5.sobrenome);
console.log(pessoa6.nome);

console.log();
const pessoa8 = {
nome:'André',
sobrenome: 'Martins',
idade: '25 anos',

fala(){
    console.log(`Meu nome é'${this.nome} ${this.sobrenome} `)
},
incrementaIdade(){
    console.log(`e tenho ${this.idade}.`)
}
};
pessoa8.fala();
pessoa8.incrementaIdade();