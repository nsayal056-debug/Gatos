console.log('Ejercicio B');

var cantidadDeGatos= 5; 
var cantidadDePasos= 3;

for (let i = 1; i <= cantidadDeGatos; i++) {

    let pasos = "";

    for (let j = 0; j <cantidadDePasos; j++) {
        pasos += "🐾"
    }
    console.log("Gato #" + i + ":🐈" + pasos);
}