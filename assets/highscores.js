//Variable to access html elements
var highSc = document.querySelector("#high-scores");
var listSc = document.querySelector("#list-scores");
highSc.append("High Scores");
var scores = [];

//what do we need to do
//i need to adjust so that the high scores aren

init();

function init(){

    var storedHS = JSON.parse(localStorage.getItem("scores"));

    if(storedHS !== null ){
        scores = storedHS;
    }
    storeHS();
    renderHS();
}

function storeHS(){
    var listIt = localStorage.getItem("highScore");
    var userSc = localStorage.getItem("userScore");
    if(scores[scores.length-1]!= (listIt + " : " + userSc + " melanpoints")){
        scores.push(listIt + " : " + userSc + " melanpoints");
        localStorage.setItem("scores", JSON.stringify(scores));
    }
}

function renderHS(){
    for(var i = 0; i < scores.length; i++){
        var daScore = scores[i];
        var liEl = document.createElement("li");
        liEl.textContent = daScore;
        listSc.appendChild(liEl);
    }

}
