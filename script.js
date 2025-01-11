document.addEventListener("DOMContentLoaded", () => {
    const rollButton = document.getElementById("rollButton");
    const message = document.getElementById("message");
    const board = document.getElementById("board");

    let playerPosition = 0;

    // Snakes and ladders positions
    const snakes = {
        16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78
    };

    const ladders = {
        1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100
    };

    // Create the board
    for (let i = 100; i >= 1; i--) {
        const square = document.createElement("div");
        square.textContent = i;
        square.classList.add("square");

        // Add snake styling and icon
        if (snakes[i]) {
            square.classList.add("snake");
            const snakeIcon = document.createElement("span");
            snakeIcon.textContent = "🐍";  // Snake emoji
            snakeIcon.classList.add("snake-icon");
            square.appendChild(snakeIcon);
        }
        
        // Add ladder styling and icon
        if (ladders[i]) {
            square.classList.add("ladder");
            const ladderIcon = document.createElement("span");
            ladderIcon.textContent = "🪜";  // Ladder emoji
            ladderIcon.classList.add("ladder-icon");
            square.appendChild(ladderIcon);
        }

        // Append the square to the board
        board.appendChild(square);
    }

    // Roll the dice function
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Move player and handle snakes and ladders
    function movePlayer(roll) {
        playerPosition += roll;
        if (playerPosition > 100) {
            playerPosition = 100;
        }

        // Check if player landed on snake or ladder
        if (snakes[playerPosition]) {
            playerPosition = snakes[playerPosition];
        } else if (ladders[playerPosition]) {
            playerPosition = ladders[playerPosition];
        }

        message.textContent = `Player is at position ${playerPosition}`;
        updateBoard();
    }

    // Update the board to show player position
    function updateBoard() {
        const squares = board.children;
        for (let i = 0; i < squares.length; i++) {
            if (i === 100 - playerPosition) {
                squares[i].style.backgroundColor = "yellow"; // Player's position
            } else {
                squares[i].style.backgroundColor = "#f4f4f4"; // Default background color
            }
        }
    }

    // When the roll button is clicked
    rollButton.addEventListener("click", () => {
        const roll = rollDice();
        movePlayer(roll);
    });

    // Initial update of the board
    updateBoard();
});
