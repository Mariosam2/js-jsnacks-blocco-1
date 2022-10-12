/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.  */

const firstNumber = prompt('Inserisci un numero');
const secondNumber = prompt('Inserisci un altro numero');
const container = document.querySelector('.container');
if (firstNumber >= secondNumber) {
    container.innerHTML = firstNumber;
} else {
    container.innerHTML = secondNumber;
}


