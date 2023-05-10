//selects element from html file
var timeEl = document.querySelector(".time");
var buttonquizEl = document.querySelector(".start-quiz");
var homeSectionEl = document.querySelector(".home-section");
var questionSectionEl = document.querySelector(".question-section");
var inputNameEl = document.querySelector(".final-section")
var questionEl = document.querySelector(".question");
var option1El = document.querySelector("#opt1");
var option2El = document.querySelector("#opt2");
var option3El = document.querySelector("#opt3");
var option4El = document.querySelector("#opt4");
var resultEL = document.querySelector('#result');

//Variable for code
var secondsLeft = 50;

var questions = [
    {
        question: "question 1",
        answer: [
            {a: "aaaaaa", wrong: false},
            {a: "bbbbbb", wrong: false},
            {a: "cccccc", right: true},
            {a: "dddddd", wrong: false}
        ]
    },
    {
        question: "question 2",
        answer: [
            {a: "aaaaaa", wrong: false},
            {a: "bbbbbb", wrong: false},
            {a: "cccccc", right: true},
            {a: "dddddd", wrong: false}
        ]
    },
    {
        question: "question 3",
        answer: [
            {a: "aaaaaa", wrong: false},
            {a: "bbbbbb", wrong: false},
            {a: "cccccc", right: true},
            {a: "dddddd", wrong: false}
        ]
    },
    {
        question: "question 4",
        answer: [
            {a: "aaaaaa", wrong: false},
            {a: "bbbbbb", wrong: false},
            {a: "cccccc", right: true},
            {a: "dddddd", wrong: false}
        ]
    },
    {
        question: "question 5",
        answer: [
            {a: "aaaaaa", wrong: false},
            {a: "bbbbbb", wrong: false},
            {a: "cccccc", right: true},
            {a: "dddddd", wrong: false}
        ]
    },
    {
        question: "question 6",
        answer: [
            {a: "aaaaaa", wrong: false},
            {a: "bbbbbb", wrong: false},
            {a: "cccccc", right: true},
            {a: "dddddd", wrong: false}
        ]
    },
    {
        question: "question 7",
        answer: [
            {a: "aaaaaa", wrong: false},
            {a: "bbbbbb", wrong: false},
            {a: "cccccc", right: true},
            {a: "dddddd", wrong: false}
        ]
    },
    {
        question: "question 8",
        answer: [
            {a: "aaaaaa", wrong: false},
            {a: "bbbbbb", wrong: false},
            {a: "cccccc", right: true},
            {a: "dddddd", wrong: false}
        ]
    },
    {
        question: "question 9",
        answer: [
            {a: "aaaaaa", wrong: false},
            {a: "bbbbbb", wrong: false},
            {a: "cccccc", right: true},
            {a: "dddddd", wrong: false}
        ]
    },
    {
        question: "question 10",
        answer: [
            {a: "aaaaaa", wrong: false},
            {a: "bbbbbb", wrong: false},
            {a: "cccccc", right: true},
            {a: "dddddd", wrong: false}
        ]
    }
]

console.log(questions[0].question);
console.log(questions[0].answer[0].a)

//Timer funtion
function setTime() {
    var timerInterval = setInterval( function(){
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
    //Stop timer action and link to stop quiz funtion
    if(secondsLeft === 0) {
        clearInterval(timerInterval);

    }
    },1000);
    homeSectionEl.classList.add('hide');
    questionSectionEl.classList.remove('hide');
    inputQuestion();
}
buttonquizEl.addEventListener("click", setTime);

//input value for question
var inputQuestion = function () {
    for ( var i = 0; i < questions.length; i++) {
        questionEl.textContent = questions[i].question;
        for ( var x = 0; x< 4; x++) {
            option1El.textContent = questions[i].answer[x].a
        }

    }
}