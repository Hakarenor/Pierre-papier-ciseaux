const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const resultMessage = document.getElementById('result-message');
const choices = document.querySelectorAll('.choice');

let userScore = 0;
let compScore = 0;

function getCompChoice() {
    const choices = ['pierre', 'feuille', 'ciseaux'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(userChoice) {
    const compChoice = getCompChoice();
    let result = '';

    if (userChoice === 'rock' && compChoice === 'ciseaux') {
        result = 'Tu as gagné !';
        userScore++;
    } else if (userChoice === 'paper' && compChoice === 'pierre') {
        result = 'Tu as gagné !';
        userScore++;
    } else if (userChoice === 'scissors' && compChoice === 'feuille') {
        result = 'Tu as gagné !';
        userScore++;
    } else if (userChoice === 'rock' && compChoice === 'pierre' ||
               userChoice === 'paper' && compChoice === 'feuille' ||
               userChoice === 'scissors' && compChoice === 'ciseaux') {
        result = 'Égalité !';
    } else {
        result = 'Tu as perdu.';
        compScore++;
    }

    // Seçimlerin sembollerini belirleyelim
    const userSymbol = userChoice === 'rock' ? '✊' : userChoice === 'paper' ? '✋' : '✌️';
    const compSymbol = compChoice === 'pierre' ? '✊' : compChoice === 'feuille' ? '✋' : '✌️';

    // Mesajı sembollerle birlikte güncelleyelim
    resultMessage.textContent = `Toi: ${userSymbol} | Ordinateur: ${compSymbol}. ${result}`;
    updateScores();
}

function updateScores() {
    userScoreSpan.textContent = userScore;
    compScoreSpan.textContent = compScore;
}

choices.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        playRound(userChoice);
    });
});