
let score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
function onClickRPS(playerMove) {
    let cpuMoves = Math.random();
    let cpuMovesText = '';
    let result = '';

    if (cpuMoves < 1/3) {
        cpuMovesText='rock';
    } else if (cpuMoves > 1/3 && cpuMoves < 2/3) {
        cpuMovesText = 'paper';
    } else {
        cpuMovesText = 'scissors';
    }

    // If the user chose rock
    if (playerMove === 'rock' && cpuMovesText === 'rock') {
        result = 'Tie';
        score.ties += 1;
        console.log(score);
    } else if ((playerMove === 'rock' && cpuMovesText === 'paper')){
        score.losses += 1;
        console.log(score);
        result = 'You Lose';
    } else if ((playerMove === 'rock' && cpuMovesText === 'scissors')) {
        score.wins += 1;
        console.log(score);
        result = 'You Win'
    }


    // If the user chose paper
    if (playerMove === 'paper' && cpuMovesText === 'rock') {
        score.wins += 1;
        console.log(score);
        result = 'You win';
    } else if ((playerMove === 'paper' && cpuMovesText === 'paper')){
        score.ties += 1;
        console.log(score);
        result = 'Tie';
    } else if ((playerMove === 'paper' && cpuMovesText === 'scissors')){
        score.losses += 1;
        console.log(score);
        result = 'You Lose'
    }

    // If user choses scissors
    if (playerMove === 'scissors' && cpuMovesText === 'rock') {
        score.losses += 1;
        console.log(score);
        result = 'You Lose';
    } else if ((playerMove === 'scissors' && cpuMovesText === 'paper')){
        score.wins += 1;
        console.log(score);
        result = 'You win';
    } else if ((playerMove === 'scissors' && cpuMovesText === 'scissors')){
        score.ties += 1;
        console.log(score);
        result = 'Tie'
    }

    const alertdiv = document.querySelector('.alertdivp');
    alertdiv.innerText = `You chose ${playerMove}. The computer chose ${cpuMovesText}, Therefore ${result}`;

    const scorediv = document.querySelector('.scoredivp');
    scorediv.innerText = `You have ${score.wins} Win(s), ${score.losses} Loss(es), ${score.ties} Tie(s)`;


};

function scoreKeeper() {
    score.wins = 0;
    score.ties = 0;
    score.losses = 0;

    alert('Score reseted!!! --> Wins: 0, Losses: 0, Ties: 0')
    const resetScoreMessageDiv = document.querySelector('.alertdivp');
    resetScoreMessageDiv.innerText = `Score was reset !!!`;

    const resetScore = document.querySelector('.scoredivp');
    resetScore.innerText = `You have ${score.wins} Win(s), ${score.losses} Loss(es), ${score.ties} Tie(s)`;

};
const isAutoPlay = false;
let intervalID;
function autoPlay() {

    if (!isAutoPlay) {
        randomValueAutoClick = Math.random;
        intervalID = setInterval(function() {
            if(randomValueAutoClick < 1/3) {
            onClickRPS('rock');
            } else if (randomValueAutoClick > 1/3 && randomValueAutoClick < 2/3) {
            onClickRPS('paper');
            } else {
            onClickRPS('scissors')
            };
        
        }, 500);
    } else {
        clearInterval(intervalID);
        isAutoPlay = false;
    }

}
const rockButtonEventListener = document.querySelector('.rockclass')
rockButtonEventListener.addEventListener('click', () => {
    onClickRPS('rock')
})


const scissorsButtonEventListener = document.querySelector('.scissorsclass')
scissorsButtonEventListener.addEventListener('click', () => {
    onClickRPS('scissors');
})

const paperButtonEventListener = document.querySelector('.paperclass')
paperButtonEventListener.addEventListener('click', () => {
    onClickRPS('paper');
})

const resetScoreEventListener = document.querySelector('.resetscoreclass')
resetScoreEventListener.addEventListener('click', () => {
    scoreKeeper();
})


document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        onClickRPS('rock');

    } else if (event.key === 'p') {
        onClickRPS('paper');

    } else if (event.key === 's') {
        onClickRPS('scissors')

    } else {
        console.log('');
    }
})
