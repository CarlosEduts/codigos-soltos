import { Database } from "./db/database";

// Criando e usando o banco de dados local
const database = Database;
database.add({ name: "Carlos", email: "carlos@exemple.com" });
database.add({ name: "Lucas", email: "lucas@exemple.com" });
database.add({ name: "Maria", email: "maria@exemple.com" });

database.show();
