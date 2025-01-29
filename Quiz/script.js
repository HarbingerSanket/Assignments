const quizData = [
    { question: "What does 'var' stand for in JavaScript?", a: "Variable", b: "Variant", c: "Variety", d: "Variance", correct: "a" },
    { question: "Which company developed JavaScript?", a: "Microsoft", b: "Netscape", c: "Google", d: "Apple", correct: "b" },
    { question: "Which symbol is used for comments in JavaScript?", a: "//", b: "/* */", c: "#", d: "<!-- -->", correct: "a" },
    { question: "What is the correct syntax to create a function in JavaScript?", a: "function myFunction()", b: "def myFunction()", c: "create myFunction()", d: "function:myFunction()", correct: "a" },
    { question: "How do you call a function named 'myFunction'?", a: "call myFunction()", b: "myFunction()", c: "call function myFunction()", d: "execute myFunction()", correct: "b" },
    { question: "Which event occurs when the user clicks on an HTML element?", a: "onchange", b: "onmouseclick", c: "onmouseover", d: "onclick", correct: "d" },
    { question: "How do you declare a JavaScript variable?", a: "var myVar;", b: "variable myVar;", c: "v myVar;", d: "declare myVar;", correct: "a" },
    { question: "Which operator is used to assign a value to a variable?", a: "=", b: "==", c: "===", d: "=>", correct: "a" },
    { question: "What will the following code return: Boolean(10 > 9)?", a: "true", b: "false", c: "NaN", d: "undefined", correct: "a" },
    { question: "Which method converts JSON data to a JavaScript object?", a: "JSON.parse()", b: "JSON.stringify()", c: "JSON.convert()", d: "JSON.toObject()", correct: "a" }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <div>Question ${currentQuestion + 1}/${quizData.length}: ${currentQuizData.question}</div>
        <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label>
        <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label>
        <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label>
        <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
    `;
    updateProgressBar();
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

function updateProgressBar() {
    const progress = (currentQuestion / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.style.display = 'block';
    if (score >= 7) {
        resultContainer.classList.add('pass');
        resultContainer.innerText = `Congratulations! You passed with a score of ${score}/10.`;
    } else {
        resultContainer.classList.add('fail');
        resultContainer.innerText = `Sorry, you failed with a score of ${score}/10.`;
    }
}

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            showResult();
        }
    }
});

prevButton.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuiz();
    }
});

nextButton.addEventListener('click', () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuiz();
    }
});

loadQuiz();