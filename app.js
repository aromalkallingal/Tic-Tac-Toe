var gameBoard = ['', '', '', '', '', '', '', '', ''];

function boardDisplay() {
    for (let i = 1; i <= gameBoard.length; i++) {
        var box1 = document.getElementById(`gameCell${i}`);
        box1.innerHTML = gameBoard[i - 1];
    }
}

let count = 0;
function boxElement(atr) {
    let box = document.getElementById(`gameCell${atr}`);
    if (count % 2 === 0 && box.innerHTML === '') {
        gameBoard[atr - 1] = 'X';
        count++;
    } else if (box.innerHTML === '') {
        gameBoard[atr - 1] = 'O';
        count++;
    }
    console.log(count);
    if (count >= 9) {
        drawmatch();
    }
    boardDisplay();
    gamePoint(gameBoard);
}

function gamePoint(arr) {
    if ((arr[0] === arr[1] && arr[1] === arr[2]) && arr[1] != '') {
        if (arr[0] === 'X') finalResult('X');
        else if (arr[0] === 'O') finalResult('O');
    }
    if ((arr[3] === arr[4] && arr[4] === arr[5]) && arr[3] != '') {
        if (arr[3] === 'X') finalResult('X');
        else if (arr[3] === 'O') finalResult('O');
    }
    if ((arr[6] === arr[7] && arr[7] === arr[8]) && arr[6] != '') {
        if (arr[6] === 'X') finalResult('X');
        else if (arr[6] === 'O') finalResult('O');
    }
    if ((arr[0] === arr[3] && arr[3] === arr[6]) && arr[0] != '') {
        if (arr[0] === 'X') finalResult('X');
        else if (arr[0] === 'O') finalResult('O');
    }
    if ((arr[1] === arr[4] && arr[4] === arr[7]) && arr[1] != '') {
        if (arr[1] === 'X') finalResult('X');
        else if (arr[0] === 'O') finalResult('O');
    }
    if ((arr[2] === arr[5] && arr[5] === arr[8]) && arr[2] != '') {
        if (arr[2] === 'X') finalResult('X');
        else if (arr[2] === 'O') finalResult('O');
    }
    if ((arr[0] === arr[4] && arr[4] === arr[8]) && arr[0] != '') {
        if (arr[0] === 'X') finalResult('X');
        else if (arr[0] === 'O') finalResult('O');
    }
    if (((arr[2] === arr[4] && arr[4] === arr[6]) && arr[2] != '')) {
        if (arr[2] === 'X') finalResult('X');
        else if (arr[2] === 'O') finalResult('O');
    }

}

function finalResult(input) {
    var x = document.getElementById("gameBoard");
    x.style.filter = 'blur(10px)';
    var y = document.getElementById('result');
    y.innerHTML = '"' + input + '" won this game';

    x.addEventListener("click", handler, true);

    function handler(e) {
        e.stopPropagation();
        e.preventDefault();
        return false;
    }
}

function refreshPage() {
    window.location.reload();
}

function drawmatch() {
    var a = document.getElementById('result');
    a.innerHTML = 'Its a draw match';
}