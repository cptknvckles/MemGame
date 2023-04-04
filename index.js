const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false
let firstCard, secondCard;

function flipCard() {
  if(lockBoard) return
  if(this === firstCard) return
  this.classList.add('flip');

  if (!hasFlippedCard) {
    // First click
    hasFlippedCard = true;
    firstCard = this;
    return
  } 
    // Second click
    hasFlippedCard = false;
    secondCard = this;
    checkForMatch();
  
}

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name
    isMatch ? disableCards() : unflipCards()
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    lockBoard = true
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false
      }, 1000);
      
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

(function shuffle(){
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12)
        card.style.order = randomPosition
    })
})()
// Add the click event listener to each card
cards.forEach((card) => {
  card.addEventListener('click', flipCard);
});





// const cards = document.querySelectorAll('.card')

// let hasFlippedCard = false
// let firstCard, secondCard

// function flipCard(){
//     this.classList.add('flip')
//     if(!hasFlippedCard){
//         //first click
//         hasFlippedCard = true
//         firstCard = this
//     }else{
//         //second click
//         hasFlippedCard = false
//         secondCard = this
//         //do cards match?
//         if(firstCard.dataset.name === secondCard.dataset.name){
//             //cards match
//             firstCard.removeEventListener('click', flipCard)
//             secondCard.removeEventListener('click', flipCard)
//         }else{
//             //cards dont match
//             setTimeout(() => {
//                 firstCard.classList.remove('flip')
//                 secondCard.classList.remove('flip')
//             }, 1000)
//         }
//     }
// }

// cards.forEach(card => card.addEventListener('click', flipCard))
