// Usando o never
// Vídeo relacionado: https://youtu.be/ZJt15H_MKLc?si=M9YNkkHcCCNfBw8R

// Exemplo 01 - Throw Exception
function error(message: string): never {
  throw new Error(message);
}

console.error(error("Erro exemplo 01"));
