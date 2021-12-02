// calcolatrice per tutti i calcoli 

// prompt operatore
const operatorX = prompt('Inserisci quale operazione vuoi eseguire "+ o - o * o /" ');

// prompt primo numero 
const firstN = prompt('Inserisci il primo numero da calcolare');
// prompt secondo numero
const secondN = prompt('Inserisci il secondo numero da calcolare');

// risultato visibile nella calcolatrice
let resultN = `${firstN} ${operatorX} ${secondN}`;

let htmlElement = document.getElementById('risultatoN');
htmlElement.innerHTML = `${resultN}`;