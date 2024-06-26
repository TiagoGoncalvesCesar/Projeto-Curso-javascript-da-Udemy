// Objeto Math
let num1 = 9.54578;
let num2 = Math.floor(num1); // arredonda para baixo
console.log(num2);

 num1 = 9.54578;
 num2 = Math.ceil(num1); // arredonda para cima
console.log(num2);

num1 = 9.54578;
num2 = Math.round(num1); // arredonda tanto para cima ou para baixo, de acordo com oque for mais proximo
console.log(num2);

console.log(Math.max(0,5,78,63,9,115,-235,48,2,-10,168,3)); // mostra o maior número da seguência
console.log(Math.min(0,5,78,63,9,115,-235,48,2,-10,168,3)); // mostra o menor número da seguência

console.log(Math.random()); // gera números aleatórios
const aleatorio = Math.random();
console.log(aleatorio); // vai gerar números aleatórios


const aleatorio1 = Math.random() * (10 - 5) + 5; // gera números aleatórios entre 5 e 10
console.log(aleatorio1);

const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5); // gera números aleatórios entre 5 e 10 e arredonda pra cima
console.log(aleatorio2);

const aleatorio3 = Math.ceil(Math.random() * (10 - 5) + 5); // gera números aleatórios entre 5 e 10 e arredonda pra baixo
console.log(aleatorio3);

console.log(Math.PI); // gera valor de PI

console.log(Math.pow(2, 10)); // faz a potênciação de 2 elevado a 10
console.log(2**10);// só pra lembrar, dessa forma tambem faz a potênciação

let num3 = 9;
console.log(num3 ** 0.5) // gera raiz quadrada de um determinado número
console.log(num3 ** (1/2)); // tambem gera raiz quadrada de um número