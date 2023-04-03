
let casualnumber = Math.floor(Math.random() * 11);

// 
let usernumber = parseInt(prompt("Indovina il numero da 0 a 10:"));

// Verifica 
if (usernumber == casualnumber) {
  console.log("Hai vinto " + casualnumber);
} else {
  console.log("hai perso " + casualnumber);
}