// Destructuracion con Arrays
const numeros = [1, 2, 3, 4, 5];

const [numero1, numero2, numeroX] = numeros;

console.log(numero1);
console.log(numero2);
console.log(numeroX);

// Destructuracion con Objetos
const persona = {
    nombre: "eduardo",
    edad: 29,
    area: "FrontEnd",
    trabajo: "AFP Habitad",
};

const {area, trabajo} = persona;
console.log(area);
console.log(trabajo);