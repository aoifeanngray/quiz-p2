const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
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

  // Questions and answers list: 
const questions = [
    {
      question: 'What is the capital of Poland?',
      answers: [
        { text: 'Warsaw', correct: true },
        { text: 'Lublin', correct: false }
      ]
    },
{
  question: 'Which musician’s real name is Reginald Kenneth Dwight?',
  answers: [
    { text: 'Elton John', correct: true },
    { text: 'James Blunt', correct: false }
  ]
},
{
  question: 'What was the most downloaded app of 2020?',
  answers: [
    { text: 'Tik Tok', correct: true },
    { text: 'Snapchat', correct: false }
  ]
},
{
  question: 'Europe is separated from Africa by which sea?',
  answers: [
    { text: 'Mediterranean Sea', correct: true },
    { text: 'Pacific Ocean', correct: false }
  ]
},
{
  question: 'What is the collective name for a group of crows?',
  answers: [
    { text: 'Murder', correct: true },
    { text: 'Clan', correct: false }
  ]
},
{
  question: 'Which Coronation Street character has been married six times?',
  answers: [
    { text: 'Gail Platt', correct: true },
    { text: 'Sally Webster', correct: false }
  ]
},
{
  question: 'What is Japanese sake made from?',
  answers: [
    { text: 'Rice', correct: true },
    { text: 'Seaweed', correct: false }
  ]
},
{ question: 'Who is the only person in the UK who is allowed to drive without a licence?',
answers: [
  { text: 'Borris Johnson', correct: false },
  { text: 'The Queen', correct: true }
]
},
{ question: 'How many countries still have the shilling as currency?',
answers: [
  { text: 'none', correct: false },
  { text: 'Four - Kenya, Uganda, Tanzania and Somalia', correct: true }
]
},
{ question: 'What colour is a giraffes tongue?',
answers: [
  { text: 'blue', correct: true },
  { text: 'red', correct: false }
]
},
{ question: 'What year was the first series of X Factor?',
answers: [
  { text: '2004', correct: true },
  { text: '2002', correct: false }
]
},
]

// Stopwatch Javascript: 
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