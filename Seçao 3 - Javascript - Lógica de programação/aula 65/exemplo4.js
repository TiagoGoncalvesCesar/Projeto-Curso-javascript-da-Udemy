

console.log('Exemplo 4:');
function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {hour12: false});
}

const timer = setInterval(function(){ 
    console.log(mostraHora());
}, 1000);

setTimeout(function(){    // usando setTimeout
    clearInterval(timer);
}, 11000);