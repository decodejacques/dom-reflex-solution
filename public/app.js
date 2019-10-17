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

    let lost = false
    let won = false

    // random number of buttons
    let numButtons = genRand(2, 5)
    clicksNeeded = []
    timesClicked = []

    for (let i = 0; i < numButtons; i++) {
        // We have to keep track of the number of times clicked for each button
        clicksNeeded.push(genRand(3, 6))
        timesClicked.push(0)

        let theButton = document.createElement('button')
        // a DOM element needs to have position:absolute to move it anywhere you want
        theButton.style.position = 'absolute'
        theButton.style.left = genRand(100, 200) + "px"
        theButton.style.top = genRand(100, 200) + "px"
        theButton.innerText = "" + clicksNeeded[i]
        theButton.addEventListener('click', () => {
            if (won || lost) return

            // randomly place the DOM element a certain number of pixels from the top and left
            theButton.style.left = genRand(100, 200) + "px"
            theButton.style.top = genRand(100, 200) + "px"

            timesClicked[i] = timesClicked[i] + 1
            theButton.innerText = "" + (clicksNeeded[i] - timesClicked[i])

            // For the game to be finished, we need that the number of times clicked
            // is greater or equal to the number of clicks needed
            let finished = true
            for (let i = 0; i < timesClicked.length; i++) {
                if (timesClicked[i] < clicksNeeded[i]) finished = false
            }

            if (finished) {
                won = true
                document.getElementById('status').innerText = "you won!"
                addRestartButton()
            }
        })
        body.appendChild(theButton)
    }
    setTimeout(() => {
        if (won || lost) return
        lost = true
        document.getElementById('status').innerText = "You lost!"
        addRestartButton()
    }, genRand(5000, 13000))
}

setTimeout(startGame, genRand(1000, 2000))
