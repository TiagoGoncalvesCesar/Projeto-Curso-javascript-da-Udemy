/*Operadores Aritméticos:
+ : adição / Concatenação
- : subtração
/ : divisão
* : multiplicação
**: pontenciação
%: resto da divisão

Precedência dos operadores na contas:
1 -> () parênteses
2 -> ** potenciação
3 -> * multiplicação, / divisão, % resto da divisão
4 -> + adição, - subtração
5 -> ++ incremento, -- decremento
*/
console.log('Usando operador +:');
const num1 = 5; //number
const num2 = 10; //number
console.log('Soma =',num1 + num2);

const num3 = '5'; // string
const num4 = 10; // number
console.log('Concatenação:',num3 + num4);

console.log();
console.log('Usando operador /:')
const num5 = 5; //number
const num6 = 10;//number
console.log('Divisão:', num5 / num6);

console.log();
console.log('Usando operador *:')
const num7 = 5; //number
const num8 = 10;//number
console.log('Multiplicação:', num7 * num8);

console.log();
console.log('Usando operador /:')
const num9 = 5; //number
const num10 = 10;//number
console.log('Subtração:', num9 - num10);

console.log();
console.log('Usando operador **:')
const num11 = 5; //number
const num12 = 10;//number
console.log('Potenciação:', num11 ** num12);

console.log();
console.log('Usando operador %:')
const num13 = 5; //number
const num14 = 10;//number
console.log('Resto da divião:', num13 / num14);

console.log();
console.log('Usando + como incrementação:'); // vai acrescentando sempre mais um no valor
let contador = 1;
console.log('contador =',contador);
contador ++;
console.log('contador =',contador);
++ contador; //posso usar o sinal de + antes
console.log('contador =',contador);
++ contador;
console.log('contador =',contador);

console.log();
let contador1 = 1;
console.log('contador1 =',contador1);
contador1 ++;
console.log('contador1 =',contador1);
contador1 ++;
console.log('contador1 =',contador1);

console.log();
console.log('Usando - como decrementação:'); // vai diminúindo sempre mais um do valor
let contador2 = 10;
console.log('contador2 =',contador2);
contador2 --;
console.log('contador2 =',contador2);
-- contador2;
console.log('contador2 =',contador2);
-- contador2;
console.log('contador2 =',contador2);

console.log();
let contador3 = 10;
console.log('contador3 =',contador3);
contador3 --;
console.log('contador3 =',contador3);
contador3 --;
console.log('contador3 =',contador3);
contador3 --
console.log('contador3 =',contador3)

console.log();
console.log('Incremetando mais de 1 valor:');
const passo = 2;
let contador4 = 1;
console.log('contador4 =',contador4);
contador4 = contador4 + passo; // Incrementando mais 2
console.log('contador4 =',contador4);
contador4 = contador4 + passo;
console.log('contador4 =',contador4);
contador4 = contador4 + passo;
console.log('contador4 =',contador4);

console.log();
const passo1 = 2;
contador5 = 1;
console.log('contador5 =',contador5)
contador5 += passo1; // mesma coisa que contador4 = contador4 + passo.
console.log('contador5 =',contador5);
contador5 += passo1;
console.log('contador5 =',contador5);
contador5 += passo1;
console.log('contador5 =',contador5);

console.log();
console.log('Posso usar com outros operadores aritméticos:')
const passo2 = 2;
let contador6 = 2;
console.log('contador6 =',contador6);
contador6 *= passo2;
console.log('contador6 =',contador6);
contador6 *= passo2;
console.log('contador6 =',contador6);
contador6 *= passo2;
console.log('contador6 =',contador6);

console.log();

console.log('Uando operador de potênciação:');
let contador7 = 2;
contador7 **= 10;
console.log('contador7 =',contador7)

console.log();
console.log('Cuidade com oque coloca como valores para variáveis:');
const num15 = 10;
const num16 = 'Tiago';
let result = num15 * num16; // Resultado vai ser NaN, pq variável num16 é uma string
console.log('resultado =',result);

console.log();

const num17 = 10;
const num18 = '5';
let result1 = num17 * num18; //Resultado vai ser 50,pq ele transforma num18 que é uma String em Number(número)
console.log('resultado1 =',result1);

console.log();

console.log('Exe1:');
const num19 = 10;
const num20 = parseInt ('5');//Uso do parseInt para transformar String em Number (números inteiros)
console.log('resultado2 =' , num19 + num20);

console.log();

console.log('Exe2:');
const num21 = 10;
const num22 = parseFloat ('5.2');//Uso do parseFloat para transformar String em Number e somar números com casa decímal (números decímais)
console.log('resultado3 =' , num21 + num22);

console.log();

const num23 = 10;
const num24 = Number ('5.2');//Uso do Number para transformar String em Number (números inteiros ou decímais)
console.log('resultado4 =' , num19 + num20);




