const timerEl = document.getElementById('countdown');
const containerEl = document.getElementById('container');
const questionEl = document.querySelector('#question-header');
const answerEl = document.querySelector('#multi-answers');
const startQuizEl = document.getElementById('start-quiz');
const startButton = document.getElementById('startBtn');
let timeLeft = 75;
const index = 0;

startButton.addEventListener('click', startQuiz);

function startQuiz(event){
    startQuizEl.innerHTML = " ";
    loadQuiz();
    const countdown = setInterval(function() {
    timeLeft --;
    timerEl.textContent = "Time: " + timeLeft;
    if(timeLeft === 0){
        clearInterval(countdown);
        gameover();
    }
}, 1000);
}

           

const quiz = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
         },
        correctAnswer: "c"
    },
    {
        question:"what's your name?",
        answers: {
            a: "mike",
            b: "john",
            c: "bill",
        },
        correctAnswer: "b"
    },
    {
        question:"what's your name?",
        answers: {
            a: "mike",
            b: "john",
            c: "bill",
        },
        correctAnswer: "b"
    },
    {
        question:"what's your name?",
        answers: {
            a: "mike",
            b: "john",
            c: "bill",
        },
        correctAnswer: "b"
    }
]

function loadQuiz(){
    for (let index = 0; index < quiz.length; index++) {
        questionEl.textContent = quiz[0].question;
        // const answerList = document.createElement('ul');
        answerEl.textContent = quiz[0].answers;
    }
}



console.log(quiz[0].correctAnswer);
// Create a function to start quiz
    // Add event listener to a start button (on click event)
        // Remove start button/start screen
        // Call function that loads quiz
// Create function that loads quiz
    // Create variables to target elements in html that will be filled with questions/choices
       // Example:
            // var currentQuestion = document.querySelector("#question-header");
            // currentQuestion.textContent = quiz[0].question;
            // console.log(currentQuestion);
    // Create loop to go through choices in quiz array - create button for each choice
    // Create list el

