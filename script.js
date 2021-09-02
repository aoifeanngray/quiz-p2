const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
window.alert("Time yourself!");
alert("Time yourself!");

function startGame () {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random() -.5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion () {
  resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion (question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button =document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
    button.addEventListener('click', selectAnswer) 
    answerButtonsElement.appendChild(button)
      })
    }

function resetState () {
  nextButton.classList.add ('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}    
function selectAnswer (e) {
  const selectedButton = e.target 
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
  })
}
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else { 
    element.classList.add('wrong')
  }
}

  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
]
var ss = document.getElementsByClassName('stopwatch');

[].forEach.call(ss, function (s) {
    var currentTimer = 0,
        interval = 0,
        lastUpdateTime = new Date().getTime(),
        start = s.querySelector('button.start'),
        stop = s.querySelector('button.stop'),
        reset = s.querySelector('button.reset'),
        mins = s.querySelector('span.minutes'),
        secs = s.querySelector('span.seconds'),
        cents = s.querySelector('span.centiseconds');

    start.addEventListener('click', startTimer);
    stop.addEventListener('click', stopTimer);
    reset.addEventListener('click', resetTimer);

    function pad (n) {
        return ('00' + n).substr(-2);
    }

    function update () {
        var now = new Date().getTime(),
            dt = now - lastUpdateTime;

        currentTimer += dt;

        var time = new Date(currentTimer);

        mins.innerHTML = pad(time.getMinutes());
        secs.innerHTML = pad(time.getSeconds());
        cents.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));

        lastUpdateTime = now;
    }

    function startTimer () {
        if (!interval) {
            lastUpdateTime = new Date().getTime();
            interval = setInterval(update, 1);
        }
    }

    function stopTimer () {
        clearInterval(interval);
        interval = 0;
    }

    function resetTimer () {
        stopTimer();

        currentTimer = 0;

        mins.innerHTML = secs.innerHTML = cents.innerHTML = pad(0);
    }
});