// Game logic ie rock beats scissors, etc
// Determine winner
// Display winner

// Get user answer

const player_choice = () => {
    flag = false;
    let player_choice = parseInt(prompt("Select a number: 1.) Rock, 2.) Paper, or 3.) Scissors... "));
    while(!flag){
        if(player_choice == 1 || player_choice == 2 || player_choice == 3){
            flag = true;
        }
        else{
            console.log("Please select one of the given answers.")
            player_choice = parseInt(prompt("Select a number: 1.) Rock, 2.) Paper, or 3.) Scissors... "));
        }
    }
    
    return(player_choice);
}

const computer_choice = () => {
    const computer_choice = Math.floor(Math.random() * 3);
    return(computer_choice + 1);
}

const convert_to_words = (answer_to_convert) => {
    switch(answer_to_convert){
        case 1:
            return("Rock");
        case 2:
            return("Paper");
        case 3: 
            return("Scissors");
    }
}

const compare_choices = (player_answer, computer_answer) => {
    if(player_answer == "Rock" && computer_answer == "Rock"){
        return "Draw...";
    }
    else if(player_answer == "Rock" && computer_answer == "Paper"){
        return "Computer Wins!";
    }
    else if(player_answer == "Rock" && computer_answer == "Scissors"){
        return "Player Wins!";
    }
    else if(player_answer == "Paper" && computer_answer == "Rock"){
        return "Player Wins!";
    }
    else if(player_answer == "Paper" && computer_answer == "Paper"){
        return "Draw...";
    }
    else if(player_answer == "Paper" && computer_answer == "Scissors"){
        return "Computer Wins!";
    }
    else if(player_answer == "Scissors" && computer_answer == "Rock"){
        return "Computer Wins!";
    }
    else if(player_answer == "Scissors" && computer_answer == "Paper"){
        return "Player Wins!";
    }
    else if(player_answer == "Scissors" && computer_answer == "Scissors"){
        return "Draw";
    }
}

const game = () => {
    let iterate = 0;

    while(iterate < 5){
        let player = convert_to_words(player_choice());
        let computer = convert_to_words(computer_choice());

        console.log("Player selected: " + player);
        console.log("Computer selected: " + computer);
        console.log(compare_choices(player, computer));
        iterate++;
    }
}

game();