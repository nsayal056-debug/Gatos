console.log("Ejercicio C");

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (let i = 1; i <= cantidadDeGatos; i++) {

    let pasos = "";

    for (let j = 0; j < cantidadDePasos; j++) {
        pasos += "🐾";
    }

    if (i % 2 === 0) {
        console.log("Gato #" + i + ": 🐈" + " ⬛" + pasos);
    } else {
        console.log("Gato #" + i + ": 🐈" + pasos);
    }
}