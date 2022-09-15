let gameBoardModule = (function() {
    let gameBoard = ["X"];
    return {gameBoard};
})();


let displayControllerModule = (function() {
    let testF = () => {console.log("testing private function call inside of a module object.....")};
    return {testF};
})();

let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => {playerName;
    console.log("this is the name of the player" + playerNumber + "....." + playerName);}
    return {getPlayerName, playerName, playerNumber, assignedXO};
};

let renderArrayToScreenModule = (function() {
    let gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes[0].textContent = gameBoardModule.gameBoard;
    console.log("show me the array", gameBoardModule.gameBoard);
    console.log("show me node list", gridBoxes);
    return{};
})();

let Justin = createPlayer("Justin", 1, "X");
let James = createPlayer("James", 2, "O");
renderArrayToScreenModule;

