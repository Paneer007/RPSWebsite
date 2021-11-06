function computerPlay(){
    let random_int=Math.floor(Math.random()*3);
    return random_int
}
function resetScore(continue_button){
    ai_count=0;
    player_count=0;
    playerScore.textContent= player_count;
    computerScore.textContent = ai_count;
    document.body.removeChild(continue_button);

}
function endRslt(){
    if (player_count==5){
        result.textContent='You the player Wins';
        rsltdiv.appendChild(result);
        let continue_button= document.createElement('button');
        continue_button.setAttribute('class','CntNBttn')
        document.body.appendChild(continue_button);
        continue_button.innerHTML='Click me to reset the score';
        continue_button.addEventListener('click',()=>{
        ai_count=0;
        player_count=0;
        playerScore.textContent= player_count;
        computerScore.textContent = ai_count;
        document.body.removeChild(continue_button);
        result.textContent='';
        playerMove.textContent='';
        computerMove.textContent='';
        gameResult.textContent='Play Game to Show Result';
        });
        
    }else if (ai_count==5){
        result.textContent='The Computer wins';
        rsltdiv.appendChild(result);
        let continue_button= document.createElement('button');
        document.body.appendChild(continue_button);
        continue_button.innerHTML='Click me to reset the score';
        continue_button.addEventListener('click',()=>{
        ai_count=0;
        player_count=0;
        playerScore.textContent= player_count;
        computerScore.textContent = ai_count;
        document.body.removeChild(continue_button);
        result.textContent='';
        playerMove.textContent='';
        playerMove.textContent='';
        gameResult.textContent='';

        });
    }

}

function playRound(playerSelection,computerSelection=computerPlay()){
    console.log(`You player played ${playerSelection} `)
    console.log(`AI player played ${computerSelection}`)
    if (playerSelection==computerSelection){
        return ('Its a draw , you and the computer played the same move')
    }else{
        if(playerSelection == 'rock'){
            if (computerSelection=='scissor'){
                player_count++;
                return('You win, rock beats scissor')
            }else if (computerSelection=='paper'){
                ai_count++;
                return('You lose, paper beats rock')
            }
        }else if (playerSelection =='paper'){
            if (computerSelection=='scissor'){
                ai_count++;
                return('You lose, scissor beats paper')
            } else if (computerSelection=='rock'){
                player_count++;
                return('You win, paper beats rock')
            }
        }else if (playerSelection == 'scissor'){
            if (computerSelection =='paper'){
                player_count++;
                return('You win, scissor beats paper')
            }else if (computerSelection == 'rock'){
                ai_count++;
                return ('You lose, rock beats scissor ')
            }
        }
    }
}
//note edit the game function because we now take inputs to 5
function game(userInput){
    let moves=['rock','paper','scissor']
    let computerSelection=moves[computerPlay()];
    let playerSelection=userInput;
    playerSelection=playerSelection.toLowerCase();
    show_player_enemy_move(playerSelection,computerSelection);
    if (!(moves.includes(playerSelection))){
        console.log('Enter a proper move');
        i--
    }else{
        let result=(playRound(playerSelection,computerSelection,player_count, ai_count));
        gameResult.textContent=result;
        console.log(result);
    }
}
function show_player_enemy_move(player,enemy){
    playerMove.textContent=player;
    computerMove.textContent=enemy;
}
let player_count=0;
let ai_count=0;
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
playerScore.textContent= player_count;
computerScore.textContent = ai_count;
let playerMove=document.querySelector('#playerMove');
let computerMove = document.querySelector('#computerMove');
let gameResult=document.querySelector('#gameResult');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click',()=>{
        let value =  button.id;
        console.log(value);
        game(value);
        playerScore.textContent= player_count;
        computerScore.textContent = ai_count;
        console.log(player_count);
        console.log(ai_count);
        endRslt();
    });
});
playerScore.textContent= player_count;
computerScore.textContent = ai_count;
const rsltdiv =document.createElement('div');
rsltdiv.setAttribute('id','rsltdiv');
document.body.appendChild(rsltdiv);
const result= document.createElement('p');

//buttons.forEach((button)) write the function which takes the arguments for the game function