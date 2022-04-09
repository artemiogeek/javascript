//  Expprtacion por nombre

export const promedio = (listaNotas) => {
    let suma = listaNotas.reduce((a, n) => a + n);
    return suma/listaNotas.length
}

export const estaAprobado = (item) => item > 10;