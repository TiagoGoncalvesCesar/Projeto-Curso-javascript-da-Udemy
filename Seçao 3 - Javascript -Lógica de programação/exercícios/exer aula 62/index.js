// Escreva uma função que recebe um numero e
// retorne o seguinte:
// Número divísivel por 3  = Fizz
// Número divísivel por 5 = Buzz
// Número divísivel por 3 e 5 = FizzBuzz
// Número NÃO divísivel por 3 e 5 = Retorna o próprio número
//  Checar se o número é realmente número
// Use a Função com números de 0 a 100

function fizzBuzz(num) {
  if (typeof num !== "number") return num;
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

console.log('a', fizzBuzz('a'));
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
