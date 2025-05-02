import { User } from "../interfaces/user";

// Criando uma base de dados local, apenas para praticar o modelo sigleton
const users: User[] = [];
export const Database = {
  add(user: User): void {
    users.push(user);
  },

  remove(index: number): void {
    users.splice(index, 1);
  },

  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};
