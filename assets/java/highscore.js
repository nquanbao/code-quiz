var recordEL = document.querySelector(".score")
function showRecord(){
    var liEl = document.createElement("li")
    liEl.innerHTML = JSON.parse(localStorage.getItem("UserRecord"));
    document.body.appendChild(liEl)
    console.log(liEl)
}
showRecord();