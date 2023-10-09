var content = document.getElementById("content");
var player_score = 0;
var ai_score = 0;
var player_scoreboard;
var ai_scoreboard;
// player_wins contains a key: value pair, for key a play and value the counter-play that lets original play win
var wins = {
    "rock": "scissor",
    "scissor": "paper",
    "paper": "rock",
};
function setupRound() {
    player_scoreboard = document.getElementById("player_scoreboard");
    if (player_scoreboard == null)
        console.log("player scoreboard doesn't exist");
    player_scoreboard.textContent = "".concat(player_score);
    ai_scoreboard = document.getElementById("ai_scoreboard");
    if (ai_scoreboard == null)
        console.log("ai scoreboard doesn't exist");
    player_scoreboard.textContent = "".concat(ai_score);
    var rockButton = document.getElementById("rockButton");
    rockButton.onclick = function () { return player_play("rock"); };
    var scissorButton = document.getElementById("scissorsButton");
    scissorButton.onclick = function () { return player_play("scissor"); };
    var paperButton = document.getElementById("paperButton");
    paperButton.onclick = function () { return player_play("paper"); };
}
function player_play(choice) {
}
function ai_play() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
setupRound();
console.log(ai_play);
