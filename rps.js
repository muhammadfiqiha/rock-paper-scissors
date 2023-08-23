// function to return random between Rock, Paper, Scissors
const getComputerChoice = () => {
    const array = ['Rock', 'Paper', 'Scissors']

    return array[Math.floor(Math.random() * array.length)]
}

//function to play a single round
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
    let player = 0, com = 0, checkResult;
    for (let i = 0; i < 5; i++){
        let getPlayerChoice = prompt('Choose between rock, paper, or scissors: ')

        //check user input
        if ( 
            (getPlayerChoice.toLowerCase() === 'rock') ||
            (getPlayerChoice.toLowerCase() === 'paper') ||
            (getPlayerChoice.toLowerCase() === 'scissors')
        ) {
            checkResult = playRound(getComputerChoice(), getPlayerChoice);
            if (checkResult === 0) {
                ++com;
            } else if (checkResult === 1) {
                ++player;
            } else {
                --i;
            }
            console.log('Score: You ' + player + '-' + com + ' Computer')
        } else {
            alert('Please insert between rock, paper, or scissors!')
            --i;
        }
    }

    if(com > player) {
        console.log('Game Ended! You Lose with score ' + player + '-' + com)
    } else {
        console.log('Game Ended! You Win with score ' + player + '-' + com)
    }
}

playGame()