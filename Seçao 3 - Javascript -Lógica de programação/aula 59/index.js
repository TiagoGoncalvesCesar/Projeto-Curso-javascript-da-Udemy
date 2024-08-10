//  Break e Continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros ){
    console.log(numero);
}

console.log();
console.log('Usando CONTINUE com FOR:');
for (let numero of numeros ){
    if (numero === 2){               // pulando número 2 usando continue
        continue
    }
    console.log(numero);
}

console.log();
for (let numero of numeros ){
    if (numero === 2){               // pulando número 2 e 5 usando continue com dois ifs
        continue
    }
    if (numero === 5){
        continue
    }
    console.log(numero);
}

console.log();
for (let numero of numeros ){
    if (numero === 3 || numero === 4){               // pulando número 3 e número 4 usando continue
        continue
    }
    console.log(numero);
}

console.log();
console.log('Usando CONTINUE em Strings com FOR:');
const nomes = ['Tiago', 'Jaque','José', 'João', 'Paulo'];
for (let nome of nomes){
    console.log(nome);
}

console.log();

for (let nome of nomes){
    if (nome === 'José'){    // usando CONTINUE em Strings para pular nome "José"
        continue
    }
    console.log(nome);
}

console.log();

for (let nome of nomes){
    if (nome === 'José' || nome === 'João'){    // usando CONTINUE em Strings para pular os nomes"José" e "João"
        continue
    }
    console.log(nome);
}

console.log();
// CONTINUE continua para próxima interação
// BREAK sai do laço

console.log('Usando BREAK com FOR:');
for (let numero of numeros ){
    console.log(numero);       // parando no número 7 usando BREAK
    if ( numero ===7){
        console.log('Mostrando até o número 7, saindo fora ...')
        break;
    } 
}

console.log();
console.log('Usando BREAK e CONTINUE com WHILE:');
let i =0;
while (i < numeros.length ){
   let numero = numeros[i];

   if (numero === 2){
    console.log('Pulei número 2');
    i++;
    continue;
   }
   console.log(numero);
   if (numero === 7 ){
    console.log('Mostrando até o número 7, saindo fora ...');
    i++;
    break;
   }
    i++
}
console.log();  

console.log('Usando  BREAK e CONTINUE com DO WHILE:');
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let s = 0;
do {
    let numero = numeros1[s];
 
    if (numero === 2) {
        console.log('Pulei número 2');
        s++; // Incrementa antes de continuar
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Mostrando até o número 7, saindo fora ...');
        s++; // Incrementa antes de sair do loop
        break;
    }
    
    s++;
} while (s < numeros.length);

