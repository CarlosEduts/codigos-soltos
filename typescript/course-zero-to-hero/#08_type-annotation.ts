// Usando o Type Annotation

// Com Arrays
const animais: string[] = ["cachorro", "gato", "cavalo"];

console.log(animais);

// Com objetos
let meuPet: {
  nome: string;
  idade: number;
  raca: string;
};

meuPet = {
  nome: "Lucky",
  idade: 2,
  raca: "Pincher",
};

console.log(meuPet);

// Com funções
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(10, 5));
