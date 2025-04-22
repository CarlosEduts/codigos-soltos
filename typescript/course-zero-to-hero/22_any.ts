// Uso de Any
// Vídeo relacionado: https://www.youtube.com/watch?v=I0wYYGwiDNY&list=PLb2HQ45KP0Wsk-p_0c6ImqBAEFEY-LU9H&index=23
// ⚠️ O uso de any não é recomendado em muitos dos casos

// O tipo any pode receber qualquer valor
const idade: any = 18;
const nome: any = "Carlos";

console.log(idade + nome); // Não será indicado um erro como deveria, pois está declarado como any

// Quando usar o tipo any
const form: { [campoForm: string]: any } = {
  nome: "Carlos",
  idade: 18,
};

console.log(form)
