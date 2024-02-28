/* DECLARACIÓN DE VARIABLES */
let cantJuegos = parseInt(prompt("Ingrese la cantidad de juegos a participar:"));
let contadorJuegos = 0;
let opcionUsuario = 0; 
let opcionComputador = 0;

for (contadorJuegos = 1; contadorJuegos <= cantJuegos; contadorJuegos++) {
    opcionUsuario = parseInt(prompt("Ingrese una opción: 1 = Piedra - 2 = Papel - 3 = Tijeras"));
    opcionComputador = Math.floor(Math.random()*3) + 1; // Ajustamos el rango para que vaya de 1 a 3

    if (opcionUsuario === opcionComputador) {
        console.log("Es un empate!");
    } else if (
        (opcionUsuario === 1 && opcionComputador === 3) ||
        (opcionUsuario === 2 && opcionComputador === 1) ||
        (opcionUsuario === 3 && opcionComputador === 2)
    ) {
        console.log("Felicitaciones, Has ganado!");
    } else {
        console.log("Has perdido, suerte la próxima!");
    }

}

