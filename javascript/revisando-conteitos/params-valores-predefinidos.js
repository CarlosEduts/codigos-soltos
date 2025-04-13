// Parâmetros com Valores Predefinidos

function sumArrayObjects([x, y, z] = [5, 10, 15]) {
  return x + y + z;
}

console.log(`Chamado sem parametros: ${sumArrayObjects()}`);
console.log(`Chamado com parametros: ${sumArrayObjects([1, 2, 3])}`);
