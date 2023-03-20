let countEl = document.getElementById("count-el")
let buttonTwo = document.getElementById("button-two")
let newgame = document.getElementById("new-game")
let count = 0

function click1() {
    count = count + 1
    countEl.textContent = count
}

function click2() {
    count = count + 2
    countEl.textContent = count
}

function click3() {
    count = count + 3
    countEl.textContent = count
}

let countnew = 0

function stwo() {
    countnew = countnew + 1
    buttonTwo.textContent = countnew
}

function ttwo() {
    countnew = countnew + 2
    buttonTwo.textContent = countnew
}

function utwo() {
    countnew = countnew + 3
    buttonTwo.textContent = countnew
}

function zero() {
    let countftn = 0 
    buttonTwo.textContent = countftn
    countEl.textContent = countftn
    count = 0
    countnew = 0
}