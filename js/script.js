// 3 prompt 
// Chiedere all'utente il nome (prompt 1)
const userFirstname = prompt('Inserisci il tuo Nome');

// Chidere all'utente il cognome (prompt 2)
const userLastname = prompt('Inserisci il tuo Cognome');

// Chiedere all'utente il colore preferito (prompt 3) 
const userFavcolor = prompt('Inserisci il tuo Colore Preferito');

// Immettere variabile sul div "pdwgen" con i prompt  
let htmlElement = document.getElementById('password');
htmlElement.innerHTML = `La tua Password Personalizzata è: ${userFirstname}${userLastname}${userFavcolor}21`;


