let createPlayer = () => {
    for (let i = 0 ; i < 4; i++) {

        if (gameBoardModule.playArray.length >= 6) {
            gameBoardModule.makePlayerMove();
            break;
        } else if (gameBoardModule.playArray.length == 0) {
            let playerName = prompt("what is your first name?");

            if (playerName == "" || playerName == null) {
                alert("Sorry, name cannot be blank!");
                continue;
            }

            let playerNumber = 1;
            let assignedXO = "X";
            alert("You are player 1,  and your assigned letter is  X!");
            gameBoardModule.playArray.push(playerName, playerNumber, assignedXO);
            console.log("show me the contents of the playArray.....", gameBoardModule.playArray);
        
        } else if (gameBoardModule.playArray.length != 0) {
            let playerName = prompt("What is your first name, sir?");

            if (playerName == "" || playerName == null) {
                alert("Sorry, name cannot be blank!");
                continue;
            }

            let playerNumber = 2;
            let assignedXO = "O";
            alert("You are player 2, and your assigned letter is o!");
            gameBoardModule.playArray.push(playerName, playerNumber, assignedXO);
            console.log("Show me the contents of the playerArray", gameBoardModule.playArray);   
        }
    }
};

let gameBoardModule = (function() {
    let gameBoard = [];
    let playArray = [];

    let makePlayerMove = () => {
        if (playArray.length == 6 && gameBoard.length < 9) {

            if (gameBoard.length == 0) {
                alert("Player 1, please make your move!");
                gameBoard.push(playArray[2]);
                console.log("Show me the current gameBoardArray.....", gameBoard);
            } else if (gameBoard[gameBoard.length - 1] == "X") {
                alert("Player 2, please make your move!");
                gameBoard.push(playArray[5]);
                cosole.log("Show me the current gameBoard Array.....", gameBoard);
            } 
            else if (gameBoard[gameBoard.length - 1] == "O") {
                alert("Player 1, please make your move!");
                gameBoard.push(playArray[2]);
                cosole.log("Show me the current gameBoard Array.....", gameBoard);
            } 
        };
    }
    return {gameBoard, playArray, makePlayerMove};
})();


let displayControllerModule = (function() {
    const makeMove = document.querySelectorAll(".game-board-button");

    let index = 0;
    makeMove.forEach(makeMoves => {
        makeMoves.dataset.linkedButton = index;
        makeMoves.addEventListener("click", renderArrayToScreen);

        function renderArrayToScreen() {
            const gridBoxes = document.querySelectorAll(".grid-box");

            let index = 0;
            gridBoxes.forEach(gridBox => {
                gridBox.dataset.linkedButton = index;

                if (gridBox.getAttribute("data-linked-button") ==makeMoves.getAttribute("data-linked-button")) {
                    gridBox.textContent = gameBoardModule.gameBoard[gameBoardModule.gameBoard.length - 1];
                    console.log(makeMoves.dataset.linkedButton);
                    console.log(gridBox.dataset.linkedButton);
                }
            index++;
            }) 
        }
    index++;
    })

    // 
    
    const startGameButton = document.querySelector(".start-game-button");
    startGameButton.addEventListener("click", createPlayer);
    return{};

})();


