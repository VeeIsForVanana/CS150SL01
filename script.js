let content = document.getElementById("content");
let player_score = 0;
let ai_score = 0;
let player_scoreboard;
let ai_scoreboard;
let text_prompt;
let rockButton;
let scissorButton;
let paperButton;
// player_wins contains a key: value pair, for key a play and value the counter-play that lets original play win
const wins = {
    "rock": "scissor",
    "scissor": "paper",
    "paper": "rock",
};
function setupRound() {
    player_scoreboard = document.getElementById("player_scoreboard");
    if (player_scoreboard == null)
        console.log("player scoreboard doesn't exist");
    ai_scoreboard = document.getElementById("ai_scoreboard");
    if (ai_scoreboard == null)
        console.log("ai scoreboard doesn't exist");
    update_scoreboards();
    text_prompt = document.getElementById("prompt");
    rockButton = document.getElementById("rockButton");
    rockButton.onclick = () => player_play("rock");
    scissorButton = document.getElementById("scissorsButton");
    scissorButton.onclick = () => player_play("scissor");
    paperButton = document.getElementById("paperButton");
    paperButton.onclick = () => player_play("paper");
}
function update_scoreboards() {
    player_scoreboard.textContent = `${player_score}`;
    ai_scoreboard.textContent = `${ai_score}`;
}
function player_play(choice) {
    let ai_choice = ai_play();
    let win_round = false;
    if (wins[choice] == ai_choice) {
        player_score += 1;
        win_round = true;
    }
    else if (choice == ai_choice) {
    }
    else {
        ai_score += 1;
    }
    text_prompt.textContent = `You played ${choice}, the AI played ${ai_choice}. You ${win_round ? 'win' : 'lose'}`;
    console.log(`You played ${choice}, the AI played ${ai_choice}. You ${win_round ? 'win' : 'lose'}`);
    update_scoreboards();
    determineWin();
    console.log("playing");
}
function determineWin() {
    if (player_score == 5) {
    }
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
