const rollDiceButton = document.getElementById("roll-dice-button")

rollDiceButton.addEventListener("click", function(){
    //pick 2 random numbers between 1 and 6
    const player1Roll = Math.floor(Math.random() * 6) + 1
    const player2Roll = Math.floor(Math.random() * 6) + 1

    // Display the corresponding dice images
    document.getElementById("player-1-dice").src = `images/dice${player1Roll}.png`;

    document.getElementById("player-2-dice").src = `images/dice${player2Roll}.png`;

    document.getElementById("result").hidden = false;

    if (player1Roll > player2Roll) {
        document.getElementById("result").innerHTML = '<p id="text">Player 1 wins!</p>';
    }
    else if (player1Roll < player2Roll) {
        document.getElementById("result").innerHTML = '<p id="text">Player 2 wins!</p>';
    }
    else {
        document.getElementById("result").innerHTML = '<p id="text">Tie!</p>';
    }

    // alert(`Player 1 rolled: ${player1Roll}\nPlayer 2 rolled: ${player2Roll}`)
})



