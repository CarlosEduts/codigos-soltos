/*
 * Data: 10/06/2025
 * Conteúdo: Uso do TypeScript Mapped Types
 * Links relacionados: https://youtu.be/ih1t6eKSh24?si=CEtSsDcZYVbkzdTK
 */

type User = {
  id: number;
  name: string;
  email: string;
}

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type UserReadOnly = ReadOnly<User>;
const user: UserReadOnly = {
    id: 1,
    name: 'Carlos Eduardo',
    email: 'carlos@example.com'
}

console.log(user)