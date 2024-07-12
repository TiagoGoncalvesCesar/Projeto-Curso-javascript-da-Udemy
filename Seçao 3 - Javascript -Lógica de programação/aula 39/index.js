// Avaliação de Curto-Circuito (Short Circuit)

/*
&& -> false && true = false  no momento que encontra false, faz a avaliação curto-circuito e para toda verificação da expressão
|| -> 

Valores falsos em javascript:
0 -> zero
*false -> falso
' ' -> aspas simples vazia
" " -> aspas duplas vazia
` ` -> clase vazio
null / undefined
NaN
 */

console.log('Operador And(&):')
const verificador = ('Tiago' && 0 && 'Jaque');
console.log('linha 19:',verificador); // o operador and retorna valor 0

const verificador1 = ('Tiago' && true && 'Jaque');
console.log('linha 22:',verificador1); // o operador and retorna a ultima expressão porque são todas true(verdadeiro)

const verificador2 = ('Tiago' && true && NaN);
console.log('linha 25:', verificador2); // retorna a expressão NaN, que é a expressão false(falso)

const verificador3 = ('Tiago' && '' && 'Jaque');
console.log('linha 28:',verificador3); // verifica as expressões,como aspas simples vazia é false, para a verificação e retorna ela

const verificador4 = ('Tiago' && undefined && 'Jaque');
console.log('linha 31:',verificador4); // retorna undefined

console.log();

console.log('Operador OR(||):')

const verificador5 = (0 || false || null || 'Tiago' || true);
console.log('linha 38:',verificador5); // retorna "Tiago", porque OR precisa de uma unica expressão verdadeira para que ele retorne o valor verdadeiro 

console.log();

const corUsuario = null;
const corPadrao = corUsuario || 'preto'; // retorna preto para o usuário
console.log('linha44:',corPadrao);

console.log();

const corUsuario1 = 'vermelho';
const corPadrao1 = corUsuario1 || 'preto';
console.log('linha50:',corPadrao1); // usuário selecionou a cor "vermelho", então "vermelho" sendo uma expressão true(verdadeiro), mostra no console "vermelho"

console.log();

const a = 0;
const b = null;
const c = 'false'; 
const d = false;
const e = NaN;
console.log('linha 59:',a || b || c || d || e);// retornar o valor da variável c,proque "false" está dentro de aspas simples,contêm valor e se torna true(verdadeiro)

console.log();
const a1 = 0;
const b1 = null;
const c1 = false; 
const d1 = false;
const e1 = NaN;
console.log('linha 67:',a1 || b1 || c1 || d1 || e1); // retorna o último valor (NaN), porque todas variáveis estão com valor false(falso), nesse caso retorna sempre o ultimo valor

console.log();
const a2 = 0;
const b2 = null;
const c2 = false; 
const d2 = false;
const e2 = NaN;
console.log('linha 75:',a || b || 'Tiago' || c || d || e); // retorna 'Tiago', porque nesse caso no console tem uma String que é um valor true(verdadeiro) 

console.log();
function falaOi(){
return 'oi';
}                            // exemplo de curto-circuito, a variável tem valor false,retorna false
const vaiExecutar = false;
console.log('linha 82:',vaiExecutar && falaOi());

console.log();
console.log();
function falaOi(){
return 'oi';
}                            // exemplo de curto-circuito, a variável não tem valor, retorna undefined
let vaiExecutar1 ;
console.log('linha 90:',vaiExecutar1 && falaOi());

console.log();
console.log();
function falaOi(){
return 'oi';
}                            // exemplo de curto-circuito, a variável tem valor 'Tiago', nesse caso retorna oi
const vaiExecutar2 = 'Tiago';
console.log('linha 98:',vaiExecutar2 && falaOi());