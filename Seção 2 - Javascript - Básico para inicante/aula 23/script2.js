// Fazendo uma variável receber a outra de maneira simples

let varA = 'A'; // varA recebendo valor de varB
let varB = 'B'; // varB recebendo valor de varC
let varC = 'C'; // varC recebendoo valor de varA

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;
console.log(varA,varB,varC);
console.log(`varATemp recebe ${varA}, varA recebe ${varB}, varB recebe ${varC},`);