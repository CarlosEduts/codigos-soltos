// Uso de classes
// Lista de vídeos relacionados:
//   https://youtu.be/tKVsXBMYm1g?si=n77D93y-ohLlTu92
//   https://youtu.be/kHzkhKMNyEI?si=GFVajpJZSBWfweFv
//   https://youtu.be/AFYCxTnVQbM?si=kW2Dr2fpUl8OY2wO

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

// Exemplo 03 - Get e Set
class Animal {
  private _name: string;
  private _age: number;

  public set setName(name) {
    this._name = name;
  }

  public set setAge(age) {
    this._age = age;
  }

  public get getName() {
    return this._name;
  }

  public get getAge() {
    return this._age;
  }
}

const animal = new Animal();
animal.setName = "Rex";
animal.setAge = 2;

console.log(`Nome: ${animal.getName}, Idade: ${animal.getAge}`);
