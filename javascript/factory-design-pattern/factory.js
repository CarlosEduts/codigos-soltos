// Video que usei como base para aprendizado desse conceito:
// https://www.youtube.com/watch?v=arAz2Ff8s88

function fabricarPessoa(nome, sobrenome) {
  let pessoa = {};
  pessoa.nome = nome;
  pessoa.sobrenome = sobrenome;

  function nomeCompleto() {
    return `${pessoa.nome} ${pessoa.sobrenome}`;
  }

  pessoa.nomeCompleto = nomeCompleto;

  return pessoa;
}

const pessoaA = fabricarPessoa("Carlos", "Eduardo");

console.log(pessoaA);
console.log(pessoaA.nomeCompleto());
