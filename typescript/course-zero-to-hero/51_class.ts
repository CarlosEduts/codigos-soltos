// Uso de classes
// Lista de vídeos relacionados:
//   https://youtu.be/tKVsXBMYm1g?si=n77D93y-ohLlTu92

// Exemplo 01 - Uso Básico
class Pessoa {
  private nome: string;
  private sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const p1 = new Pessoa("carlos", "Eduardo");
console.log(p1.nomeCompleto());
