const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame () {
    console.log('started')
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
}
function nextQuestion () {

}
function selectAnswer () {

}