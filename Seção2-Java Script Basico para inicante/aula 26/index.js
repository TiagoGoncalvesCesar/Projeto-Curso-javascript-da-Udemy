//Padrão que o javascript segue para precisão dos numeros --> IEEE 754-2008
console.log('Respostas da aula 26');
console.log('Mostrando e corrigindo as imprecisões do javascript:');
let num1 = 1; // number
let num2 = 2.5; // number
let num3 = 5;
// num1 = num1.toString; altera num1 de number para string em definitivo
console.log('linha 8:',num1 + num2); // vai fazer a soma dos números
console.log('linha 9:',num1 + num2);// converte num1 para string e concatena num1 e num2 dando resultado 12.5
console.log('linha 10:',num1.toString() + (num2 + num3)); // faz conta entre num2 e num3 primeiro e concatena o resultado com num1

console.log();
let num4 = 1500;
console.log('linha 14:',num4.toString(2)); // tranforma num3 em binário
let num5 = 10.5789551255547
console.log('linha 16:',num5.toFixed(2)); // arredonda e define quantas casas decímais quero depois da vírgula
let num6 = 100;
console.log('linha 18:',Number.isInteger(num6)); // vai mostrar se é num5 é inteiro(true) ou não
let num7 = 100.5;
console.log('linha 20:',Number.isInteger(num7)); // vai mostrar se é num5 é inteiro ou não(false)

console.log();
let num8 = 10.25;
let temp = num8 * 'Olá'; //não tem como multiplicar, resultado vai ser NaN
console.log('linha 25:',temp);
console.log('linha 26:',Number.isNaN(temp)); //retorna true porque é um NaN
let temp1 = num8 * '5';
console.log('linha 28:',Number.isNaN(temp1)); //retorna false porque não é um NaN

console.log();
let num9 = 0.7;
let num10 = 0.1;
console.log('linha 33:',num9 + num10); // dá uma pequena imprecisão no resultado
num9 += num10; // resultado seria 0.8
num9 += num10; // resultado seria 0.9
num9 += num10; // resultado seria 1.0
console.log('linha 37:',num9);
num9 = num9.toFixed(2);
console.log('linha 39:',num9);
console.log('linha 40:',Number.isInteger(num9)); // como não tem o valor 1.00 e sim 0.99 em num9,dá false(falso)
console.log('linha 41:',Number.isInteger(1.00)); // aqui ja tem o valor 1.00, da true(verdadeiro)

console.log();
let num11 = 0.7;
let num12 = 0.1;
console.log('linha 46:',num11 + num12); // dá uma pequena imprecisão no resultado
num11 += num12; // resultado seria 0.8
num11 += num12; // resultado seria 0.9
num11 += num12; // resultado seria 1.0
console.log('linha 50:',num11);
num11 = parseFloat(num11.toFixed(2));// posso usar NUMBER no lugar do parseFloat que tambem resolve
console.log('linha 52:',num11);
console.log('linha 53:',Number.isInteger(num11)); // aqui tem o valor 1 em num11,mostra true(verdadeiro)

console.log();
let num13 = 0.7
let num14 = 0.1
num13 = ('linha 58:',(num13 * 100) + (num14 * 100)) / 100; // resultado é 0.8, jeito mais facil de resolver a imprecisão
num13 = ('linha 59:',(num13 * 100) + (num14 * 100)) / 100;
num13 = ('linha 60:',(num13 * 100) + (num14 * 100)) / 100;
console.log('linha 61:',num11);
console.log('linha 62:',Number.isInteger(num11)); // deu true e resolve a imprecisão

console.log();
let num15 = 100;
console.log('linha 66:',num15 / 0); // essa conta em outras linguagens daria erro,mas em javascripit não da erro 
console.log('linha 67:',Number.isInteger(num15)); //deu verdadeiro(true)

console.log();
let num16 = 100;
console.log('linha 71:',num16 / 0.000000001); 
console.log('linha 72:',Number.isInteger(num15)); //deu verdadeiro(true)

console.log();
let num17 = 100;
console.log('linha 76:',num17 / 0.000000000000000000000000000000000000001); // quanto mais zeros num17 for dividido,vai chegar um ponto que vai aparecer Infinity
console.log('linha 77:',Number.isInteger(num17)); //deu verdadeiro(true)






