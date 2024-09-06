// aula setInterval e setTimeout

console.log('Exemplo 2:');
function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {hour12: false});
}

function funcaoDoInterval(){  // usando a função setInterval
console.log(mostraHora());
}
setInterval(funcaoDoInterval, 1000);