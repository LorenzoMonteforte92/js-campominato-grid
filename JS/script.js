// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, 
// la cella cliccata si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata.

//selezionare il bottone nel DOM e inserirlo in una variabile
//metterlo in attesa di un evento click
let startBtn = document.querySelector(`#btn`);
startBtn.addEventListener(`click`, function(){
    //generare una griglia di 100 elementi con numeri da 1 a 100
    //selezionare il contenitore
    let boxContainer = document.querySelector(`#container`);
    //stamparci dentro gli elementi usando una funzione
    let newSquare
    for(let i = 1; i <= 100; i++){
         newSquare = generateSquare (i);
         boxContainer.append(newSquare);
         newSquare.addEventListener(`click`, function(){
            this.classList.add(`click-cell`)
            console.log(i)
        }, {once : true})
    }

    

}, {once : true})

// ----------------
//     FUNCTIONS
// ----------------

//funzione che genera un quadrato
//number --> numero all'interno dei quadrati
//return: un elemento del DOM che rappresenta un quadrato
function generateSquare (number){
    let square = document.createElement(`div`);
    square.classList.add(`box`);
    square.innerHTML += `<span>${number}</span>`
    return square
}

function changeColorClick (){

}
