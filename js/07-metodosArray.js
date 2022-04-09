// Forma tradicional
const myArray1 = [2,4,6,8];
const myArray2 = [];

for(let key in myArray1) {
    myArray2.push(myArray1[key] ** 2);
}

console.log(myArray1);
console.log(myArray2);

// Metodo Map
const myArray3 = myArray1.map((item) => item ** 2);
console.log(myArray3);

// Metodo find();  === tipo de datos string
const frutas = [
    {nombre: "pera", cantidad: 10},
    {nombre: "manzana", cantidad: 5},
    {nombre: "platano", cantidad: 8},
    {nombre: "durazno", cantidad: 6},
    {nombre: "pera", cantidad: 3},
];

const fruta1 = frutas.find((item) => item.nombre === 'durazno');
const fruta2 = frutas.find((item) => item.nombre == 'durazno');
const fruta3 = frutas.find((item) => item.cantidad === 6);
console.log(fruta1);
console.log(fruta2);
console.log(fruta3);

// Metodo Filter

const mayorA5 = frutas.filter((item) => item.cantidad > 5)
console.log(mayorA5);


// Metodo Reduce
const notas = [12, 15, 16];
const sumaNotas1 = notas.reduce((acumulador, nota) => acumulador + nota);
console.log(sumaNotas1);

const sumaNotas2 = notas.reduce((acumulador, nota) => {return acumulador + nota}, 5);
const sumaNotas3 = notas.reduce((acumulador, nota) => {return acumulador + nota}, 0);
console.log(sumaNotas2);
console.log(sumaNotas3);