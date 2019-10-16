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

clickableButton("one", 0)
clickableButton("two", 1)
clickableButton("three", 2)

setTimeout(() => {
    if (won || lost) return
    lost = true
    document.getElementById('status').innerText = "You lost!"
}, 500 + Math.floor(Math.random() * 800)) 