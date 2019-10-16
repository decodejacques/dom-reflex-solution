let body = document.querySelector('body')
let lost = false
let won = false
let clicked = []


let clickableButton = (text, index) => {
    clicked.push(false)
    let theButton = document.createElement('button')
    theButton.innerText = text
    theButton.addEventListener('click', () => {
        if (won || lost) return
        clicked[index] = true
        if (clicked.indexOf(false) === -1) {
            won = true
            document.getElementById('status').innerText = "you won!"
        }
    })


    body.appendChild(theButton)
}

let genRand = (start, end) => {
    return start + Math.floor(Math.random() * (end - start))
}

let randNum = genRand(2, 7)

for (let i = 0; i < randNum; i++) {
    clickableButton("button " + i, i)
}

setTimeout(() => {
    if (won || lost) return
    lost = true
    document.getElementById('status').innerText = "You lost!"
}, genRand(500, 800)) 