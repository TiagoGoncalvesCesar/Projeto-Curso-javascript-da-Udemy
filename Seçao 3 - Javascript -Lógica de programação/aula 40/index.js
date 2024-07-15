// if, else if e else
/*
Entre 0 e 11 = Bom dia
Entre 12 e 17 = Boa tarde
Entre 18 e 23 = Boa noite

if -> pode ser utilizado sozinho
else -> Sempre que for utilizar "else", precisa ter um "if" antes
else if -> pode ser utilizado quantas vezes for necessária no sistema
else -> só pode ser utilizado  uma vez e sempre no final pra fechar a condição
 */
console.log('Exemplo 1:');
const hora = 10;
if ( hora < 12){
    console.log('Bom dia'); // estrutura de condição utilizando if
}

console.log();
console.log('Exemplo 2:');
const hora1 =30;
if (hora1 >=0 && hora1 <= 11){
    console.log('Bom dia');
} else if (hora1 >= 12 && hora1 <= 17) {              // estrutura de condição utilizando if, else if
        console.log('Boa tarde');
    } else if (hora1 >= 18 && hora1 <= 23) {
        console.log('Boa noite');
    } else  {
        console.log('A hora está errada.');
    }

    console.log();
    console.log('Exemplo 3:');
    const tenhoGrana = !true;
    if(tenhoGrana){
        console.log('Vou sair de casa.');
    }
    else{
        console.log('Não vou sair de casa,não tenho dinheiro.')
    }
