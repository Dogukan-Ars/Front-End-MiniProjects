let playerText = document.querySelector("#player-text")
let restartBtn = document.querySelector("#restart-btn")
let boxes = Array.from(document.querySelectorAll(".box"))

let winningIndicator = getComputedStyle(document.body).getPropertyValue("--winning-blocks")
let drawIndicator = getComputedStyle(document.body).getPropertyValue("--draw-blocks")

let O_TEXT = "O"
let X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)
let countPlays = 0

const startGame = () => {
    boxes.forEach(box => box.addEventListener("click", boxClicked))
}

const boxClicked = (e) => {
    const id = e.target.id

    if(!spaces[id] && countPlays < 9) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        
        if(playerHasWon() !== false) {
            playerText.innerHTML = `${currentPlayer} has won!`
            let winnerBlock = playerHasWon()
            countPlays = 10
            winnerBlock.map(block => boxes[block].style.backgroundColor=winningIndicator)
            return
        }
        countPlays++
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
    if(countPlays === 9) {
        playerText.innerHTML = "Draw Game!"
        boxes.forEach(box => box.style.color = drawIndicator)
    }
}

const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function playerHasWon() {
    for (const condition of winning) {
        let [x, y, z] = condition

        if (spaces[x] && (spaces[x] == spaces[y] && spaces[x] == spaces[z])) {
            return [x, y, z]
        }
    }
    return false
}

restartBtn.addEventListener("click", restartGame)

function restartGame() {
    spaces.fill(null)
    countPlays = 0
    boxes.forEach(box => {
        box.innerText = ""
        box.style.backgroundColor = ""
        box.style.color = "#f2c14e"
    })
    playerText.innerHTML = "Tic Tac Toe"
    currentPlayer = X_TEXT
}
startGame()