let body = document.querySelector('body')
let lost = false
let won = false
let timesClicked = 0

let genRand = (start, end) => {
    return start + Math.floor(Math.random() * (end - start))
}

let clicksNeeded = genRand(3, 6)


let startGame = () => {

    let theButton = document.createElement('button')
    theButton.innerText = "" + clicksNeeded
    theButton.addEventListener('click', () => {
        if (won || lost) return
        timesClicked = timesClicked + 1
        theButton.innerText = "" + (clicksNeeded - timesClicked)
        if (timesClicked >= clicksNeeded) {
            won = true
            document.getElementById('status').innerText = "you won!"
        }
    })
    body.appendChild(theButton)
    setTimeout(() => {
        if (won || lost) return
        lost = true
        document.getElementById('status').innerText = "You lost!"
    }, genRand(500, 1300))
}

setTimeout(startGame, genRand(1000, 2000))
