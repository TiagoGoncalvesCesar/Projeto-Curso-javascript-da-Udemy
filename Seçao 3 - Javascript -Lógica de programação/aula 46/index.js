/* Obejto Date
MDN web docs

Obs: Em javascript, primeiro mês do ano é contado aparti do 0:
exemplo mês:
0 -> janeiro
1 -> fevereiro
2 -> março
3 -> abril ... e assim sucessivamente

Obs: Em javascript, primeiro dia da semana é contado apartir do 0:
exemplo dia da semana:
0 -> domingo
1 -> segunda-feira
2 -> terça-feira
3 -> quarta-feira
4 -> quinta-feira
5 -> sexta-feira
6 -> sábado
*/

const data = new Date();
console.log('linha 23:',data);
console.log('linha 24:',data.toString());

console.log();
const data1 = new Date(0); // 01/01/1979 Timestamp ou época unix
console.log('linha 28:',data1);

console.log();
const data2 = new Date(-1);
console.log('linha 32:',data2);

console.log();
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data3 = new Date(0  + tresHoras + umDia);
console.log('linha 38:',data3.toString());

console.log();
const data4 = new Date(2019, 3, 20, 15, 14, 27, 500); // ano, mês, dia, hora, minuto, segundo, milésimo de segundo
console.log('linha 42:',data4);

console.log();
const data5 = new Date('2019-04-20 20:20:59'); // mostra a data digitada na String
console.log('linha 46:',data5);

console.log();
const data6 = new Date('20-04-2019 20:20:59'); // Sempre colocar na ordem -> ano, mês, dia ... para não ter data inválida
console.log('linha 50:',data6);

console.log();
const data7 = new Date('1985-03-08 19:35:45');
console.log('Dia:',data7.getDate()); // mostrando dia
console.log('Mês:',data7.getMonth()); // mostrando mês,lembrando que a contagem de mês em javascript começa em 0 com relaidade javscript
console.log('Mês:',data7.getMonth() + 1); //soma mais um mês para ficar mais realista com nossa realidade de calendário no Brasil
console.log('Ano:',data7.getFullYear()); // mostrando ano
console.log('Hora:',data7.getHours()); // mostrando a hora
console.log('Minuto:',data7.getMinutes()); // mostrando minuto
console.log('Segundo:',data7.getSeconds()); // mostrando segundo
console.log('Dia da Semana:',data7.getDay()); // Em javascript, dia da semana começa apartir do 0 com realidade javascript
console.log('Dia da semana:',data7.getDay() +1);  //soma mais um dia para ficar mais realista com nossa realidade de calendário no Brasil
console.log('linha 63:',Date.now()); // mostra os milésimos de segundo desde 1970 até dos dias atuais

console.log();
const data8 = new Date(1721777442437); // os milésimos de segundo dentro dos parênteses mostram a Data referente a eles
console.log('linha 67:',data8);
