let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let startTime = Date.now();

const encouragements = [
    "Cupu!",
    "Lama!",
    "Gini doang ga bisa?",
    "Banyak gaya.",
    "Gak jelas."
];

const praises = [
    "Okelah.",
    "Modal hoki.",
    "Gini doang seneng?",
    "Kelamaan.",
    "Gua juga bisa."
];

function makeGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const messageElement = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');
    const timeElement = document.getElementById('time');
    
    attempts++;
    attemptsElement.textContent = attempts;

    if (userGuess === randomNumber) {
        const timeTaken = Math.floor((Date.now() - startTime) / 1000);
        timeElement.textContent = timeTaken;
        messageElement.textContent = praises[Math.floor(Math.random() * praises.length)] + " You guessed correctly!";
    } else {
        messageElement.textContent = encouragements[Math.floor(Math.random() * encouragements.length)] + " Try again!";
    }
}
