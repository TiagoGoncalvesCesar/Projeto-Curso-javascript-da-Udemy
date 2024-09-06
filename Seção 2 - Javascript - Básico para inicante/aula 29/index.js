// Aula de Arrays
// indexação de strings  
//           01234  cada letra tem uma posiçao
const nome ='Tiago';
console.log('linha 5:',nome);
console.log('linha 6:',nome[2]);
//indexação de arrays
//                 0       1        2  cada palavra tem uma posição
const alunos = ['Luis', 'Maria', 'João'];
console.log('linha 10',alunos.length); // para saber o tamanho do array
console.log('linha 11:',alunos);
console.log('linha 12:',alunos[0]);
console.log('linha 13:',alunos[1]);
console.log('linha 14:',alunos[2]);
alunos[0] = 'Eduardo'; // faz a alteração e substitui nome Luis por Eduardo
console.log('linha 16:',alunos);
alunos[3] = 'Luiza'; // aumenta mais uma posição na lista do array
console.log('linha 17:' ,alunos); 
alunos[alunos.length] = 'jaqueline'; // adiciona posição no fim do array passando a string dentro
console.log('linha 20:',alunos);
alunos.push('Fabio'); // tambem adiciona  posição nom fim do array passando a string dentro
console.log('linha 22:',alunos);
alunos.unshift('Antônio'); // adiciona posição no início do array passando nome dentro
console.log('linha 24:',JSON.stringify(alunos));
alunos.unshift('Paulo'); // adiciona posição no início do array passando nome dentro e usei JSON.stringify para alinhar os nomes na mesma linha
console.log('linha 26:',JSON.stringify(alunos)); // adiconou mais um nome no inicio do array e colocou na posição zero e tambem usei JSON.stringify para alinhar os nomes na mesma linha
alunos.pop();
console.log('linha 28:',JSON.stringify(alunos)); // exclui o ultimo nome do array
console.log('linha 29:',JSON.stringify(alunos[3])); //mostra apenas o nome que está na posição dentro do array que no caso é posição 3 com nome "Maria"
const removidos = alunos.pop();
console.log('linha 31:',removidos); // mostra o nome removido que está no ultimo array
console.log('linha 32:',alunos); // mostra todos nomes em cada array  sem o nome removido, que no caso foi "Jaqueline" que está na posição 6
const primeiroRemovido = alunos.shift(); // remove o primeiro nome do array
console.log('linha 34',alunos);
delete alunos[1]; // deleta o nome do indíce e deixa em branco o indíce
console.log('linha 36:',alunos);
console.log('linha 37:',alunos[50]); // mostra undefined porque não existe o indíce 50 com algum valor dentro
console.log('linha 38:',alunos);
alunos.push('Ana','Paula'); // adicionando Ana e Paula com push
console.log('linha 40:',alunos.slice(3, 5)); // pega os nome dentro dos indíces 3 ao 5
console.log('linha 41',alunos);
console.log('linha 42:',alunos.slice(0, -3)); //mostra os indíces de 0 a 4 excluindo os 2 ultimos indíces
console.log('linha 43:',typeof alunos); // mostra que array em javascript é considerado objeto
console.log('linha 44:',alunos instanceof Array); // mostra se é ou não um array, nesse caso vai mostrar true porque é um array
let alunos1 = ['Maria', 'João', 'Pedro'];
alunos1 = 123;
console.log('linha 47:',alunos1 instanceof Array); // vai mostrar false porque alunos1 deixou de ser um array e passou ter valor 123 que um NUMBER



