// Destructuring (Desestruturação)

// Ex. Básico
let a = 10;
let b = 5;
[a, b] = [b, a];

console.log(`Ex. Básico: \n a: ${a}, b: ${b}`);

// Ex. Médio
let key = "z";
let { [key]: foo } = { z: "bar" };

/*
É como fazer:
let obj = { z: "bar" };
let foo = obj[key]; // foo = "bar"
*/

console.log(`Ex. Médio: ${foo}`);
