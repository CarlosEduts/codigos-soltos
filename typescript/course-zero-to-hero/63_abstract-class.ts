// Uso de classes

export {};

abstract class Animal {
  // Propriedade abstrata (deve ser implementada pelas classes filhas)
  abstract nome: string;

  // Método abstrato (deve ser implementado pelas classes filhas)
  abstract fazerSom(): void;

  // Método concreto (pode ser usado diretamente ou sobrescrito)
  mover(distanciaEmMetros: number = 0): void {
    console.log(`${this.nome} moveu ${distanciaEmMetros}m.`);
  }
}

// Classe concreta 'Gato' que herda de 'Animal'
class Gato extends Animal {
  nome: string; // Implementação da propriedade abstrata

  constructor(nome: string) {
    super();
    this.nome = nome;
  }

  // Implementação do método abstrato
  fazerSom(): void {
    console.log(`${this.nome} miou: Miau!`);
  }

  // Sobrescrevendo um método concreto da classe pai (opcional)
  mover(distanciaEmMetros: number = 5): void {
    console.log(`O gato ${this.nome} esgueirou-se por ${distanciaEmMetros}m.`);
  }
}

// Criando instâncias das classes concretas
const felix = new Gato("Felix");

felix.fazerSom(); // Saída: Felix miou: Miau!
felix.mover();    // Saída: O gato Felix esgueirou-se por 5m. (usando o valor padrão)
felix.mover(3);   // Saída: O gato Felix esgueirou-se por 3m.