/* Currying é um conceito da programação funcional que consiste em
 * transformar uma função que recebe vários argumentos em uma sequência
 * de funções, cada uma recebendo um único argumento por vez.
 */

// Exemplo 1: Função de multiplicação com currying
function multiplicar(a) {
  return function (b) {
    return a * b;
  };
}

const dobrar = multiplicar(2);
console.log(dobrar(5)); // 10

const triplicar = multiplicar(3);
console.log(triplicar(5)); // 15

// Exemplo 2: Saudação personalizada
function saudar(saudacao) {
  return function (nome) {
    return `${saudacao}, ${nome}!`;
  };
}

const bomDia = saudar("Bom dia");
console.log(bomDia("Carlos")); // Bom dia, Carlos!

const boaNoite = saudar("Boa noite");
console.log(boaNoite("Ana")); // Boa noite, Ana!
