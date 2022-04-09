let personajes = ["Luke", "Leia", "Han", "C3po"];
console.log(personajes);
console.log(personajes.length);

// Agregar elementos al final
personajes.push("Anakin");
personajes.push("Obiwan");
console.log(personajes);
console.log(personajes.length);

// Borrar el ultimo elemento
personajes.pop();
personajes.pop();
console.log(personajes);
console.log(personajes.length);

//Agragar elemento al inicio
personajes.unshift("R2d2");
personajes.unshift("Bb8");
console.log(personajes);

//Borrar el primer elemento
personajes.shift();
console.log(personajes);

// Ordenando alfabeticamente
personajes.sort();
console.log(personajes);

// Ordenando alfabeticamente invertido
personajes.reverse();
console.log(personajes);

// Sacar la pocision de un elemento

console.log(personajes.indexOf("Han"));