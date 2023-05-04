
let cards = []
let sum = 0 
let hasBlackjack = false
let isAlive = false
let message = ""
let MessageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name : "Sagar",
    chips : 145
}



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13 + 1)
    if (randomNumber > 10){
        return 10
    }
    else if ( randomNumber === 1){
        return 11
    }
    else {
    return randomNumber
    }
}

function startGame(){
    isAlive =true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards : "
    for(let i = 0; i < cards.length ; i++) {
        cardsEl.textContent += cards[i] + " " 
    }
    sumEl.textContent = "Sum : " + sum
    if(sum <= 20) {
        message = "do you want new card"
    } 
    else if (sum === 21) {
        message = "blackjack"
        hasBlackjack = true
    }
    else {
        message = "you are out"
        isAlive = false
    }

    MessageEl.textContent = message

}

function newCard() {
    if(isAlive === true && hasBlackjack === false){
         
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    console.log("new")
    }
}

