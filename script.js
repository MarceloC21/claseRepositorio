//Seleccionamos un elemento con id "titulo"
const titulo = document.getElementById("titulo");

//Seleccionamos el botón con el id "cambiarTexto"
const boton = document.getElementById("cambiarTexto");

//Añadimos un evento al botón para que, al hacer click, cambie el texto del titulo (según Maria)
boton.addEventListener("click", () => {
    titulo.innerText = "¡Texto cambiado por JavaScript!";
});

boton.addEventListener("click", () => {
    titulo.innerText = "¡Texto cambiado por JavaScript!";
    titulo.style.color = "blue"; //cambiar color del texto
});

const entrada = document.getElementById("entradaTexto");
const botonActualizar = document.getElementById("actualizarTexto");

botonActualizar.addEventListener("click", () => {
    titulo.innerText = entrada.value; // cambia el texto al valor del input 
} );

// Crear un nuevo botón para generar la lista
/*const botonLista = document.createElement("button");
botonLista.id = "generarLista";
botonLista.innerText = "Generar Lista";
document.body.appendChild(botonLista); // Agregar el botón al final del body

// Crear un párrafo para mostrar la lista
const parrafoLista = document.createElement("p");
parrafoLista.id = "listaRepetida";
document.body.appendChild(parrafoLista); // Agregar el párrafo al final del body

// Evento para generar la lista
botonLista.addEventListener("click", () => {
    const texto = entrada.value; // Obtener el texto del campo de entrada
    let lista = ""; // Inicializar la lista
    for (let i = 0; i < 10; i++) {
        lista += `${texto}<br>`; // Añadir el texto repetido con salto de línea
    }
    parrafoLista.innerHTML = lista; // Mostrar la lista en el párrafo
}); 

// Evento para generar la lista con el método map

// Evento para generar la lista con el método map
botonLista.addEventListener("click", () => {
    const texto = entrada.value; // Obtener el texto del campo de entrada

    // Crear un arreglo de 10 elementos, llenarlo y transformarlo usando map
    const lista = Array(10)
        .fill(texto) // Llenar el arreglo con el texto del input
        .map((item, index) => `${index + 1}. ${item}`) // Añadir índice a cada elemento
        .join("<br>"); // Unir los elementos con salto de línea

    // Mostrar la lista en el párrafo
    parrafoLista.innerHTML = lista;
});

*/

// Crear un nuevo botón para generar las 10 filas
const botonGenerarFilas = document.createElement("button");
botonGenerarFilas.id = "generarFilas";
botonGenerarFilas.innerText = "Generar Filas";
document.body.appendChild(botonGenerarFilas); // Agregar el botón al final del body

// Crear un párrafo para mostrar las filas generadas
const parrafoFilas = document.createElement("p");
parrafoFilas.id = "filasGeneradas";
document.body.appendChild(parrafoFilas); // Agregar el párrafo al final del body

// Evento para generar las 10 filas utilizando el método map
botonGenerarFilas.addEventListener("click", () => {
    const texto = entrada.value; // Obtener el texto del campo de entrada

    // Crear un arreglo con 10 elementos y llenarlo con el texto ingresado
    const filas = Array(10)
        .fill(texto) // Llenar el arreglo con el texto del input
        .map(item => `${item}`) // Transformar cada elemento si es necesario
        .join("<br>"); // Unir los elementos con salto de línea

    // Mostrar las filas generadas en el párrafo
    parrafoFilas.innerHTML = filas;
});
