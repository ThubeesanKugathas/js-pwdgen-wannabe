let firstN = 4;
let secondN = 20;

let resultN = firstN * secondN;

console.log(`${firstN} * ${secondN} = ${resultN}`);

// --------------------------------------------------------------

// alert buffo 
alert('Cerchi un sito per fare le moltiplicazioni in modo semplice? Questa calcolatrice fa proprio al caso tuo!');
// prompt primo numero 
const primoN = prompt('Inserisci primo numero da moltiplicare');
let htmlElement1 = document.getElementById('primoN');
htmlElement1.innerHTML = `${primoN} X`;

// prompt secondo numero 
const secondoN = prompt('Inserisci il secondo numero da moltiplicare');
let htmlElement2 = document.getElementById('secondoN');
htmlElement2.innerHTML = `${secondoN} X`;

// prompt terzo numero 
const terzoN = prompt('Inserisci il terzo numero da moltiplicare altrimenti inserisci "1"!');
let htmlElement3 = document.getElementById('terzoN');
htmlElement3.innerHTML = `${terzoN} =`;

// risultato 
let risultatoN = primoN * secondoN * terzoN;
let htmlElement4 = document.getElementById('risultatoN');
htmlElement4.innerHTML = `${risultatoN}`;
