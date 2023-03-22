let countEl = document.getElementById("count-el")
let buttonTwo = document.getElementById("button-two")
let newgame = document.getElementById("new-game")
let home = 0
let guest = 0

function click1() {
    home = home + 1
    countEl.textContent = home
    if (home > guest) {
        countEl.classList.add('highscore');
        buttonTwo.classList.remove('highscore');
    } 
    else if (home === guest) {
        countEl.classList.remove('highscore');
        buttonTwo.classList.remove('highscore');
    }
}

function click2() {
    home = home + 2
    countEl.textContent = home
    if (home > guest) {
        countEl.classList.add('highscore');
        buttonTwo.classList.remove('highscore');
    } 
    else if (home === guest) {
        countEl.classList.remove('highscore');
        buttonTwo.classList.remove('highscore');
    }
}

function click3() {
    home = home + 3
    countEl.textContent = home
    if (home > guest) {
        countEl.classList.add('highscore');
        buttonTwo.classList.remove('highscore');
    } 
    else if (home === guest) {
        countEl.classList.remove('highscore');
        buttonTwo.classList.remove('highscore');
    }
}



function stwo() {
    guest = guest + 1
    buttonTwo.textContent = guest
    if (home < guest) {
        buttonTwo.classList.add('highscore');
        countEl.classList.remove('highscore');
    } 
    else if (home === guest) {
        buttonTwo.classList.remove('highscore');
        countEl.classList.remove('highscore');
    }
}

function ttwo() {
    guest = guest + 2
    buttonTwo.textContent = guest
    if (home < guest) {
        buttonTwo.classList.add('highscore');
        countEl.classList.remove('highscore');
    } 
    else if (home === guest) {
        buttonTwo.classList.remove('highscore');
        countEl.classList.remove('highscore');
    }
}

function utwo() {
    guest = guest + 3
    buttonTwo.textContent = guest
    if (home < guest) {
        buttonTwo.classList.add('highscore');
        countEl.classList.remove('highscore');
    } 
    else if (home === guest) {
        buttonTwo.classList.remove('highscore');
        countEl.classList.remove('highscore');
    }
}

function zero() {
    let countftn = 0 
    buttonTwo.textContent = countftn
    countEl.textContent = countftn
    home = 0
    guest = 0
}
