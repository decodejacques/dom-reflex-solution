let body = document.querySelector('body')
let lost = false
let won = false
let timesClicked = 0



let theButton = document.createElement('button')
theButton.innerText = "click me"
theButton.addEventListener('click', () => {
    if (won || lost) return
    timesClicked = timesClicked + 1
    if (timesClicked >= 3) {
        won = true
        document.getElementById('status').innerText = "you won!"
    }
})


body.appendChild(theButton)

let genRand = (start, end) => {
    return start + (Math.random() * (end - start))
}

setTimeout(() => {
    if (won || lost) return
    lost = true
    document.getElementById('status').innerText = "You lost!"
}, genRand(500, 800)) 