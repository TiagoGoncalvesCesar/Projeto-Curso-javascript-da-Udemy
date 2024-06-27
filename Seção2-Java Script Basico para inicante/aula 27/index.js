// Objeto Math
console.log('Respostas da aula 27');
let num1 = 9.54578;
let num2 = (Math.floor(num1)); // arredonda para baixo
console.log('linha 5:',num2);

 num1 = 9.54578;
 num2 = Math.ceil(num1); // arredonda para cima
console.log('linha 9:',num2);

num1 = 9.54578;
num2 = Math.round(num1); // arredonda tanto para cima ou para baixo, de acordo com oque for mais proximo
console.log('linha 13:',num2);

console.log('linha 15:',Math.max(0,5,78,63,9,115,-235,48,2,-10,168,3)); // mostra o maior número da seguência
console.log('linha 16:',Math.min(0,5,78,63,9,115,-235,48,2,-10,168,3)); // mostra o menor número da seguência

console.log('linha 18:',Math.random()); // gera números aleatórios
const aleatorio = Math.random();
console.log('linha 20:',aleatorio); // vai gerar números aleatórios


const aleatorio1 = Math.random() * (10 - 5) + 5; // gera números aleatórios entre 5 e 10
console.log('linha 24:',aleatorio1);

const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5); // gera números aleatórios entre 5 e 10 e arredonda pra cima
console.log('linha 27:',aleatorio2);

const aleatorio3 = Math.ceil(Math.random() * (10 - 5) + 5); // gera números aleatórios entre 5 e 10 e arredonda pra baixo
console.log('linha 30:',aleatorio3);

console.log('linha 32:',Math.PI); // gera valor de PI

console.log('linha 34:',Math.pow(2, 10)); // faz a potênciação de 2 elevado a 10
console.log('linha 35:',2**10);// só pra lembrar, dessa forma tambem faz a potênciação

let num3 = 9;
console.log('linha 38:',num3 ** 0.5) // gera raiz quadrada de um determinado número
console.log('linha 39:',num3 ** (1/2)); // tambem gera raiz quadrada de um número