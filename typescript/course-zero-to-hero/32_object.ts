// Usando o Object
// Video relacionado: https://youtu.be/0cxJ1RQ7Gv0?si=ZH06CW-Tr0JlCMz9

// Exemplo 01 - Object com Interface
interface Pessoa {
  nome: string;
  sobrenome: string;
}

function cumprimento(pessoa: Pessoa) {
  return `Olá ${pessoa.nome} ${pessoa.sobrenome}!`;
}

console.log(cumprimento({ nome: "Carlos", sobrenome: "Eduardo" }));

// Exemplo 02 - Dado opcional

interface Pessoa02 {
  nome: string;
  sobrenome?: string;
}

function cumprimento02(pessoa: Pessoa02) {
  return `Olá ${pessoa.nome} ${pessoa.sobrenome ?? ""}!`;
}

console.log(cumprimento02({ nome: "Carlos"}));
