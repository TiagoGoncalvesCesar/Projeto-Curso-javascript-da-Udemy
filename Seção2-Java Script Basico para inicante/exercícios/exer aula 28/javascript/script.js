const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto'); // nunca pode ter mais de um Id com mesmo nome, ex:texto

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu numero é ${numero}.`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.`;
texto.innerHTML += `<p>Arredondando pra baixo: ${Math.floor(numero)}.`;
texto.innerHTML += `<p>Arredondando pra cima: ${Math.ceil(numero)}.`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.`;
