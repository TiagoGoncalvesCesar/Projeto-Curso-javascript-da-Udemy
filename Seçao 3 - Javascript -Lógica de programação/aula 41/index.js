console.log('Parte 2: if, else if e else');
// Se  (condição if) ocorrer, faça isso {executa o código que ta dentro das chaves referente a condição if}
// Se (condição else) ocorrer, faça isso {executa o código que ta dentro das chaves referente a condição else}

console.log('Exemplo 1:');
const numero = 10;
if (numero >= 0){                                                 // está atendendo a essa condição 
    console.log('Sim, esse número é maior ou igual a zero.');
}

console.log();
console.log('Exemplo 2:');
const numero1 = 10;
if (numero1 >= 0 && numero1 <= 5){                // não atendeu as condições executa o else
    console.log('O número está entre 0 e 5.');
}
else {
    console.log('O número não esta entre 0 e 5.');
}

console.log();
console.log('Exemplo 3:');
const numero2 = 5;
if (numero2 >= 0 && numero2 <= 5){               // atendeu as duas condições, executa o if
    console.log('O número está entre 0 e 5.');
}
else {
    console.log('O número não esta entre 0 e 5.');
}

console.log();
console.log('Exemplo 4:');
const numero3 = 10;
if (numero3 >= 0 && numero3 <= 5){               // atendeu as duas condições, executa o if
    console.log('O número está entre 0 e 5.');
}
else if (numero3 >= 6 && numero3 <= 8) {
    console.log('O número esta entre 6 e 8.');
}
else if (numero3 >= 9 && numero3 <=11){                    //  O número está entre 9 e 11, executa esse else if e para nessa linha a execução do código
    console.log('O número está entre 9 e 11.');
}
else {
    console.log('O número não esta entre 0 e 11');
}

console.log();
console.log('Exemplo 5:');
const numero4 = 10;
if ( numero4 >= 8 && numero4 <= 11){
    console.log('O número está entre 8 e 11');
}
if (numero4 >= 0 && numero4 <= 5){               // atendeu as duas condições, executa o if
    console.log('O número está entre 0 e 5.');
}
else if (numero4 >= 6 && numero4 <= 8) {
    console.log('O número esta entre 6 e 8.');
}
else if (numero4 >= 9 && numero4 <=11){                    //  O número está entre 8 e 11 e tambem está entre 9 e 11, executa o primeiro "if", executa o segundo "else if" e para nessa linha a execução do código
    console.log('O número está entre 9 e 11.');
}
else {
    console.log('O número não esta entre 0 e 11');
}
