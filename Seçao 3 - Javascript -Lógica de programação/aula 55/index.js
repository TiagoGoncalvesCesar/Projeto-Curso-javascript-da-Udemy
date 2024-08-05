// Aula For in

// FOR IN lê os índices  ou chaves dos objetos

//                 0       1       2
const frutas = ['Pera', 'Maçã', 'Uva'];

console.log('Usando FOR normal:');
for (let i = 0; i < frutas.length;i++){  // mostrando as frutas com FOR normal
    console.log(frutas[i]);
   
}

console.log();
console.log('Usando FOR IN:');   // mostrando as frutas com FOR IN
for (let i in frutas){
    console.log(frutas[i]);    
}

console.log();
for (let i in frutas){   // mostrando apenas os índices
    console.log(i);    
}

console.log();
console.log('Usando FOR IN com ojeto:');
const pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Silva',
   idade: 35
};

for (let i in pessoa){
console.log(i);
}

console.log();
console.log('Jeitos de mostrar o objeto:')
console.log('Nome:',pessoa.nome, 'Sobrenome:',pessoa.sobrenome, 'Idade:',pessoa.idade); // sem array
console.log('Nome:',pessoa['nome'], 'Sobrenome',pessoa['sobrenome'], 'Idade:',pessoa['idade']); // com array

console.log();
const pessoa1 = {
    nome: 'Manoel',
    sobrenome: 'Rosa',
   idade: 36
};
for (let chave in pessoa1){
    console.log(chave, pessoa1[chave]);
}
