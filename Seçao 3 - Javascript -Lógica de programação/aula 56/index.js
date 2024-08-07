// FOR CLÁSSICO ->  geralmente usado com interáveis ( utiliza com arrays ou Strings).
// FOR IN->  Retorna índice ou chave ( utiliza com arrays, Strings ou objetos).
// FOR OF -> Retorna o valor em si (utliza com interáveis, arrays ou Strings).


// For of - Estrutura de repetição

console.log('Usando FOR clássico:');
 //           01234567891011
const nome = 'André Silva';
for( let i = 0; i < nome.length;i++){
    console.log(nome[i]);
}

console.log();

console.log('Usando FOR IN:');
for( let i in nome){
    console.log(nome[i]);
}

console.log();

console.log('Usando FOR OF:');
for (let valor of nome){
    console.log(valor);
}

console.log();

console.log('Usando FOR OF com array:')
const nome1 = ['Tiago', 'Paulo', 'José'];
for (let valor of nome1){
    console.log(valor);
}

console.log();

console.log('Usando FOR EACH:');
nome1.forEach(function(valor){    // mostrando valor
    console.log(valor);
    })

console.log();

nome1.forEach(function(valor, indice){    // mostrando valor e índices
console.log(valor, indice);
})

console.log();

nome1.forEach(function(valor, indice, array){    // mostrando valor, índices e array
    console.log(valor, indice, array);
    })