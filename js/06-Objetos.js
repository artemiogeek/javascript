// Creando Objetos
let perro = {name: "Layka", type: "dog"};
let gato = {name: "Tom", type: "cat"};

// Agragando Items a un objeto
gato.age = 20;
perro["age"] = 11;

console.log(gato);
console.log(perro);

//Obteniendo Valores de un Objeto
console.log(gato.type);
console.log(perro["type"]);

// Colocar Objeto en un Array
let animales = [{name: "boby", type: "dog"}, perro, gato];
console.log(animales);


//Itemando a un Objeto
let dog = {name: "Layka", type: "dog", age: 11, hungry: true};

for (let key in dog) {
    console.log(key);
}

for (let key in dog) {
    console.log(dog[key]);
}

//Iterando Arrays
let nombres = ["Eduardo", "Jose", "Luis", "Liliana"];
for (let key in nombres) {
    console.log(key);
}

for (let key in nombres) {
    console.log(nombres[key]);
}