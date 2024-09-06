// Switch/Case

console.log("Usando if/else:");
const data = new Date("1987-04-20 00:00:00");
const diaSemana = data.getDay();
let diaSemanaTexto;
if (diaSemana === 0) {
  diaSemanaTexto = "Domingo";
} else if (diaSemana === 1) {
  diaSemanaTexto = "Segunda-feira";
} else if (diaSemana === 2) {
  diaSemanaTexto = "Terça-feira";
} else if (diaSemana === 3) {
  diaSemanaTexto = "Quarta-feira";
} else if (diaSemana === 4) {
  diaSemanaTexto = "Quinta-feira";
} else if (diaSemana === 5) {
  diaSemanaTexto = "Sexta-feira";
} else if (diaSemana === 6) {
  diaSemanaTexto = "Sábado";
} else {
  diaSemanaTexto = "Dia inválido";
}

console.log("linha 25:", diaSemana, diaSemanaTexto);

console.log();

console.log("Usando switch/case:");
const data1 = new Date("1987-04-20 00:00:00");
const diaSemana1 = data1.getDay();
let diaSemanaTexto1;
switch (diaSemana1) {
  case 0:
    diaSemanaTexto1 = "Domingo";
    break;
  case 1:
    diaSemanaTexto1 = "Segunda-feira";
    break;
  case 2:
    diaSemanaTexto1 = "Terça-feira";
    break;
  case 3:
    diaSemanaTexto1 = "Quarta-feira";
    break;
  case 4:
    diaSemanaTexto1 = "Quinta-feira";
    break;

  case 5:
    diaSemanaTexto1 = "Sexta-feira";
    break;
  case 6:
    diaSemanaTexto1 = "Sábado";
    break;
  default:
    diaSemana1 = "Dia inválido";
    break;
}
console.log("linha 59:", diaSemana1, diaSemanaTexto1);

console.log();

function getDiaSemanaTexto(diaSemana2) {
  let diaSemanaTexto2;

  switch (diaSemana2) {
    case 0:
      diaSemanaTexto2 = "Domingo";
      return diaSemanaTexto2;
    case 1:
      diaSemanaTexto2 = "Segunda-feira";
      return diaSemanaTexto2;
    case 2:
      diaSemanaTexto2 = "Terça-feira";
      return diaSemanaTexto2;
    case 3:
      diaSemanaTexto2 = "Quarta-feira";
      return diaSemanaTexto2;
    case 4:
      diaSemanaTexto2 = "Quinta-feira";
      return diaSemanaTexto2;
    case 5:
      diaSemanaTexto2 = "Sexta-feira";
      return diaSemanaTexto2;
    case 6:
      diaSemanaTexto2 = "Sábado";
      return diaSemanaTexto2;
    default:
      diaSemana2 = "Dia inválido";
      return diaSemanaTexto2;
  }
}
const data2 = new Date("1987-04-20 00:00:00");
const diaSemana2 = data2.getDay();
const diaSemanaTexto2 = getDiaSemanaTexto(diaSemana2);
console.log('linha 97:',diaSemana2, diaSemanaTexto2);