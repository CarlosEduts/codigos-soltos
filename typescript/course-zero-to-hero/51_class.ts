// Uso de classes
// Lista de vídeos relacionados:
//   https://youtu.be/tKVsXBMYm1g?si=n77D93y-ohLlTu92
//   https://youtu.be/kHzkhKMNyEI?si=GFVajpJZSBWfweFv
//   https://youtu.be/AFYCxTnVQbM?si=kW2Dr2fpUl8OY2wO
//   https://youtu.be/vqhjXC19_WI?si=VW7YWN9e_E2_mTey

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

// Exemplo 04 - Membros Estáticos Publicos
class Funcionario {
  static contratacoes: number = 0;

  constructor(private nome: string, private funcao: string) {
    Funcionario.contratacoes++;
  }
}

const funcionario_01 = new Funcionario("Maria", "Dev. web");
const funcionario_02 = new Funcionario("Pedro", "Dev. Mobile");

console.log(Funcionario.contratacoes); // Resultado: 2

// Exemplo 05 - Membros Estáticos Privados
class Cachorro {
  private static QUANTIDADE_DE_CACHORROS = 0;

  constructor(public nome: string, public idade: number) {
    Cachorro.QUANTIDADE_DE_CACHORROS++;
  }

  public static retornarQuantidadeCachorro() {
    return Cachorro.QUANTIDADE_DE_CACHORROS;
  }
}

const cachorro_01 = new Cachorro("Mel", 2);
const cachorro_02 = new Cachorro("Rex", 4);
const cachorro_03 = new Cachorro("Jonny", 3);

console.log(Cachorro.retornarQuantidadeCachorro());
