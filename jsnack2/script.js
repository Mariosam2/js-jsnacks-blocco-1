/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */
const container = document.querySelector('.container');
const firstWord = prompt('Inserisci una parola');
const secondWord = prompt('Inserisci un\'altra parola');

const firstEl = document.createElement('div');
const secondEl = document.createElement('div')
firstEl.append(firstWord);
secondEl.append(secondWord)

console.log(firstWord.length);
if (firstWord.length <= secondWord.length) {
    container.append(firstEl);
    container.append(secondEl);
} else {
    container.append(secondEl);
    container.append(firstEl);
}