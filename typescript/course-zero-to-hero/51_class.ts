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

// Exemplo 02 - protected
class Estudante {
  codigo: number;
  protected nome: string;

  constructor(codigo: number, nome: string) {
    this.codigo = codigo;
    this.nome = nome;
  }
}

class EstudanteMaisCurso extends Estudante {
  private curso;

  constructor(codigo: number, nome: string, curso: string) {
    super(codigo, nome);
    this.curso = curso;
  }

  verDados(): string {
    return `
      Codigo: ${this.codigo}
      Nome: ${this.nome}
      Curso: ${this.curso}
      `;
  }
}

const estudante = new EstudanteMaisCurso(
  11221,
  "Carlos",
  "Desenvolvimento Front-end"
);

console.log(estudante.verDados());
