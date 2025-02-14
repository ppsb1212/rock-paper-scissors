let score = {
  wins: 0,
  losses: 0,
  ties: 0
}

document.querySelector('.js-rock').addEventListener('click',() =>{playGame('rock')});

document.querySelector('.js-paper').addEventListener('click',() =>{playGame('paper')});

document.querySelector('.js-scissors').addEventListener('click',() =>{playGame('scissors')});

document.querySelector('.js-reset').addEventListener('click',() =>{
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  document.querySelector('.js-option').innerHTML = '';
  document.querySelector('.js-result').innerHTML = '';
  showScore();
})

showScore();

function showScore(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}  Ties: ${score.ties}  Looses: ${score.losses}`;
}

function playGame(playerMove){
  computerMove = computerOption();
  console.log(computerMove);
  
  if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      document.querySelector('.js-result').innerHTML = 'Tie';
      score.ties++;
    }
    else if(computerMove === 'paper'){
      document.querySelector('.js-result').innerHTML = 'You lose';
      score.losses++;
    }
    else if(computerMove === 'scissors'){
      document.querySelector('.js-result').innerHTML = 'You win';
      score.wins++;
    }
  }

  else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
      document.querySelector('.js-result').innerHTML = 'You win';
      score.wins++;
    }
    else if(computerMove === 'paper'){
      document.querySelector('.js-result').innerHTML  = 'Tie';
      score.ties++;
    }
    else if(computerMove === 'scissors'){
      document.querySelector('.js-result').innerHTML = 'You lose';
      score.losses++;
    }
  }

  else if (playerMove === 'scissors'){
    if(computerMove === 'rock'){
      document.querySelector('.js-result').innerHTML = 'You lose';
      score.losses++;
    }
    else if(computerMove === 'paper'){
      document.querySelector('.js-result').innerHTML = 'You win';
      score.wins++;
    }
    else if(computerMove === 'scissors'){
      document.querySelector('.js-result').innerHTML = 'Tie';
      score.ties++;
    }
  }

  document.querySelector('.js-option').innerHTML = `You <img src="images/${playerMove}.png"> : Computer <img src="images/${computerMove}.png">`;
  showScore();
  }


function computerOption(){
  let computerMove = '';
  let number = Math.random();
  if(number <= 1/3 && number > 0){
    computerMove = 'rock';
  }
  else if (number > 1/3 && number <= 2/3){
    computerMove = 'paper';
  }
  else if(number > 2/3 && number < 3/3){
    computerMove = 'scissors';
  }
  return computerMove;
}