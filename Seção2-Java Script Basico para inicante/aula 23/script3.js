// Fazendo uma variável receber a outra de maneira moderna
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA,varB,varC);
console.log(`varA recebe ${varA}, varB recebe ${varB}, varC recebe ${varC}`);