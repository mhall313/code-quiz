//Variable to access html elements
var highSc = document.querySelector("#high-scores");
var listSc = document.querySelector("#list-scores");


highSc.append("High Scores");
//listSc.append("Anything");
var listIt = localStorage.getItem(highscore.value);
listSc.append(highscore + ":" + score);

