// console.log("Veamos las funciones tipo flecha");

const saludo1 = function () {
    return "Hola a todos";
}
console.log(saludo1());


const saludo2 = () => {
    return "Saludando desde Arrow Function"
}
console.log(saludo2());


const saludo3 = () => "Saludando desde Arrow Function opcion 2"
console.log(saludo3());


const saludoPersona1 = function (nombre) {
    return "Hola " +nombre;
}
console.log(saludoPersona1("Juan"));

const saludoPersona2 = (nombre) => `Hola ${nombre}`;
console.log(saludoPersona2("Jesus"));