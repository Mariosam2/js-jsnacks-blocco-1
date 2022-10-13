/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */




const guestsArray = [
    'Girolamo Caltagirone',
    'Marco Marchi',
    'Test Test'
]
const userName = prompt('Inserisci il tuo nome');

let i = 0;
let isInvited;
while(i < guestsArray.length){
    if(userName.toLocaleLowerCase() === guestsArray[i].toLocaleLowerCase()){
        isInvited = true;
    } 
    i++;
    
}


if (isInvited == true){
    alert('Puoi partecipare alla festa');
} else {
    alert('Non sei invitato');
}