import random

class SnakeAndLadder:
    def __init__(self):
        self.board = [i for i in range(101)]  # Board with 100 cells (index 0 unused)
        self.snakes = {16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78}  # Snakes
        self.ladders = {1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100}  # Ladders
        self.player_position = 0  # Starting position of the player

    def roll_dice(self):
        """Simulates rolling a dice by generating a random integer between 1 and 6."""
        return random.randint(1, 6)

    def play_turn(self):
        """Executes a single turn of the game: rolling the dice, moving, and handling snakes/ladders."""
        roll = self.roll_dice()
        print(f"Player rolled: {roll}")
        self.player_position += roll

        # Ensure player doesn't exceed the last position
        if self.player_position > 100:
            self.player_position = 100

        # Check for snakes or ladders
        if self.player_position in self.snakes:
            print(f"Oops! Snake! Moving down from {self.player_position} to {self.snakes[self.player_position]}")
            self.player_position = self.snakes[self.player_position]
        elif self.player_position in self.ladders:
            print(f"Yay! Ladder! Moving up from {self.player_position} to {self.ladders[self.player_position]}")
            self.player_position = self.ladders[self.player_position]

        print(f"Player is now at position {self.player_position}\n")
        return self.player_position

    def play_game(self):
        """Controls the main game loop."""
        print("Welcome to Snake and Ladder Game!")
        while self.player_position < 100:
            input("Press Enter to roll the dice...")  # Wait for player to roll the dice
            position = self.play_turn()  # Play turn and move player accordingly
            if position == 100:
                print("Congratulations! You've won the game!")
                break

# To play the game
game = SnakeAndLadder()
game.play_game()
