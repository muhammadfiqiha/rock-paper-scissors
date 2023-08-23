// function to return random between Rock, Paper, Scissors
const getComputerChoice = () => {
    const array = ['Rock', 'Paper', 'Scissors']

    return array[Math.floor(Math.random() * 3)]
}

const playRound = (computerSelection, playerSelection) => {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()

    if (playerSelection === computerSelection) {
        console.log('Tie! ' + playerSelection + ' meets ' + computerSelection)
        return 2
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
        ) {
        console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection)
        return 0
    } else {
        console.log('You Win! ' + playerSelection + ' beats ' + computerSelection)
        return 1
    }
}

const playGame = () => {
    let player = 0, com = 0, check;
    for (let i = 0; i < 5; i++){
        let getPlayerChoice = prompt('Choose between rock, paper, or scissors: ')
        check = playRound(getComputerChoice(), getPlayerChoice);
        if (check === 0) {
            ++com;
        } else if (check === 1) {
            ++player;
        } else {
            --i;
        }
    }

    if(com > player) {
        console.log('Game Ended! You Lose with score ' + player + '-' + com)
    } else {
        console.log('Game Ended! You Won with score ' + player + '-' + com)
    }
}

playGame()