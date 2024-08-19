//Tratando e lançando erros (try, catch, finally)

try {
  // essa parte do código é executada quando não há erros
} catch (e) {
  // essa parte do código é executada quando há erros
} finally {
  // essa parte do código é executada sempre
}

console.log("Exemplo 1:");
try {
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo");
  console.log("Fechei o arquivo");
} catch (e) {
  // essa parte do código é executada quando há erros
} finally {
  // essa parte do código é executada sempre
}

console.log();
console.log("Exemplo 2:");
try {
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou erro");
  console.log("Fechei o arquivo");
} catch (e) {
  console.log("Tratando erro  com CATCH");
} finally {
  // essa parte do código é executada sempre
}

console.log();
console.log("Exemplo 3:");
try {
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou erro");
  console.log("Fechei o arquivo");
} catch (e) {
  console.log("Tratando erro  com CATCH");
} finally {
  console.log("Código executado com FINALLY");
}

console.log();
console.log("Exemplo 4:");
try {
  console.log(a); // aqui teve erro e caiu no catch
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou erro");
  console.log("Fechei o arquivo");
} catch (e) {
  console.log("Tratando erro  com CATCH");
} finally {
  console.log("Código executado com FINALLY");
}

console.log();
console.log("Exemplo 5:");
try {
  // usando TRY dentro TRY
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou erro");
  console.log("Fechei o arquivo");

  try {
    console.log(b);
  } catch (e) {
    console.log("Deu erro");
  } finally {
    console.log("Executando o FINALLY");
  }
} catch (e) {
  console.log("Tratando erro  com CATCH");
} finally {
  console.log("Código executado com FINALLY");
}

console.log();
console.log("Exemplo 6:");
function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora();
  console.log(hora);
} catch (e) {
  //Tratar erro
} finally {
  console.log("Tenha um bom dia!!");
}
