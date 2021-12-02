// calcolatrice per tutti i calcoli 

// prompt operatore
const operatorX = prompt('Inserisci quale operazione vuoi eseguire "+ o - o * o /" ');

// prompt primo numero 
const firstN = parseInt(prompt('Inserisci il primo numero da calcolare'));
// prompt secondo numero
const secondN = parseInt(prompt('Inserisci il secondo numero da calcolare'));

// risultato visibile nella calcolatrice
let resultN;

if (operatorX == '+') {
    resultN = firstN + secondN;
}

else if (operatorX == '-') {
    resultN = firstN - secondN;
}

else if (operatorX == '*') {
    resultN = firstN * secondN;
}

else {
    resultN = firstN / secondN;
}

let htmlElement = document.getElementById('risultatoN');
htmlElement.innerHTML = `${resultN}`;