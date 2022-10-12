/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */
const container = document.querySelector('.container');

let max = 10;
let sum = 0;
for(let i = 0; i < max; i++){
    let currentNumber = Number(prompt('Inserisci un numero'));
    sum = sum + currentNumber;
}

container.innerHTML = sum;