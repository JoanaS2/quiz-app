const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;
const timerElement = document.getElementById('time-left');
let timeLeft = 10;
let timerInterval;

// // Function to create a random block
// const createRandomBlock = function () {
//   return Math.floor(Math.random() * shuffledQuestions.length);
// };

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');
  startButton.classList.remove('hide');
});


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  console.log('Next button clicked');
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    setNextQuestion();
  } else {
    console.log('End of quiz');
    nextButton.classList.add('hide');
  }
});


function startGame() {
  console.log('startGame function called');
  resetGameState();
  resetTimer(); // Reset timer when starting a new game
  startTimer(); // Timer starts
  startButton.classList.add('hide');
  nextButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}


function setNextQuestion() {
  console.log('setNextQuestion function called');
  clearAnswerButtons();
  clearStatusClass(document.body);
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  nextButton.classList.add('hide');
  resetTimer(); // Reset the timer for each new question
  startTimer(); // Start the timer for the new question
}

function clearAnswerButtons() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function showQuestion(question) {
  console.log('showQuestion function called');
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetGameState() {
  console.log('resetGameState function called');
  currentQuestionIndex = 0;
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  clearStatusClass(document.body); // Clear status classes applied to the body
  Array.from(answerButtonsElement.children).forEach(button => {
    clearStatusClass(button); // Clear status classes applied to answer buttons
  });
}



function selectAnswer(e) {
  console.log('selectAnswer function called');
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });

  // console.log('Current Question Index:', currentQuestionIndex);
  // console.log('Shuffled Questions Length:', shuffledQuestions.length);

  nextButton.classList.remove('hide');

  if (currentQuestionIndex + 1 < shuffledQuestions.length) {
    nextButton.classList.remove('hide');
    startButton.classList.add('hide');
  } else {
    nextButton.classList.add('hide');
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  console.log('setStatusClass function called');
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  console.log('clearStatusClass function called');
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerElement.textContent = timeLeft;
    } else {
      clearInterval(timerInterval);
      // Define the endGame() function or handle the end of the game here
    }
  }, 1000); // Update timer every second
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 10; // Reset time to initial value
  timerElement.textContent = timeLeft;
}


const questions = [{
    question: 'What is the largest planet in the solar system?',
    answers: [{
        text: 'Jupiter',
        correct: true
      },
      {
        text: 'Neptune',
        correct: false
      },
      {
        text: 'Saturn',
        correct: false
      },
      {
        text: 'Uranus',
        correct: false
      }
    ]
  },

  {
    question: 'What is the largest island in the world?',
    answers: [{
        text: 'Greenland',
        correct: true
      },
      {
        text: 'Madagascar',
        correct: false
      },
      {
        text: 'Borneo',
        correct: false
      },
      {
        text: 'New Guinea',
        correct: false
      }
    ]
  },

  {
    question: 'What was the first soft drink in space?',
    answers: [{
        text: 'Coca Cola',
        correct: true
      },
      {
        text: 'Pepsi',
        correct: false
      },
      {
        text: 'Sprite',
        correct: false
      },
      {
        text: 'Dr Pepper',
        correct: false
      }
    ]
  },

  {
    question: 'What year was the famous movie Titanic released?',
    answers: [{
        text: '1997',
        correct: true
      },
      {
        text: '1995',
        correct: false
      },
      {
        text: '1998',
        correct: false
      },
      {
        text: '2000',
        correct: false
      }
    ]
  },

  {
    question: 'How many hearts does an octopus have?',
    answers: [{
        text: '3',
        correct: true
      },
      {
        text: '1',
        correct: false
      },
      {
        text: '5',
        correct: false
      },
      {
        text: '7',
        correct: false
      }
    ]
  },

  {
    question: 'What is the nearest planet to the sun?',
    answers: [{
        text: 'Mercury',
        correct: true
      },
      {
        text: 'Mars',
        correct: false
      },
      {
        text: 'Venus',
        correct: false
      },
      {
        text: 'Jupiter',
        correct: false
      }
    ]
  },

  {
    question: 'How many bones does a shark have?',
    answers: [{
        text: 'None',
        correct: true
      },
      {
        text: '50',
        correct: false
      },
      {
        text: '100',
        correct: false
      },
      {
        text: '150',
        correct: false
      }
    ]
  },

  {
    question: 'What is the largest continent?',
    answers: [{
        text: 'Asia',
        correct: true
      },
      {
        text: 'Europe',
        correct: false
      },
      {
        text: 'Africa',
        correct: false
      },
      {
        text: 'North America',
        correct: false
      }
    ]
  },

  {
    question: 'In which country did the Olympics originate?',
    answers: [{
        text: 'Greece',
        correct: true
      },
      {
        text: 'Italy',
        correct: false
      },
      {
        text: 'China',
        correct: false
      },
      {
        text: 'Egypt',
        correct: false
      }
    ]
  },

  {
    question: 'What year did Disneyland inaugurate?',
    answers: [{
        text: '1955',
        correct: true
      },
      {
        text: '1960',
        correct: false
      },
      {
        text: '1970',
        correct: false
      },
      {
        text: '1980',
        correct: false
      }
    ]
  },

  {
    question: 'Where was the mojito cocktail created?',
    answers: [{
        text: 'Cuba',
        correct: true
      },
      {
        text: 'Spain',
        correct: false
      },
      {
        text: 'Mexico',
        correct: false
      },
      {
        text: 'Peru',
        correct: false
      }
    ]
  },

  {
    question: 'What is the tallest building in the world?',
    answers: [{
        text: 'Burj Khalifa',
        correct: true
      },
      {
        text: 'Empire State Building',
        correct: false
      },
      {
        text: ' Shanghai Tower',
        correct: false
      },
      {
        text: 'Taipei 101',
        correct: false
      }
    ]
  }

];