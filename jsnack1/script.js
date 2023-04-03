// Chiedi all'utente di inserire numero
let number1 = prompt("Inserisci il primo numero:");
let number2 = prompt("Inserisci il secondo numero:");


// numero è maggiore
if (!isNaN(number1 && number2)) {
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    console.log("numeri scelti " + number1 + " " + number2);
    if (number1 > number2) {
        console.log(number1);
    } else if (number2 > number1) {
        console.log(number2);
    } else if (number1 = number2) {
        console.log("I numeri sono uguali");
    }
} else {
    console.log("Devi inserire un numero valido.");
}


