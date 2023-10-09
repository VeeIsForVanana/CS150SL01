let content = document.getElementById("content")
let player_score = 0
let ai_score = 0

let player_scoreboard
let ai_scoreboard

let prompt

// player_wins contains a key: value pair, for key a play and value the counter-play that lets original play win
const wins = {
  "rock": "scissor",
  "scissor": "paper",
  "paper": "rock",
}

function setupRound() {
  player_scoreboard = document.getElementById("player_scoreboard")
  if (player_scoreboard == null)
    console.log("player scoreboard doesn't exist")

  ai_scoreboard = document.getElementById("ai_scoreboard")
  if (ai_scoreboard == null)
    console.log("ai scoreboard doesn't exist")
  update_scoreboards()

  prompt = document.getElementById("prompt")
  
  let rockButton = document.getElementById("rockButton")
  rockButton.onclick = () => player_play("rock")

  let scissorButton = document.getElementById("scissorsButton")
  scissorButton.onclick = () => player_play("scissor")

  let paperButton = document.getElementById("paperButton")
  paperButton.onclick = () => player_play("paper")
}

function update_scoreboards () {
  player_scoreboard.textContent = `${player_score}`
  ai_scoreboard.textContent = `${ai_score}`
}

function player_play(choice: string) {
  ai_choice = ai_play()
  if(wins[choice] == ai_choice) {
    player_score += 1

  }
  else if(choice == ai_choice) {
    
  }
  else {
    ai_score += 1
  }
  update_scoreboards()
}

function ai_play(): string {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock"
    case 1:
      return "paper"
    case 2:
      return "scissors"
  }
}

setupRound()