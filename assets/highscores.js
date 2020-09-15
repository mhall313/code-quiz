//Variable to access html elements
var highSc = document.querySelector("#high-scores");
var listSc = document.querySelector("#list-scores");
var lstIt = document.createElement("li");
//Empty array to store previous high scores
var runningSc = [];


highSc.append("High Scores");
storeHS();
listSc.append(runningSc);


function storeHS (){
    var listIt = localStorage.getItem("highScore");
    var userSc = localStorage.getItem("userScore");
    runningSc.push(listIt + " : " + userSc + " melanpoints");
    listSc.appendChild(lstIt);
    lstIt.append(runningSc[runningSc.length-1]);
}


