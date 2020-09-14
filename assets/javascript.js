var quizQuestion = document.querySelector("#quiz-question");
var answer0 = document.querySelector("#answer0");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var questResult = document.querySelector("#result");
var i = 0;
var timer = document.querySelector("#timerText");
var count = 75;


var theQuestions = [
    //First Question
    {
        question: "Test your coding knowledge before the time runs out! Get an answer wrong and the time drops by 10 seconds. When you're done, log your high score!",
    },
    //Second Question
    {
        question: "What are the three fundamental programming languages of the modern web?",
        answers: [
            "1. C++, HTML, JQuery",
            "2. Javascript, HTML, CSS",
            "3. JQuery, HTML, C++",
            "4. None of the above"
        ],
        correctAnswer: "2. Javascript, HTML, CSS"
    },
    //Third Question
    {
        question: "Arrays are collections of elements marked with indexes starting with ___.",
        answers: [
            "1. 1",
            "2. 0",
            "3. Neither",
            "4. Either"
        ],
        correctAnswer: "2. 0"
    },
    //Fourth Question
    {
        question: "Which method would you call to index an array?",
        answers: [
            "1. .callIndex()",
            "2. .lowerCase()",
            "3. .getIndex()",
            "4. .indexOf()"
        ],
        correctAnswer: "4. .indexOf()"
    },
    //Fifth Question
    {
        question: "Variables are the ____ of programming.",
        answers: [
            "1. nouns",
            "2. verbs",
            "3. cats",
            "4. wait, cats?"
        ],
        correctAnswer: "1. nouns"
    },
    //Sixth Question
    {
        question: "_____ is a quick expression that prints content to the debugger.",
        answers: [
            "1. logDebugger",
            "2. debugger.log",
            "3. logConsole",
            "4. console.log"
        ],
        correctAnswer: "4. console.log"
    },
        //Seventh Question
        {
            question: "Which method will add the parameter given to the html element <p>?",
            answers: [
                "1. p.textContent()",
                "2. p.innerHTML()",
                "3. both 1. and 2.",
                "4. neither 1. nor 2."
            ],
            correctAnswer: "3. cboth 1. and 2."
        }
];
//Show quiz instructions
showCard();

//Building each card - function to iterate through array theQuestions containing questions and answers choices, and correct answer
function showCard(){
    //Start timer
    // if(count===75){
    //     startTimer();
    // }
    //var questionText = theQuestions[i].question.toString();
    if (i===0){
        var questionText = theQuestions[i].question.toString();
        quizQuestion.append(questionText);
        answer0.innerHTML = "Start!";
        for(j=1; j<4; j++){
            this["answer"+j].style.opacity = 0;
        }
        i++;
    }
    else if(i < theQuestions.length){
        if(count===75){
            startTimer();
            //statement stops here and you need another click to go to else
        }
        else{
            //If the timer has time left, populate next question
            var questionText = theQuestions[i].question.toString();
            quizQuestion.innerHTML = "";
            //Show answer buttons and populate with next questions answer choices
            //answer0.innerHTML = "";   
            for(j=1; j<4; j++){
                this["answer"+j].style.opacity = 1;
            }
            quizQuestion.append(questionText);
            //Loop to add multiple choice answers to buttons
            for(var j = 0; j < theQuestions[i].answers.length; j++){
                this["answer" + j].textContent = theQuestions[i].answers[j];
            };
            i++;
        }
    }
    else {
        quizQuestion.innerHTML = "";
        quizQuestion.append("You've finished!");
        for(j=0; j<4; j++){
            this["answer"+j].style.opacity = 0;
        }
        //adjust to highscores page - include score, 
    }

};

function showResult(){
    //if answer is correct display "Correct!" under the next question, otherwise "Incorrect" under the next question
    // if(){
    //     questResult.innerHTML("Great Job!");
    // }
    // else{
    //     questResult.innerHTML("Wrong answer!");
    // }

};

function startTimer(){
    interval = setInterval(function() {
        if (count<0) {
            clearInterval(interval);
            timer.textContent = "Time: 0";
            quizQuestion.innerHTML = "";
            quizQuestion.append("Time's out!");
            for(j=0; j<4; j++){this["answer"+j].style.opacity = 0;}
        }
        else{
            timer.textContent = "Timer: " + count;
            count--;
        }
    }, 100);
};

//Evenlistener to detect click on any button and execute functions to show the next question and the result to the previous question.
for(var k = 0; k < theQuestions[i].answers.length; k++){
    this["answer"+k].addEventListener("click",function(){
        showCard();
        showResult();
    });         
};


//add on click if button clicked === correct answer then display "Correct" otherwise "Nerp"
