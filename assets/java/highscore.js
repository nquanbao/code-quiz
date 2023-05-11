var recordEL = document.querySelector(".score")
var clearEl = document.querySelector(".clear")
var liEL = document.createElement("li")
var records = {
    finalresult:[],
    score: []
}
var count = 0;
function showRecord(){
    var record = JSON.parse(localStorage.getItem("UserRecord"))
    document.body.children[0].children[1].appendChild(liEL)
    if(record != null){
       records.finalresult.push(record.finalResult)
       records.score.push(record.initial)
       count++
    } else{
        return;
    }
    console.log(records)
}
showRecord()
for(var i = 0; i < count; i++) {
    liEL.innerHTML = records.finalresult + " - " + records.score
}
clearEl.addEventListener("click",function(){
    localStorage.clear();
})