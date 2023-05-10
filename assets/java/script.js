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
var nextEl = document.querySelector('#next');
var submitEl = document.querySelector('#submit');
var finalScoreEl = document.querySelector(".final-score");

//Variable for code
var secondsLeft = 50;
var score = 0;

var questions = [
    {
        question: "question 1",
        answer: [
            {a: "aaaaaa1", result: false},
            {a: "bbbbbb1", result: false},
            {a: "cccccc1", result: true},
            {a: "dddddd1", result: false}
        ]
    },
    {
        question: "question 2",
        answer: [
            {a: "aaaaaa2", result: false},
            {a: "bbbbbb2", result: false},
            {a: "cccccc2", result: true},
            {a: "dddddd2", result: false}
        ]
    },
    {
        question: "question 3",
        answer: [
            {a: "aaaaaa", result: false},
            {a: "bbbbbb", result: false},
            {a: "cccccc", result: true},
            {a: "dddddd", result: false}
        ]
    },
    {
        question: "question 4",
        answer: [
            {a: "aaaaaa", result: false},
            {a: "bbbbbb", result: false},
            {a: "cccccc", result: true},
            {a: "dddddd", result: false}
        ]
    },
    {
        question: "question 5",
        answer: [
            {a: "aaaaaa", result: false},
            {a: "bbbbbb", result: false},
            {a: "cccccc", result: true},
            {a: "dddddd", result: false}
        ]
    },
    {
        question: "question 6",
        answer: [
            {a: "aaaaaa", result: false},
            {a: "bbbbbb", result: false},
            {a: "cccccc", result: true},
            {a: "dddddd", result: false}
        ]
    },
    {
        question: "question 7",
        answer: [
            {a: "aaaaaa", result: false},
            {a: "bbbbbb", result: false},
            {a: "cccccc", result: true},
            {a: "dddddd", result: false}
        ]
    },
    {
        question: "question 8",
        answer: [
            {a: "aaaaaa", result: false},
            {a: "bbbbbb", result: false},
            {a: "cccccc", result: true},
            {a: "dddddd", result: false}
        ]
    },
    {
        question: "question 9",
        answer: [
            {a: "aaaaaa", result: false},
            {a: "bbbbbb", result: false},
            {a: "cccccc", result: true},
            {a: "dddddd", result: false}
        ]
    },
    {
        question: "question 10",
        answer: [
            {a: "aaaaaa10", result: false},
            {a: "bbbbbb10", result: false},
            {a: "cccccc10", result: true},
            {a: "dddddd10", result: false}
        ]
    }
]

console.log(questions[0].question);
console.log(questions[0].answer[0].a)

//Timer funtion
function setTime() {
    var timerInterval = setInterval( function(){
        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
        } else {
            secondsLeft--;
            timeEl.textContent = "Time: " + secondsLeft;
        }
    },1000);
    homeSectionEl.classList.add('hide');
    questionSectionEl.classList.remove('hide');
    inputValue(0);
}
buttonquizEl.addEventListener("click", setTime);

//Input funtion to input value for question section
function inputValue (arr) {
    resultEL.textContent ="";
    var checkscore = false;
    questionEl.textContent = questions[arr].question;
    option1El.textContent = questions[arr].answer[0].a;
    option2El.textContent = questions[arr].answer[1].a;
    option3El.textContent = questions[arr].answer[2].a;
    option4El.textContent = questions[arr].answer[3].a;
    option1El.addEventListener("click", function(e){
        e.preventDefault;
        resultEL.textContent = questions[arr].answer[0].result;
        checkscore = questions[arr].answer[0].result;
        if (checkscore = true) {
           score ++;
           return;
        }
    });
    option2El.addEventListener("click", function(e){
        e.preventDefault;
        resultEL.textContent = questions[arr].answer[1].result;
        checkscore = questions[arr].answer[1].result;
        if (checkscore = true) {
           score ++;
           return;
        }
    });
    option3El.addEventListener("click", function(e){
        e.preventDefault;
        resultEL.textContent = questions[arr].answer[2].result;
        checkscore = questions[arr].answer[2].result;
        if (checkscore = true) {
            score ++;
            return;
        }
    });
    option4El.addEventListener("click", function(e){
        e.preventDefault;
        resultEL.textContent = questions[arr].answer[3].result;
        checkscore = questions[arr].answer[3].result;
        if (checkscore = true) {
            score ++;
            return;
        }
    });
    console.log("lan next " + arr + ": " + score);
}

var i =0;
//Next button
nextEl.addEventListener('click', function(e){
    e.preventDefault;
    i++;
    if(i === 10){
        secondsLeft = 0;
        setTime();
        questionSectionEl.classList.add('hide');
        inputNameEl.classList.remove('hide');
        finalScoreEl.textContent = "Your final score is: " + score;
        return;
    }
    inputValue(i);
});

//Submit button
submitEl.addEventListener('click', function () {
    inputNameEl.classList.add('hide');
    homeSectionEl.classList.remove('hide');
    secondsLeft = 50;
    score = 0;
    timeEl.textContent = "Time : 50";
    return i = 0;
})