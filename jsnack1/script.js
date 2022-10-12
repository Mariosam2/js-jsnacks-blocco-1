/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.  */

const firstNumber = Number(prompt('Inserisci un numero'));
const secondNumber = Number(prompt('Inserisci un altro numero'));
const container = document.querySelector('.container');
if (firstNumber >= secondNumber) {
    container.innerHTML = firstNumber;
} else {
    container.innerHTML = secondNumber;
}


