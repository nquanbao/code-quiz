//selects element from html file
var timeEl = document.querySelector(".time");
var startQuizBtn = document.querySelector(".start-quiz")
var homeSection = document.querySelector(".home-section")
var questionSection = document.querySelector(".question-section")
var answerEls = document.querySelectorAll(".answer")
var questionEl = document.querySelector(".question")
var aText = document.querySelector("#a-text")
var bText = document.querySelector("#b-text")
var cText = document.querySelector("#c-text")
var dText = document.querySelector("#d-text")
var nextEL = document.querySelector("#next")
var resultEl = document.querySelector("#result")
var finalSection = document.querySelector(".final-section")
var finalScore = document.querySelector(".final-score")
var SubmitEl = document.querySelector("#submit")
var InputInitial = document.querySelector("#input-initial")



//Variable for code
var secondsLeft = 50;
var score = 0;
var currentQues = 0;
var scoreArray =[];
var InitialArray = [];
var questions = [
    {
        question: "question 1",
        a: 'aaaa',
        b: 'bbbb',
        c: 'cccc',
        d: 'dddd',
        correct: 'b'

    },
    {
        question: "question 2",
        a: 'aaaa',
        b: 'bbbb',
        c: 'cccc',
        d: 'dddd',
        correct: 'a'
    },
    {
        question: "question 3",
        a: 'aaaa',
        b: 'bbbb',
        c: 'cccc',
        d: 'dddd',
        correct: 'c'
    },
    {
        question: "question 4",
        a: 'aaaa',
        b: 'bbbb',
        c: 'cccc',
        d: 'dddd',
        correct: 'b'
    },
    {
        question: "question 5",
        a: 'aaaa',
        b: 'bbbb',
        c: 'cccc',
        d: 'dddd',
        correct: 'b'
    },
    {
        question: "question 6",
        a: 'aaaa',
        b: 'bbbb',
        c: 'cccc',
        d: 'dddd',
        correct: 'd'
    },
    {
        question: "question 7",
        a: 'aaaa',
        b: 'bbbb',
        c: 'cccc',
        d: 'dddd',
        correct: 'a'
    },
    {
        question: "question 8",
        a: 'aaaa',
        b: 'bbbb',
        c: 'cccc',
        d: 'dddd',
        correct: 'c'
    },
    {
        question: "question 9",
        a: 'aaaa',
        b: 'bbbb',
        c: 'cccc',
        d: 'dddd',
        correct: 'c'
    },
    {
        question: "question 10",
        a: 'aaaa',
        b: 'bbbb',
        c: 'cccc',
        d: 'dddd',
        correct: 'd'
    }
]

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
    question();
}
startQuizBtn.addEventListener("click",function(e){
    e.preventDefault;
    setTime();
    homeSection.classList.add('hide')
    questionSection.classList.remove('hide')
});
//Funtion to load question
function question () {
    hideSelectAnswer()
    var currentQuesData = questions[currentQues]
    questionEl.innerHTML = currentQuesData.question
    aText.innerHTML = currentQuesData.a
    bText.innerHTML = currentQuesData.b
    cText.innerHTML = currentQuesData.c
    dText.innerHTML = currentQuesData.d
}

function hideSelectAnswer (){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getselectAnswer () {
   var answer;
   answerEls.forEach (answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
   })
   return answer
}

function checkAnswerResult () {
    var checkAnswer = questions[currentQues].correct;
    var answer1 = getselectAnswer();
    if(checkAnswer === answer1){
        resultEl.innerHTML = "Your answer is correct!"
    } else {
        resultEl.innerHTML = "Your answer is incorrect!"
    }   
}
//Next button
nextEL.addEventListener('click', function(){
    var answer = getselectAnswer();
    if (answer) {
        if(answer === questions[currentQues].correct) {
            score++;
        }
        currentQues++;
        if(currentQues < questions.length){
            question();
        } else{
            finalSection.classList.remove('hide')
            questionSection.classList.add('hide')
            finalScore.innerHTML= "Your score is " + score;
        }
    }
    console.log("score is  "+ score)
})
//Submit button 
SubmitEl.addEventListener('click', function() {
    secondsLeft = 50;
    score = 0;
    currentQues = 0;
    finalSection.classList.add('hide')
    homeSection.classList.remove('hide')
    return;
})
console.log(scoreArray + InitialArray)
localStorage.setItem("Initial",InitialArray)
localStorage.setItem("score", scoreArray)