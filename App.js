const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));









// const tilesContainer = document.querySelector('.tiles-container');

// const newColors = [
//     ["red", "blue", "green", "yellow"],
//     ["grey", "purple", "orange", "violet"],
//     ["red", "blue", "green", "yellow"],
//     ["grey", "purple", "orange", "violet"]
// ]

// let reavealedCount = 0;
// // let activeTile = null ;
// // let awaitEndOfMove = false;

// let firstCard = null;
// let secondCard = null;

// function doesCardMatches(firstColor, secondColor){
//     return firstColor === secondColor ? true : false ;
// }

// function handleClickedCard(){
//   let recentCard = this;

//   if(!firstCard){
//     firstCard = recentCard;
//     firstCard.style.backgroundColor =  firstCard.dataset.color
//   }else if(firstCard !== recentCard){
//     secondCard = recentCard;
//     secondCard.style.backgroundColor = secondCard.dataset.color
//     let isMatch= doesCardMatches(firstCard.dataset.color , secondCard.dataset.color);

//     if(isMatch){
//         reavealedCount+=2;
//             setTimeout(()=>{
//                 firstCard.style.visibility = "hidden";
//                 secondCard.style.visibility = "hidden";
//                 console.log("afascs")
//                 firstCard = null;
//                 secondCard = null;
//                 if(reavealedCount === newColors[0].length * newColors.length){
//                     alert("you have won the game")
//                  }   
//             },500)
//     }else{
//         setTimeout(()=>{
//             firstCard.style.backgroundColor = '#111111';
//             secondCard.style.backgroundColor = '#111111';
//             console.log("afascs")
//             firstCard = null;
//             secondCard = null;
//         },500)
//         newColors.sort(()=> Math.random()-0.5)
//         console.log(newColors)
//     }
//   }

// }



// function buildTile(color){
//     const element = document.createElement('div')
//     element.classList.add('tile');
//     element.setAttribute('data-color', color)
//     return element;
// }



// newColors.sort(()=> Math.random()-0.9).map((row,rowIdx)=>{
//     row.map((col,colIdx)=>{
//         const tile = buildTile(newColors[rowIdx][colIdx]);
//         tile.addEventListener('click',handleClickedCard)
//         tilesContainer.appendChild(tile)
//     })
// })
