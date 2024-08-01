// Aula atribuição via destruturação (Parte 2)

console.log('Usando atribuições normais:');
const pessoa = {
  nome: 'Tiago',
  sobrenome: 'Gonçalves',
  idade: 39,
  endereco: {
    rua: 'Pedro Paulo Cardoso',
    numero: 45
  }
};

console.log('linha 14:',pessoa); //mostrando todo objeto pessoa via atribuição normal

console.log('linha 16:',pessoa.nome); //mostrando apenas o nome do objeto pessoa via atribuição normal

const nome = pessoa.nome;
console.log('linha 19:', nome); //usando variável pra mostrar nome do ojeto pessoa via atribuição normal
 
console.log();

console.log('Usando atribuição via destruturação:');
const pessoa1 = {
    nome1: 'Rodrigo',
    sobrenome1: 'Miranda',
    idade1: 39,
    endereco1: {
      rua1: ' Paulo Pena',
      numero1: 360
    }
  };
const { nome1 } = pessoa1; // cria variável e extrai do objeto o nome
console.log('linha 34: ',nome1);
const { sobrenome1, idade1} = pessoa1;
console.log('linha 36:',sobrenome1, idade1);

console.log();
const pessoa2 = {
    //nome2: ' Caio',
    sobrenome2: 'Silva',
    idade2: 39,
    endereco2: {
      rua2: ' Mario Frias',
      numero2: 97
    }
  };
  const { nome2 = 'nome não existe' } = pessoa2; // atribuindo valor a vatiável nome2
  console.log('linha 49:',nome2);
  
  console.log();
  const pessoa3 = {
    nome3: ' Jaqueline',
    sobrenome3: 'Martins',
    idade3: 31,
    endereco3: {
      rua3: ' Rosa da Silva',
      numero3: 93
    }
  };
  const { nome3: teste = ' '} = pessoa3; // mudando o nome da variável nome3 para teste e usando atribuição de destruturação
  console.log('linha 62:',teste);

  console.log();
  const pessoa4 = {
    nome4: 'Flavia',
    sobrenome4: 'Souza',
    idade4: 32,
    endereco4: {
      rua4: ' Maria dos anjos',
      numero4: 71
    }
  };
  const { endereco4: { rua4, numero4 } } = pessoa4; //pegando endereço e número do objeto endereco4 
  console.log('linha 75:',rua4, numero4);