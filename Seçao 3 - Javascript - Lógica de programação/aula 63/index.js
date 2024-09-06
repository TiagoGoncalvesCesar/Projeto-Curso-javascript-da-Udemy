// Tratando e lançando erro (try, catch, throw)

//console.log(naoExisto); // teria um erro an execução desse console, variável não foi defenida

console.log('Usando TRY e CATCH:');
try{
    console.log(naoExisto);
}catch(error){
    console.log('nãoExisto não existe');
    console.log(error);
}

console.log();
console.log('Usando THROW:')
function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números.');
    }
    return x + y;
}
console.log(soma(10, 20));
console.log(soma('10', 20)); // executou o throw

console.log();

console.log('Tratando erro:');
function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números.Precisa acertar o erro.');
    }
    return x + y;
}

try{
console.log(soma(10, 20));
console.log(soma('10', 20)); 
} catch(error){
console.log(error);
}

console.log('Mostrando erro:');
function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números.Precisa acertar o erro.');
    }
    return x + y;
}

try{
console.log(soma(10, 20));
console.log(soma('10', 20)); 
} catch(error){
console.log(error);
}

console.log();
function soma1(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números.Precisa acertar o erro.');
    }
    return x + y;
}

try{
console.log(soma1(10, 20));
console.log(soma1('10', 20)); 
} catch(error){
//console.log(error)
console.log('Mostrando alguma coisa mais amigável para o usuário!!!');
}

// OBS: não é interessante mostrar erros de códigos para o usuário final.