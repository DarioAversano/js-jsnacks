let add = 0;
let number;
// Chiedi all'utente di inserire 10 numeri
for(let i = 1; i <= 10; i++) {
    number = prompt("Inserisci il " + i + " numero:");
    number = parseInt(number);

    add = add + number;

}


    console.log("il totale dei numeri inseriti è: " + add);