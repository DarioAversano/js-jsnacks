// Crea un array vuoto
let empty = [];

// Chiedi all'utente di inserire 6 numeri
for (let i = 0; i < 6; i++) {
  let number = parseInt(prompt("Inserisci un numero:"));

  // Se il numero è dispari, inseriscilo nell'array
  if (number % 2 != 0) {
    empty.push(number);
  }
}

console.log("Numeri dispari inseriti: " + empty);