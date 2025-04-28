// Default Parameters
// Vídeo relacionado: https://youtu.be/RFyhBnowMOY?si=Vu0W-ENmIU4h1jz8

// Exemplo 01 - Default Parameters
function calcularDesconto(valorCompra: number, desconto: number = 0.08) {
  return valorCompra * (1 - desconto);
}

console.log(calcularDesconto(100));
console.log(calcularDesconto(100, 0.1));
