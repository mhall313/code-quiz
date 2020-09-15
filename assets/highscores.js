//Variable to access html elements
var highSc = document.querySelector("#high-scores");
var listSc = document.querySelector("#list-scores");
//Adds text "High Scores" to the h5 html element
highSc.append("High Scores");
//initate array scores to add locally stored high scores to
var scores = [];

//Initialize function on page load
init();

//Gets locally stored high scores array and adds to array scores if the array is not empty, executes storedHS and renderHS functions
function init(){
    var storedHS = JSON.parse(localStorage.getItem("scores"));

    if(storedHS !== null ){
        scores = storedHS;
    }
    storeHS();
    renderHS();
}

//Gets current user name and high score from local storage and pushed to the array scores
function storeHS(){
    var listIt = localStorage.getItem("highScore");
    var userSc = localStorage.getItem("userScore");
    //If the page is refreshed, the most recent high score won't be added a second time to the list of high scores.
    if(scores[scores.length-1]!= (listIt + " : " + userSc + " melanpoints")){
        scores.push(listIt + " : " + userSc + " melanpoints");
        localStorage.setItem("scores", JSON.stringify(scores));
    }
}

//Creates html list elements and adds text of all locally stored high scores in the array scores
function renderHS(){
    if(scores[0] != "null : null melanpoints"){
        for(var i = 0; i < scores.length; i++){
            var daScore = scores[i];
            var liEl = document.createElement("li");
            liEl.textContent = daScore;
            listSc.appendChild(liEl);
        }
    }
    else{
        highSc.innerHTML = "";
        highSc.append("Click the link in the top left corner to take the quiz and log your score!");
        localStorage.removeItem("scores");
    }
}
