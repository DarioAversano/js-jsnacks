// nomi degli invitati
let list = ["marco", "carlo", "giulio", "Luca",];

// Chiedi all'utente di inserire il suo nome
let name = prompt("Inserisci il tuo nome:");

// Verifica presenza
if(list.includes(name)) {
    console.log("Sei invitato.");
} else {
    console.log("non sei invitato.");
}