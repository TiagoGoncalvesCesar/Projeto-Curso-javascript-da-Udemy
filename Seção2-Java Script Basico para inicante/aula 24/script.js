let umaString = 'Um "texto"com aspas dupla dentro de aspas simples.'; // Posso usar aspas simples dentro de aspas dupla
console.log(umaString);
console.log();
let umaString2 = "Um \"texto\"com aspas dupla dentro de aspas duplas." //Usa barra invertida para colocar a palavra entre aspas, mas uso não recomendado
console.log(umaString2);
console.log();
//caractere indexado
//                01234567
let umaString3 = 'Um texto';
let uma = 'em um lindo dia';
console.log('Resposta da linha 11:',umaString3[4]);//Vai mostrar apenas a letra (e) que está na posiçao 4
console.log('Resposta da linha 12:',umaString3[6]);//Vai mostrar apenas a letra (t) que está na posiçao 6
console.log('Resposta da linha 13:',umaString3[8]);//Vai mostrar apenas undefined pq a posiçao 8 não existe ou não tem valor nela
console.log('Resposta da linha 14:',umaString3[-1]);//Vai mostrar apenas undefined pq a posiçao -1 não existe ou não tem valor nela
console.log('Resposta da linha 15:',umaString3.charAt(7));//Uso da função charAt.
console.log('Resposta da linha 16:',umaString3.charAt());//Uso da função charAt fora do indíce mostra valor vazio.
console.log('Resposta da linha 17:',umaString3.concat('', ' em',' ', 'um lindo',' ', 'dia.'));//Uso da função concat concatenação
console.log('Resposta da linha 18:',umaString3.concat(' em um lindo dia.'));//Uso da função concat
console.log('Resposta da linha 11:',umaString3 + ' em um lindo dia.');//Outra forma de concatenação
console.log(`Resposta da linha 20:${umaString3} em um lindo dia.`);//Uso da função template string,forma mais usada
console.log(`Resposta da linha 21:${umaString3} ${uma}`);// Usando mais de uma template
console.log('Resposta da linha 22:',umaString3.indexOf('texto')); //Usando indexof para saber o primeiro indíce da palavra texto
console.log('Resposta da linha 23:',umaString3.indexOf('o', 3));// Buscando a letra correspondente (o) apartir do indíce 3
console.log('Resposta da linha 24:',umaString3.lastIndexOf('x')); // Busca o indíce de trás para frente na string
console.log('Resposta da linha 25:',umaString3.match(/[a-z]/g)); //Retorna todas letras minúscula da string
console.log('Resposta da linha 26:',umaString3.search(/x/)); // Funciona parecido com indexOf,encontra a letra correspondente ao indíce
console.log('Resposta da linha 27:',umaString3.replace('Um', 'Outro'));// Substitui uma palavra por outra palavra
console.log('Resposta da linha 28:',umaString3.replace(/Um/, 'Outro'));// Tambem substitui uma palavra por outra palavra

console.log();
//                0123456789             
let umaString4 = 'O rato roeu a roupa do rei de roma.';
console.log('Resposta da linha 33:',umaString4);
console.log('Resposta da linha 34:',umaString4.replace(/r/, '#')); // O replace trocou a primeira letra r por #
console.log('Resposta da linha 35:',umaString4.replace(/r/g, '#')); // O replace trocou todas letras r por #
console.log('Qual tamnaho dessa string?',umaString4.length,'indíces'); // O length é usado para saber o tamanho da string
console.log('Pegando a palavra rato da string no indice 2 a 6: ',umaString4.slice(2, 6));// Slice pega a letra ou palavra denrto do indíce indicado
console.log('Resposta da linha 38:',umaString4.slice(-3));//Mostrou os 3 ultimos indíce que são "ma."
console.log('Resposta da linha 39:',umaString4.length - 3);//Mostra a quantidade de indíces dimínuindo a quantidade desejada, 35 indíces menos 3 indíces
console.log('Resposta da linha 40:',umaString4.slice(-5, umaString4.length -1)); //Mostra apenas a palavra roma da string
console.log('Resposta da linha 41:',umaString4.slice(-5, -1)); // Tambem mostra apenas a palvra roma da string
console.log('Resposta da linha 42:',umaString4.substring(umaString4.length - 5, umaString4.length - 1)); //Outra forma de mostrar apenas a palavra roma
console.log('Resposta da linha 43:',umaString4.substring(umaString4.length -5)); //Mostra "roma.", ou seja, vai até o final da string 
console.log('Resposta da linha 44:',umaString4.split(' ')); //Coloca cada palavra dentro de aspas simples, com espaços entre elas e dentro de um array
console.log('Resposta da linha 45:',umaString4.split('r')); //Coloca cada palavra dentro de aspas simples, com espaços entre elas e dentro de um array e mostra a string sem a letra que está no split
console.log('Resposta da linha 46:',umaString4.split(' ',2)); // Coloca cada palavra dentro de aspas simples, com espaços entre elas e dentro de um array e limita to tamanho da string
console.log('Resposta da linha 47:',umaString4.toUpperCase());// Coloca toda string em letras maiúscula
console.log('Resposta da linha 48:',umaString4.toLowerCase()); // Coloca toda string em letras minúscula


/* site para ver documentação de javascript:
https://developer.mozilla.org/pt-BR/
 https://www.w3schools.com/js/ */
