let gameBoardModule = (function() {
    let gameBoard = ["X"];
    return {gameBoard};
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

    let testF = () => {console.log("testing")};
    return {testF};

})();


let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => { playerName;
        console.log(playerName + "" + playerName); }
        return {getPlayerName, playerName, playerNumber, assignedXO};
};

let Justin = createPlayer("Justin", 1, "X");
let James = createPlayer("James", 2, "O");