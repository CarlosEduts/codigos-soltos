/*
 * Data: 03/06/2025
 * Conteúdo: Uso de interfaces
 * Links relacionados: https://youtu.be/gEmE6EnnMN4?si=5asJJqBeyVFMhL5J
 */

export {};

// --> Exemplo 01: Uso simples de interface
interface IPessoa {
  name: string;
  surname?: string;
  lastName: string;
  age: number;
}

const carlos: IPessoa = {
  name: "Carlos",
  lastName: "Silva",
  age: 18,
};

console.log(carlos);

// --> Exemplo 02: Uso do implements com classe
interface IPet {
  name: string;
  age: number;
  eat(foodType: string): string;
}

class myPet implements IPet {
  constructor(public name: string, public age: number) {}

  eat(foodType: string) {
    return `${this.name} comeu ${foodType}.`;
  }
}

const pitoco = new myPet("Pitoco", 3);
console.log(pitoco.eat("Ração para Cachorro"));
