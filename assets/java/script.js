//selects element from html file
var timeEl = document.querySelector(".time");
var buttonquizEl = document.querySelector(".start-quiz");

//Variable for code
var secondsLeft = 50;

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
}



buttonquizEl.addEventListener("click", setTime);