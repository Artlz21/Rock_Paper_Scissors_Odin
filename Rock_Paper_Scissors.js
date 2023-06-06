let player_score = 0;
let computer_score = 0;
let winner = document.createElement("h1");
document.querySelector("body").appendChild(winner);

const computer_choice = () => {
    const computer_choice = Math.floor(Math.random() * 3);
    switch(computer_choice + 1){
        case 1:
            return("Rock");
        case 2:
            return("Paper");
        case 3: 
            return("Scissors");
    }
}

const player_Choice = (choice) => {
    switch(choice){
        case 1: 
            return ("Rock");
        case 2:
            return ("Paper");
        case 3:
            return ("Scissors");
    }
}

const compare_choices = (player_answer, computer_answer) => {
    if(player_answer == computer_answer){
        return ("Draw...");
    }
    else if((player_answer == "Rock" && computer_answer == "Scissors") || 
            (player_answer == "Paper" && computer_answer == "Rock") ||
            (player_answer == "Scissors" && computer_answer == "Paper")){
                return ("Player Wins!");
            }
    else{
        return ("Computer Wins!");
    }
}

const display_Result = (player, computer, result) => {
    let player_choice_display = document.createElement("p");
    let computer_choice_display = document.createElement("p");
    let winner_display = document.createElement("p");

    document.querySelector("div").appendChild(player_choice_display);
    document.querySelector("div").appendChild(computer_choice_display);
    document.querySelector("div").appendChild(winner_display);

    player_choice_display.innerText = "Player choose: " + player;
    computer_choice_display.innerText = "Computer choose: " + computer;
    winner_display.innerText = result;
}

const game = (player_choice) => {
    let player = player_Choice(player_choice);
    let computer = computer_choice();
    let result = compare_choices(player, computer);
    let score;

    if(result === "Player Wins!"){
        score = 1;
    }
    else if(result === "Computer Wins!"){
        score = -1;
    }
    else{
        score = 0;
    }

    score_tracker(score);

    display_Result(player, computer, result);
}

const create_button = (text, num) => {
    new_button = document.createElement("button");
    new_button.innerText = text;
    new_button.addEventListener("click", () => game(num));
    document.querySelector("body").appendChild(new_button);
}


const score_tracker = (score) => {

    if(score == 1){
        player_score += score;
    }
    else if(score == -1){
        computer_score += (-1 * (score));
    }    

    let display_Result = document.createElement("div");
    let results = document.createElement("h3");

    document.querySelector("body").appendChild(display_Result);
    display_Result.appendChild(results);
    document.querySelector("h3").innerText = "Player Score: " + player_score + "   "
     + "Computer Score: " + computer_score;

    if(computer_score == 5 || player_score == 5){
        if(computer_score == 5){
            winner.innerText = "Computer scored 5 Winner!";
            player_score = 0;
            computer_score = 0;
        }
        else if(player_score == 5){
            winner.innerText = "Player scored 5 Winner!";
            player_score = 0;
            computer_score = 0;
        }
    }
}

const score_point = (score) => {
    return (score);
}

(() => {
    create_button("Rock", 1);
    create_button("Paper", 2);
    create_button("Scissors", 3);
})();