//Slew of variables to call upon HTML content
var quizQuestion = document.querySelector("#quiz-question");
var answer0 = document.querySelector("#answer0");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var questResult = document.querySelector("#result");
var timer = document.querySelector("#timerText");

//Iterative Variable for showCard function to move through array theQuestions and signal when quiz is complete
var i = 0;

//Variable to increment timer
var count = 59;

//Variable containing quiz content - Quiz questions, answer choices and correct answers. Six total elements including the instructions
var theQuestions = [
    //First Question
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
    //Second Question
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
    //Third Question
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
    //Fourth Question
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
    //Fifth Question
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
    //Sixth Question
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

//Initially hide 3 buttons
answer1.style.opacity = 0;
answer2.style.opacity = 0;
answer3.style.opacity = 0;

//Initial set up to show quiz instructions and Start in button
quizQuestion.append("Test your coding knowledge before the time runs out! Get an answer wrong and the time drops by 10 seconds. When you're done, log your high score!");
answer0.innerHTML = "Start!";

//Star quiz and timer one initial click on the first button
answer0.addEventListener("click",function(){
    if(count===59){
        startTimer();
    }  
});


//Building each card - function to iterate through array theQuestions containing questions and answers choices, and correct answer
function showCard(event){
    var target = event.target.textContent;
    //When within the length of theQuestions array, display each elment of the array with all button opacity set to 1 (visible). Increase array increment by 1
    if(i < theQuestions.length){
        var questionText = theQuestions[i].question.toString();
        quizQuestion.innerHTML = "";
        quizQuestion.append(questionText);
        //Show answer buttons and populate with next questions
        for(var j = 0; j < theQuestions[i].answers.length; j++){
            this["answer" + j].textContent = theQuestions[i].answers[j];
            this["answer"+j].style.opacity = 1;
        };
        localStorage.setItem("userInput" + (i), target);
        i++;
    }
    //Once all questions are answered within the time limit
    else {
        quizQuestion.innerHTML = "You've finished!"; // Add in what the score is
        timer.textContent = "Quiz Complete";

        //if you want to submit your score - takes you to the leaderboard
        answer0.innerHTML = "Submit Score";
        answer0.addEventListener("click", submitScore);

        //Refreshes the page if you want to try again.
        answer1.innerHTML = "Try Again"
        answer1.addEventListener("click", refreshPage);

        //Adjusts remaining buttons so invisible
        answer2.style.opacity = 0;
        answer3.style.opacity = 0;
    }
}

//Sets the interval to count down in all instances when count is greater than 0 and if the quiz is not complete
function startTimer(){
    interval = setInterval(function() {
        //When the timer hits zero, the timer stops and displays zero, the bold text reads "Time's out!" and the first button is visible as a Try again/refresh button. All other buttons opacity is set to 0 and not click listeners are present.
        if (count<0) {
            clearInterval(interval);
            timer.textContent = "Time: 0";
            quizQuestion.innerHTML = "Time's out!";
            answer0.innerHTML = "Try Again"
            answer0.addEventListener("click", refreshPage);
            answer1.style.opacity = 0;
            answer2.style.opacity = 0;
            answer3.style.opacity = 0;

        }
        //Once all questions are answeres, the time is cleared and the timer displays "Quiz Complete"
        else if (i >= 7){
            clearInterval(interval);
        }
        //For the duration of the quiz the timer continue to count down. If the user answers incorrectly, the timer decrements an additional 10 seconds
        else{ 
            //another nested if to decrement timer an additional 10 seconds if the user's input is incorrect
            timer.textContent = "Time: " + count;
            count--;
        }
    }, 100);
}
//Commentary
function submitScore(){

}

//Reloads the window to take quiz again
function refreshPage(){
    window.location.reload();
    localStorage.clear();
}
