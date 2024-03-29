/*jshint esversion: 6*/

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const computerWaiting = document.getElementById('computerWaiting');

const resultLine = document.getElementById('result');

const scoreLine = document.getElementById('score');

var score = 0;

var computerScore = 0;

const generateResults = function(action){

  computerWaiting.style.display = 'none';
  resultLine.style.display = 'none';

  let playerAction = action.target.getAttribute('id');

  let result = '';

  let computerAction = '';
  
  let computerInt = Math.floor(Math.random() * 3);

  switch(computerInt) {
    case 0:
      computerAction =  'rock';
      break;
    case 1:
      computerAction = 'paper';
      break;
    case 2:
      computerAction =  'scissors';
      break;
  }

  console.log('Computer Int: ' + computerInt);
  console.log('Computer Action: ' + computerAction);

  if (playerAction === computerAction) {
    result = 'Draw!';
  } else if (playerAction === 'rock') {
    switch(computerAction) {
      case 'paper':
        result = 'You Lose!';
        break;
      case 'scissors':
        result = 'You Win!';
        break;
    }
  } else if (playerAction === 'paper') {
    switch(computerAction) {
      case 'scissors':
        result = 'You Lose!';
        break;
      case 'rock':
        result = 'You Win!';
        break;
    } 
  } else if (playerAction === 'scissors') {
    switch(computerAction) {
      case 'rock':
        result = 'You Lose!';
        break;
      case 'paper':
        result = 'You Win!';
        break;
    } 
  }

  switch(result) {
    case 'You Win!':
      score++;
      break;
    case 'You Lose!':
      computerScore++;
      break;
    case 'Draw!':
      break;
  }


  setTimeout(function(){
    computerWaiting.style.display = 'block';
    computerWaiting.innerHTML = 'Computer Chooses.'; 
    setTimeout(function(){
      computerWaiting.innerHTML = 'Computer Chooses..';
      setTimeout(function(){
        computerWaiting.innerHTML = 'Computer Chooses...';
        setTimeout(function(){
          resultLine.style.display = 'block';
          computerWaiting.innerHTML = 'Computer Chooses: ' + computerAction.toUpperCase();
          resultLine.innerHTML = result;
          scoreLine.innerHTML ='Player: ' + score + ' | Computer: ' + computerScore; 
          if (score === 3) {
            resultLine.innerHTML = 'YOU WIN THE GAME!!!';
            score = 0;
            computerScore = 0;
          }else if (computerScore === 3){
            resultLine.innerHTML = 'YOU LOSE THE GAME!!!';
            score = 0;
            computerScore = 0;
          }
        }, 800);
      }, 800);
    }, 800);
  }, 800);
};

const changeBackgroundColorBlue = function(action) {
  action.target.style.backgroundColor = '#00FFFF';
};

const changeBackgroundColorGreen = function(action) {
  action.target.style.backgroundColor = '#00FF00';
};

const changeBackgroundColorYellow = function(action) {
  action.target.style.backgroundColor = '#FFFF00';
};

const revertBackgroundColor = function(action) {
  action.target.style.backgroundColor = '';
};

rock.onmouseover = changeBackgroundColorBlue;
paper.onmouseover = changeBackgroundColorGreen;
scissors.onmouseover = changeBackgroundColorYellow;

rock.onmouseout = revertBackgroundColor;
paper.onmouseout = revertBackgroundColor;
scissors.onmouseout = revertBackgroundColor;

rock.onclick = generateResults;
paper.onclick = generateResults;
scissors.onclick = generateResults;
