// Calcolatrice automatica per moltiplicazioni da prompt
// alert con avviso divertente
alert('INSERISCI QUA LA TUA LISTA DELLE TUE CANZONI PREFERITE!');
// prompt per il primo numero
const firstN = prompt('Inserisci il primo numero che vuoi moltiplicare!');
// prompt per il secondo numero 
const secondN = prompt('Inserisci il secondo numero che vuoi moltiplicare!');
// prompt per il terzo numero
const thirdN = prompt('Inserisci il terzo numero che vuoi moltiplicare altrimenti inserisci "1"!')

// firstN variable
let htmlElement = document.getElementById('firstN');
htmlElement.innerHTML = `${firstN}`;

// secondN variable
let htmlElement2 = document.getElementById('secondN');
htmlElement2.innerHTML = `${secondN}`;

// thirdN variable
let htmlElement3 = document.getElementById('thirdN');
htmlElement3.innerHTML = `${thirdN}`;

