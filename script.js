// This is a Edited File

var quizData = [
    {
        question: "How old is Barack Obama ? ",
        a: "18",
        b: "49",
        c: "60",
        d: "80",
        correct: "c",
    },
    {
        question: "What is the most used programming language in 2021?",
        a: "Python",
        b: "Java",
        c: "Javascript",
        d: "C#",
        correct: "a",
    },
    {
        question: "Who is the president of Kenya?",
        a: "Joe Biden",
        b: "Mzee Jomo Kenyatta",
        c: "Daniel Arap Moi",
        d: "Uhuru Kenyatta",
        correct: "d",
    },
    {
        question: "who is the richest man on Earth? ",
        a: "jeff bezos",
        b: "elon musk",
        c: "bill gates",
        d: "mark zuckerberg",
        correct: "a",
    },
    {
        question: "who was the third president of Uganda",
        a: "Uhuru kenyatta",
        b: "Iddiam min Dada",
        c: "Moi kibaki",
        d: "Donnald trump",
        correct: "b",
    },
];

var answerEls = document.querySelectorAll(".answer");
var quiz = document.getElementById("quiz");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var submitBtn = document.getElementById("submit");

var questionEl = document.getElementById("question");

var answer = undefined;

var currentQuiz = 0;
var score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    var currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", function () {
    var answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // todo: Show result
            alert("You finished!");
        }
    }
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        // todo: Show result
        quiz.innerHTML = `<h2> You answered correctly at ${score} / ${quizData.length}</h2>`;
    }
});

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelected() {
    var answerEls = document.querySelectorAll(".answer");

    var answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
