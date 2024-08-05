const storyContainer = document.getElementById('story-container');
const storyText = document.getElementById('story-text');
const choices = document.getElementById('choices');

const story = {
    1: {
        text: "You find yourself in a dark forest. You see two paths ahead. Do you go left or right?",
        choices: [
            { text: "Go Left", next: 2 },
            { text: "Go Right", next: 3 }
        ]
    },
    2: {
        text: "You walk down the left path and encounter a friendly elf. Do you talk to him or keep walking?",
        choices: [
            { text: "Talk to the elf", next: 4 },
            { text: "Keep walking", next: 5 }
        ]
    },
    3: {
        text: "You walk down the right path and fall into a trap. Game Over.",
        choices: [
            { text: "Start Over", next: 1 }
        ]
    },
    4: {
        text: "The elf gives you a magical sword. You win! Do you want to play again?",
        choices: [
            { text: "Play Again", next: 1 }
        ]
    },
    5: {
        text: "You get lost and run out of supplies. Game Over.",
        choices: [
            { text: "Start Over", next: 1 }
        ]
    }
};

function makeChoice(choice) {
    const nextPart = story[choice];
    storyText.textContent = nextPart.text;
    choices.innerHTML = '';
    nextPart.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => makeChoice(choice.next);
        choices.appendChild(button);
    });
}
