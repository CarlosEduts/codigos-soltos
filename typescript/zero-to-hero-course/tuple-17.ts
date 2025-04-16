// Uso de Tuplas
// Video relacionado: https://youtu.be/Hz1mB0YwDWU?si=wV3KqEseg8v5lKMc

// Exemplo 01 - Uso simples
let pessoa: [string, number, string];
pessoa = ["Carlos", 18, "Dev. Front-end"];

console.log(pessoa);

// Exemplo 02 - Uso com labels
let carro: [fabricante: string, nome: string, lancamento: number] = [
  "Fiat",
  "Fiat Uno",
  1983,
];

console.log(carro);

// Exemplo 03 - Lista heterogênea
let frutas: [numDeFrutas: number, disponiveis: boolean, ...string[]] = [
  20,
  true,
  "banana",
  "laranja",
  "maça",
  "mamão",
];

console.log(frutas)
