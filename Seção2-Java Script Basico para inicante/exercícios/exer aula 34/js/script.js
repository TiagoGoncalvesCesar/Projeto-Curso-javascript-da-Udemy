function meuEscopo(){
   const form = document.querySelector('.form'); 
   const resultado  = document.querySelector('.Resultado');

   const pessoas = [];

   function recebeEventoForm(evento){
    evento.preventDefault();

    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

   pessoas.push({
    nome: nome.value,
    sobrenome:  sobrenome.value,
    peso: peso.value,
    altura: altura.value
   });

   console.log(pessoas);

   resultado.innerHTML += `<p>Nome:${nome.value}<br> 
   Sobrenome:${sobrenome.value}<br> 
   Peso:${peso.value} kg <br>
   Altura:${altura.value}</p>`;
   }
     form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();





/* exemplo de como cancelar o envio de formulário ao clicar em "Enviar"
   form.onsubmit = function(evento){
    evento.preventDefault();
     alert(1);
     console.log('Foi enviado');
   };*/