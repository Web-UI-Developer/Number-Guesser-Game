// Variables

let min = 5,
    max = 25,
    winnNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI Elements 

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector(' .message');

// set min and max value dinamically 
minNum.textContent = min;
maxNum.textContent = max;

// Play Again 

game.addEventListener('mousedown', function(e){
    if (e.target.className === 'play-again'){
        window.location.reload();
    }
});

// listen for guess btn

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    //console.log(guess);

    // validating input values
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a Number between ${min} and ${max}`, 'red');
    }

    // check for win number 

    if (guess === winnNum){

        gameOver (true, `${winnNum} is correct YOU ARE WINNER`,'green')
        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green';
        // setMessage(`${winnNum} is correct YOU ARE WINNER`,'green');
    } else {
        guessesLeft  -= 1;

        if (guessesLeft === 0){

            gameOver (false, `${winnNum} was winning number You Lost!`, 'red')
            // guessInput.disabled = true;
            // guessInput.style.borderColor = 'red';
            // setMessage(`${winnNum} was winning number You Lost!`, 'red');
        } else {
            guessInput.style.borderColor = 'red';
            guessInput.vlaue = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guess left`, 'red')
        }
    }
    
});

function gameOver (won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    // play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max){
    return (Math.floor(Math.random()*(max-min+1)+min));
};

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
};