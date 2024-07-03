console.log('Funções em Javascript:');
//função sem parametro
function saudacao(){
console.log('Bom Dia!');
}
saudacao();
// função com parametros simples
console.log();
function saudacao1(nome){
console.log(`Bom Dia ${nome}!`);
}
saudacao1('Tiago');
saudacao1('Maria'); // posso reutilizar essa função quantas vezes quiser
 
 console.log();
function saudacao2(nome){
console.log(`Bom Dia ${nome}!`);
}
const variavel = saudacao2('Jaque');
console.log(variavel); // vai retornar undefined, não retornou nenhum valor

console.log();
function saudacao3(nome){
console.log(`Bom Dia ${nome}!`);
return 'Tudo bem?'; 
}
const variavel2 = saudacao3('Paulo');
console.log(variavel2); // aqui mostra o valor do retorno que é a pergunta "Tudo bem?"

console.log();
function saudacao4(nome){
    return `Bom dia ${nome}!
Tudo bem?
    `
}
const variavel3 = saudacao4('Clara');
console.log(variavel3); // recebe o retorno e mostra tambem o valor aa variavel3 que é Clara

console.log();
// FUNÇÃO QUE FAZ SOMA
function soma(x, y){
const resultado = x + y; // obs: em funções, não consegue mudar oque está dentro do escopo da função e so executa tudo que está antes de return
return resultado
}
console.log('linha 44:',soma(2, 2)); // faz a soma dos valores dentro dos parênteses  
console.log('linha 45:',soma(7, 2)); // faz a soma dos valores dentro dos parênteses 
console.log('linha 46:',soma(2, 8)); // faz a soma dos valores dentro dos parênteses 
console.log('linha 48:', 'Tiago', 'Gonçalves', 'Cesar'); // concatena valores

function soma1( x, y){
const resultado1 = x + y;
return resultado1
}
console.log('linha 53:',soma1());//sempre tenho que passar os valores aqui pra somar, senão mostra NaN, ou seja, não terã números pra fazer a soma


function soma2( x=8, y=1){
    const resultado2 = x + y; // passando valores para x e y
    return resultado2
    }
    console.log('linha 63:',soma2());

    console.log();
    //função anônima
    const raiz = function(n){
        return n ** 0.5                      //cria uma variável que recebe a função
    }; // nesse caso preciso terminar a função com ponto e vírgula
    console.log('linha 67:', raiz(9));
    console.log('linha 68:', raiz(16));
    console.log('linha 69:', raiz(25));

    console.log();
    //Arrow function --> um dos jeitos de fazer função mais moderno
    const raiz1 = (n) => {
        return n ** 0.5
    }
    console.log('linha 75:', raiz(9));
    console.log('linha 76:', raiz(16));
    console.log('linha 77:', raiz(25));

    console.log();
    //mais um jeito moderno da função Arrow function que simplifica o código
    const raiz2 = n => n**0.5;   
    console.log('linha 75:', raiz(9));
    console.log('linha 76:', raiz(16));
    console.log('linha 77:', raiz(25));


    //  OBS: melhor criar várias funções com código menor fazendo uma coisa expecífica doque apena uma função com código grande