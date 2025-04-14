 randomNumber =  parseFloat(Math.floor(Math.random() * 100) + 10);


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelectorAll('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess) { 
    if(isNaN(guess) || guess < 1 || guess >100){
        alert('please enter a valid number');
    } else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congrats! You guessed the right number!`);
        endGame();
    }else if(guess > randomNumber){
        displayMessage(`Your guessed number is too high!`);
    }else if(guess < randomNumber){
        displayMessage(`Your guessed number is too low!`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendchild(p);
    plaGame = false;
    newgame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGamebutton.addEventListener('click', function(e){
        randomNumber = randomNumber;
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesa}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        })
}

