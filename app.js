let gameBoardModule = (function() {
    let gameBoard = [];
    return{};
})

let displayControllerModule = (function() {
    let testF = () => {console.log("testing private function call inside of a module object.....")};

})();

let createPlayer = (playerName, playerNumber, assignedXO) => {
    let playerName = () => {playerName;
    console.log("this is the name of the player" + playerNumber + "....." + playerName);}
    return {getPlayerName, playerName, playerNumber, assignedXO};
};

let Justin = createPlayer("Justin", 1, "X");
let James = createPlayer("James", 2, "O");