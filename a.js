console.log("Ejercicio A");

var cantidadDeGatos = 10;

for (let i = 1; i <= cantidadDeGatos; i++) {

    let emoji;

    if (i % 3 === 1) {
        emoji = "😺";
    } 
    else if (i % 3 === 2) {
        emoji = "😸";
    } 
    else {
        emoji = "😹";
    }

    console.log("Gato #" + i + ": " + emoji);
}