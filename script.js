const timerEl = document.getElementById('countdown');
const questionEl = document.querySelector('#question-header');
const answerEl = document.getElementById('multi-answers');
const quizContainer = document.getElementById('container');
const startQuizEl = document.getElementById('start-quiz');
const startButton = document.getElementById('startBtn');
const nextBtnEl = document.getElementById('nextBtn');
const resultsEl = document.getElementById('results');
const tryAgainBtnEl = document.getElementById('tryAgainBtn');
const nextBtn1 = document.createElement('button');
const nextBtn2 = document.createElement('button');
const nextBtn3 = document.createElement('button');
const nextBtn4 = document.createElement('button');
const answerUlEl = document.createElement('ul');
const answerUlEl2 = document.createElement('ul');
const answerUlEl3 = document.createElement('ul');
const answerUlEl4 = document.createElement('ul');

let answersArr = [];

let timeLeft = 75;
const index = 0;

startButton.addEventListener('click', startQuiz);

function startQuiz(event){
    startQuizEl.innerHTML = " ";
    loadQuestion1();
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
        question:"What tag would I use for list of items?",
        answers: {
            a: "list",
            b: "li",
            c: "items",
        },
        correctAnswer: "b"
    },
    {
        question:"What is the syntax used to change the font color in CSS?",
        answers: {
            a: "color",
            b: "font-color",
            c: "text-color",
        },
        correctAnswer: "a"
    },
    {
        question:"What do you call a data type that only results in either true or false?",
        answers: {
            a: "A fifty-fifty chance",
            b: "A boolean",
            c: "A leanboo",
        },
        correctAnswer: "b"
    }
]

function resetAnswerArr(){
    answersArr.length = 0;
}

function resetResultsEl(){
    resultsEl.innerHTML = " "
}


function loadQuestion1(){
    questionEl.textContent = quiz[0].question;    
    const answerEl1 = document.createElement('li');
    const answerEl2 = document.createElement('li');
    const answerEl3 = document.createElement('li');
    answerUlEl.append(answerEl1)
    answerUlEl.append(answerEl2)
    answerUlEl.append(answerEl3)
    answersArr.push(quiz[0].answers.a)
    answersArr.push(quiz[0].answers.b)
    answersArr.push(quiz[0].answers.c)
    answerEl1.textContent = answersArr[0];
    answerEl2.textContent = answersArr[1];
    answerEl3.textContent = answersArr[2];
    answerEl.append(answerUlEl)
    answerUlEl.addEventListener('click', handleChoice)
}

function handleChoice(event){
    const el = event.target;
    if (el.innerHTML === 'Douglas Crockford'){
        resultsEl.textContent = "Sorry, Douglas Crockford is incorrect.";
        timeLeft = timeLeft-25;
    } else if (el.innerHTML === 'Sheryl Sandberg'){
        resultsEl.textContent = "Sorry, Sheryl Sandberg is incorrect.";
        timeLeft = timeLeft-25;
    } else if (el.innerHTML === 'Brendan Eich'){
        resultsEl.textContent = "Brendan Eich is correct!";
        } 


    resetAnswerArr();
    answerUlEl.remove();
    nextBtnEl.append(nextBtn1)
    nextBtn1.textContent = "Next Question"
    nextBtn1.addEventListener('click', questionTwo)
}

    
function questionTwo(){
    if(timeLeft < 0){
        gameover();
    }
    resetAnswerArr();
    resetResultsEl();
    nextBtnEl.textContent = " ";
    questionEl.textContent = quiz[1].question;    
    const answerEl1 = document.createElement('li');
    const answerEl2 = document.createElement('li');
    const answerEl3 = document.createElement('li');
    answerUlEl2.append(answerEl1)
    answerUlEl2.append(answerEl2)
    answerUlEl2.append(answerEl3)
    answersArr.push(quiz[1].answers.a)
    answersArr.push(quiz[1].answers.b)
    answersArr.push(quiz[1].answers.c)
    answerEl1.textContent = answersArr[0];
    answerEl2.textContent = answersArr[1];
    answerEl3.textContent = answersArr[2];
    answerEl.append(answerUlEl2)
    answerUlEl2.addEventListener('click', handleChoice2)
}

