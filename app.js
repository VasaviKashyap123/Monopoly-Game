var board = [10, 20, 30, 40, 50, 60, 70, 80, 9, 100, 110, 10, 130, 140, 150, 160];


const player1_Button = document.getElementById('player-1');
console.log(player1_Button);


player1_Button.addEventListener('click', rollDice_1);


var player1 = ['swati', 0, 1000];
var player2 = ['saurav', 0, 1000];



function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player one roll the dice", position);
    changePosition_1(player1[1], position);
}

function changePosition_1(old, currentPos) {
    var newPosition = old + currentPos;
    player1[1] = newPosition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}

function updateMoney_1(p1) {
    var updateMoney = 0;
    if (p1 < board.length) {
        updateMoney = player1[2] - board[p1 - 1];
    }
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    console.log(updateMoney);
}