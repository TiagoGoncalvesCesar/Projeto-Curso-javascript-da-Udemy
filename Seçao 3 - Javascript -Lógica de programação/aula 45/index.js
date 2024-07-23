//Operação ternária

/* Operadores ternários:
Ponto de interrogação -> ? (condição)
Dois pontos -> : (valor para true(verdadeiro) ou valor para false(falso))
*/

console.log('Usando operação normal:');
const pontuacaoUsuario = 999;
if (pontuacaoUsuario >= 1000){
    console.log('Usuário Vip');
}
else{
    console.log('Usuário Normal'); 
}

console.log();

console.log('Usando operação ternária:');
const pontuacaoUsuario1 = 1000;
const nivelUsuario1 = pontuacaoUsuario1 >= 1000 ? 'Usuário Vip' : 'Usuário Normal';
console.log(nivelUsuario1)

console.log();

const pontuacaoUsuario2 = 999;
const nivelUsuario2 = pontuacaoUsuario2 >= 1000 ? 'Usuário Vip' : 'Usuário Normal';
console.log(nivelUsuario2)

console.log();
console.log('Usando operação ternárico com operador or(||)');
const pontuacaoUsuario3 = 1000;
const nivelUsuario3 = pontuacaoUsuario3 >= 1000 ? 'Usuário Vip' : 'Usuário Normal';
console.log(nivelUsuario3)
const corUsuario3 = null; //não tem cor selecionada
const corPadrao3 = corUsuario3 || 'Preta';
console.log('Níve do Usuário:',nivelUsuario3,',cor:', corPadrao3);

console.log();
const pontuacaoUsuario4 = 1000;
const nivelUsuario4 = pontuacaoUsuario4 >= 1000 ? 'Usuário Vip' : 'Usuário Normal';
console.log(nivelUsuario4)
const corUsuario4 = 'azul'; // tem cor selecionada
const corPadrao4 = corUsuario4 || 'Preta';
console.log('Níve do Usuário:',nivelUsuario4,',cor:', corPadrao4);