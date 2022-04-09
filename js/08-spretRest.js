// Spret: Usado para dividir un Array u Objeto


const numeros = [1, 2, 3, 4];
const lista = [...numeros, 5, 6, 7];

console.log(numeros);
console.log(...numeros);
console.log(lista);

const persona = {
    nombre: "Eduardo",
};

const nuevaPersona = {
    ...persona,
    edad: 19,
}
console.log(persona);
console.log({...persona});
console.log(nuevaPersona);

// Rest: Usado para unir una lista de argumentos en Funciones
console.log("Operacion con REST");
const suma = (a, b, c, d, e) => {
    return a + b + c + d + e;
};
console.log(suma(1, 2, 3, 4, 5));

const suma2 = (...argm) => argm.reduce((a,i) => a + i);
console.log(suma2(1, 2, 3, 4, 5, 6, 7));