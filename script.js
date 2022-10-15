const gameOptionsArr = ['scissors', 'rock', 'paper'];
let roundResult = {
    playerResult: '',
    playerRoundScore: 0
};

function computerPlay(){
    return gameOptionsArr[Math.floor(Math.random() * gameOptionsArr.length)];
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        roundResult.playerResult = 'It\'s a tie! You and computer are thinking alike!';
    } else {
        switch (playerSelection) {
            case 'rock':
                (computerSelection === 'scissors') ? (roundResult.playerResult = 'You\'re a winner! Rock beats Scissors!', roundResult.playerRoundScore = 1)
                    : (roundResult.playerResult = 'You\'ve lost this round. Paper beats Rock', roundResult.playerRoundScore = -1);
                break;
            case 'scissors':
                (computerSelection === 'paper') ? (roundResult.playerResult = 'You\'re a winner! Scissors cut Paper!', roundResult.playerRoundScore = 1)
                    : (roundResult.playerResult = 'You\'ve lost this round. Rock beats Scissors', roundResult.playerRoundScore = -1);
                break;
            case 'paper':
                (computerSelection === 'rock') ? (roundResult.playerResult = 'You\'re a winner! Paper beats Rock!', roundResult.playerRoundScore = 1)
                    : (roundResult.playerResult = 'You\'ve lost this round. Scissors cut Paper', roundResult.playerRoundScore = -1);
        }
    }
    return roundResult;
}

function game () {
    const lost = 'You\'ve lost! Try and win this computer in another game!';
    const win = 'Congratulations! You\'ve beated this computer!';
    const tie = 'It\'s a tie! Play another game and try to win!';
    let totalGameScore = 0;

    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Choose Paper, Scissors or Rock to beat this computer');
        if (typeof playerSelection !== 'string') {
            i--;
            alert('You haven\'t typed in your choice! Try again and enter one of 3 options: Rock, Scissors or Paper!');
        } else if (!gameOptionsArr.includes(playerSelection.toLowerCase())) {
            i--;
            alert('Interesting choice! Try again and type in one of the next three options: Rock, Scissors or Paper!');
        } else {
            const computerSelection = computerPlay();
            console.log(playRound(playerSelection.toLowerCase(), computerSelection).playerResult);
            totalGameScore += (playRound(playerSelection.toLowerCase(), computerSelection)).playerRoundScore;
        }
    }

    (totalGameScore > 0) ? console.log(`Final Score: ${win}`)
    : (totalGameScore < 0) ? console.log(`Final Score: ${lost}`)
    : console.log(`Final Score: ${tie}`)
}

game();