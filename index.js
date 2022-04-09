import listaPersonas from "./modulos/personas.js";
import {promedio, estaAprobado} from "./modulos/operaciones.js";
// importaciones por nombres y agrupadas
import * as operaciones from "./modulos/operaciones.js";

console.log(listaPersonas);

//  console.log(promedio([1,2,3]));

const nuevaListaPersonas1 = listaPersonas.map((item) => {
    return {
        nombre: item.nombre,
        notas: item.notas,
        promedio: promedio(item.notas),
        aprobado: estaAprobado(promedio(item.notas)),
    };
});
console.log(nuevaListaPersonas1);

const nuevaListaPersonas2 = listaPersonas.map((item) => {
    return {
        nombre: item.nombre,
        notas: item.notas,
        promedio: operaciones.promedio(item.notas),
        aprobado: operaciones.estaAprobado(operaciones.promedio(item.notas)),
    };
});
console.log(nuevaListaPersonas2);