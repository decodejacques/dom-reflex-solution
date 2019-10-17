let body = document.querySelector('body')


let genRand = (start, end) => {
    return start + Math.floor(Math.random() * (end - start))
}



let addRestartButton = () => {
    let restartButton = document.createElement('button')
    restartButton.innerText = 'restart'
    restartButton.addEventListener('click', () => {
        startGame()
    })
    body.append(restartButton)

}

let startGame = () => {
    // remove everything from the body
    body.innerHTML = ""

    // Add the status div (it used to be in the HTML)
    let status = document.createElement("div")
    status.id = 'status'
    body.appendChild(status)

    // These used to be a global variable
    let clicksNeeded = genRand(3, 6)
    let timesClicked = 0
    let lost = false
    let won = false


    let theButton = document.createElement('button')
    // a DOM element needs to have position:absolute to move it anywhere you want
    theButton.style.position = 'absolute'
    theButton.innerText = "" + clicksNeeded
    theButton.addEventListener('click', () => {
        if (won || lost) return

        // randomly place the DOM element a certain number of pixels from the top and left
        theButton.style.left = genRand(100, 200) + "px"
        theButton.style.top = genRand(100, 200) + "px"

        timesClicked = timesClicked + 1
        theButton.innerText = "" + (clicksNeeded - timesClicked)
        if (timesClicked >= clicksNeeded) {
            won = true
            document.getElementById('status').innerText = "you won!"
            addRestartButton()
        }
    })
    body.appendChild(theButton)
    setTimeout(() => {
        if (won || lost) return
        lost = true
        document.getElementById('status').innerText = "You lost!"
        addRestartButton()
    }, genRand(500, 1300))
}

setTimeout(startGame, genRand(1000, 2000))
