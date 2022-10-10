// Creo variabile per il titolo ed aggiungo classi 
const myTitle = document.querySelector('h1');
myTitle.classList.add('p-4', 'text-uppercase', 'text-center');

// Creo una variabile in cui metto il wrapper 
const myWrap = document.querySelector('.wrapper');

// Inizio un ciclo "for" in cui la mia variabile 'i' ha valore iniziale 1 e incrementa il valore di 1 ogni volta, fino ad arrivare a 'i<101' 
for (let i = 1; i < 101; i++){

// Creo un elemento 'div' a cui aggiungo una classe 'square' e un contenuto uguale al valore di 'i'
    let mioDiv = document.createElement('div');
    mioDiv.className = 'square';
    mioDiv.append(i);
    
// Controllo il flusso con un condizionale 'if'... se 'i' è divisibile per 3 appare Fizz, se è divisibile per 5 appare Buzz, se è divisibile per entrambi appare FizzBuzz
    if (i % 5 == 0 && i % 3 == 0){
        mioDiv.innerHTML = `FizzBuzz`;
        mioDiv.classList.add('fizz_buzz');
    } else if (i % 5 == 0){
        mioDiv.innerHTML = `Buzz`;
        mioDiv.classList.add('just_buzz');
    } else if (i % 3 == 0){
        mioDiv.innerHTML = `Fizz`;
        mioDiv.classList.add('just_fizz');

    } else {
        mioDiv.innerHTML = `${i}`;
    }
    
    // Aggiunto background alternato nei quadratini pari 
    if(i % 2 == 0){
        mioDiv.classList.add('alt_square');
    }
    // uso 'append' per inserire il div creato nel div.wrapper
    myWrap.append(mioDiv);
}