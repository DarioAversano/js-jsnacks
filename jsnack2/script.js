// Parole da inserire
let word1 = prompt("Inserisci la prima parola:");
let word2 = prompt("Inserisci la seconda parola:");

//controllo lunghezza parole
let lengthword1 = word1.length;
let lengthword2 = word2.length;

// parola più lunga
if (lengthword1 > lengthword2) {
    console.log("Word 1 " + word1);
} else if (lengthword2 > lengthword1) {
    console.log("word 2 " + word2);
} else {
    console.log("Le paroli sono ugualmente lunghe");
}