function handleChoice2(event){
    const el = event.target;
    if (el.innerHTML === 'list'){
        resultsEl.textContent = "Sorry, list is incorrect.";
        timeLeft = timeLeft-25;
    } else if (el.innerHTML === 'li'){
        resultsEl.textContent = "li is correct!";
    } else if (el.innerHTML === 'items'){
        resultsEl.textContent = "Sorry, items is incorrect.";
        timeLeft = timeLeft-25;
    }    

    nextBtnEl.append(nextBtn2)
    nextBtn2.textContent = "Next Question"
    nextBtn2.addEventListener('click', questionThree)
    answerUlEl2.remove();
}

function questionThree(){
    if(timeLeft < 0){
        gameover();
    }
    resetAnswerArr();
    resetResultsEl();
    nextBtnEl.textContent = " ";
    questionEl.textContent = quiz[2].question;
    const answerEl1 = document.createElement('li');
    const answerEl2 = document.createElement('li');
    const answerEl3 = document.createElement('li');
    answerUlEl3.append(answerEl1)
    answerUlEl3.append(answerEl2)
    answerUlEl3.append(answerEl3)
    answersArr.push(quiz[2].answers.a)
    answersArr.push(quiz[2].answers.b)
    answersArr.push(quiz[2].answers.c)
    answerEl1.textContent = answersArr[0];
    answerEl2.textContent = answersArr[1];
    answerEl3.textContent = answersArr[2];
    answerEl.append(answerUlEl3)
    answerEl.addEventListener('click', handleChoice3)
}

function handleChoice3(event){
    const el = event.target;
    if (el.innerHTML === 'color'){
        resultsEl.textContent = "Color is correct!";
    } else if (el.innerHTML === 'font-color'){
        resultsEl.textContent = "Sorry, font-color is incorrect.";
        timeLeft = timeLeft-25;
    } else if (el.innerHTML === 'text-color'){
        resultsEl.textContent = "Sorry, text-color is incorrect.";
        timeLeft = timeLeft-25;
    }  
    nextBtnEl.append(nextBtn3)
    nextBtn3.textContent = "Next Question"
    nextBtn3.addEventListener('click', questionFour)
    answerUlEl3.remove()
}

function questionFour(){
    if (timeLeft < 0){
        gameover();
    }
    resetAnswerArr();
    resetResultsEl();
    nextBtnEl.textContent = " ";
    questionEl.textContent = quiz[3].question;
    const answerEl1 = document.createElement('li');
    const answerEl2 = document.createElement('li');
    const answerEl3 = document.createElement('li');
    answerUlEl4.append(answerEl1)
    answerUlEl4.append(answerEl2)
    answerUlEl4.append(answerEl3)
    answersArr.push(quiz[3].answers.a)
    answersArr.push(quiz[3].answers.b)
    answersArr.push(quiz[3].answers.c)
    answerEl1.textContent = answersArr[0];
    answerEl2.textContent = answersArr[1];
    answerEl3.textContent = answersArr[2];
    answerEl.append(answerUlEl4)
    answerEl.addEventListener('click', handleChoice4)
}

function handleChoice4(event){
    const el = event.target;
    if (el.innerHTML === 'A fifty-fifty chance'){
        resultsEl.textContent = "Sorry, a fifty-fifty chance is incorrect.";
        timeLeft = timeLeft-10;
    } else if (el.innerHTML === 'A boolean'){
        resultsEl.textContent = "Boolean is correct!";
    } else if (el.innerHTML === 'A leanboo'){
        resultsEl.textContent = "Sorry, a leanboo is incorrect.";
        timeLeft = timeLeft-10;
    } 
    nextBtn3.remove();
    resetAnswerArr();
    nextBtnEl.append(nextBtn4)
    nextBtn4.textContent = "Finish"
    nextBtn4.addEventListener('click', gameover)
}

function gameover(){
    quizContainer.innerHTML = " ";
    const scoreH1 = document.getElementById('scoreHeader');
    if (timeLeft < 0){
        scoreH1.textContent = "Sorry you lost, try again!"
        timerEl.remove();
        const tryAgainBtn = document.createElement("button");
        tryAgainBtn.textContent = "Start Over"
        tryAgainBtnEl.append(tryAgainBtn)
        tryAgainBtn.addEventListener("click", startQuiz)
    } else {
        scoreH1.textContent = "Your score: " + timeLeft;
        timerEl.remove();
    }
}
