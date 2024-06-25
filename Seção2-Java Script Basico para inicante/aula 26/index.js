//Padrão que o javascript segue para precisão dos numeros --> IEEE 754-2008
console.log('Mostrando e corrigindo as imprecisões do javascript:');
let num1 = 1; // number
let num2 = 2.5; // number
let num3 = 5
// num1 = num1.toString; altera num1 de number para string em definitivo
console.log(num1 + num2); // vai fazer a soma dos números
console.log(num1 + num2);// converte num1 para string e concatena num1 e num2 dando resultado 12.5
console.log(num1.toString() + (num2 + num3)); // faz conta entre num2 e num3 primeiro e concatena o resultado com num1

console.log();
let num4 = 1500;
console.log(num4.toString(2)); // tranforma num3 em binário
let num5 = 10.5789551255547
console.log(num5.toFixed(2)); // arredonda e define quantas casas decímais quero depois da vírgula
let num6 = 100;
console.log(Number.isInteger(num6)); // vai mostrar se é num5 é inteiro(true) ou não
let num7 = 100.5;
console.log(Number.isInteger(num7)); // vai mostrar se é num5 é inteiro ou não(false)

console.log();
let num8 = 10.25;
let temp = num8 * 'Olá'; //não tem como multiplicar, resultado vai ser NaN
console.log(temp);
console.log(Number.isNaN(temp)); //retorna true porque é um NaN
let temp1 = num8 * '5';
console.log(Number.isNaN(temp1)); //retorna false porque não é um NaN

console.log();
let num9 = 0.7;
let num10 = 0.1;
console.log(num9 + num10); // dá uma pequena imprecisão no resultado
num9 += num10; // resultado seria 0.8
num9 += num10; // resultado seria 0.9
num9 += num10; // resultado seria 1.0
console.log(num9);
num9 = num9.toFixed(2);
console.log(num9);
console.log(Number.isInteger(num9)); // como não tem o valor 1.00 e sim 0.99 em num9,dá false(falso)
console.log(Number.isInteger(1.00)); // aqui ja tem o valor 1.00, da true(verdadeiro)

console.log();
let num11 = 0.7;
let num12 = 0.1;
console.log(num11 + num12); // dá uma pequena imprecisão no resultado
num11 += num12; // resultado seria 0.8
num11 += num12; // resultado seria 0.9
num11 += num12; // resultado seria 1.0
console.log(num11);
num11 = parseFloat(num11.toFixed(2));// posso usar NUMBER no lugar do parseFloat que tambem resolve
console.log(num11);
console.log(Number.isInteger(num11)); // aqui tem o valor 1 em num11,mostra true(verdadeiro)

console.log();
let num13 = 0.7
let num14 = 0.1
num13 = ((num13 * 100) + (num14 * 100)) / 100; // resultado é 0.8, jeito mais facil de resolver a imprecisão
num13 = ((num13 * 100) + (num14 * 100)) / 100;
num13 = ((num13 * 100) + (num14 * 100)) / 100;
console.log(num11);
console.log(Number.isInteger(num11)); // deu true e resolve a imprecisão





