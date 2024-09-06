// aula setInterval e setTimeout

console.log('Exemplo 1:');
function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {hour12: false});
}
console.log(mostraHora());











