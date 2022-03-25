document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score')
    const resultDisplay = document.querySelector('#result')
    const width = 4;
    let squares = []

    //create playing board
    function createBoard() {
        // loop until you reach 16 squares (4 squares by 4 squares)
        // as long as i is less than 16 run this code
        for(let i = 0; i < width*width; i++) {
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
    }

    createBoard()

    // TODO: generate a number randomly

    // generate the number 2 randomly
    function generate() {
        let randomNumber = Math.floor(Math.random() * squares.length)
        if (squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2
        } else generate()
    }











})



