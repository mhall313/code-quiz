var quizQuestion = document.querySelector("#quiz-question");
var answer0 = document.querySelector("#answer0");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var questResult = document.querySelector("#result");
var i = 0;
var timer = document.querySelector("#timerText");
var count = 74;

//Variable containing quiz content - Instructions plus quiz questions, answer choices and correct answers. Seven total elements including the instructions
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
    //Initiates quiz by displaying the first element of theQuestions array with instructions and start button. All other buttons disappear through opacity styling. Increase array increment by 1
    if (i===0){
        var questionText = theQuestions[i].question.toString();
        quizQuestion.append(questionText);
        answer0.innerHTML = "Start!";
        for(j=1; j<4; j++){
            this["answer"+j].style.opacity = 0;
        }
        i++;
    }
    //When within the length of theQuestions array, display each elent of the array with all button opacity set to 1 (visible). Increase array increment by 1
    else if(i < theQuestions.length){
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
    //Once all questions are answered within the time limit
    else {
        quizQuestion.innerHTML = "You've finished!"; // Add in what the score is
        timer.textContent = "Quiz Complete";

        //if you want to submit your score - takes you to the leaderboard
        answer0.innerHTML = "Submit Score";

        //Refreshes the page if you want to try again.
        answer1.innerHTML = "Try Again"
        answer1.addEventListener("click", refreshPage);

        //Adjusts remaining buttons so invisible
        answer2.style.opacity = 0;
        answer3.style.opacity = 0;
    }
};
//Commentary
function showResult(event){
    //if answer is correct display "Correct!" under the next question, otherwise "Incorrect" under the next question
    // var element = event.target;
    // localStorage.setItem("userInput"+i,)
};

//Sets the interval to count down in all instances when count is greater than 0 and if the quiz is not complete
function startTimer(){
    interval = setInterval(function() {
        //When the timer hits zero, the timer stops and displays zero, the bold text reads "Time's out!" and the first button is visible as a Try again/refresh button. All other buttons opacity is set to 0 and not click listeners are present.
        if (count<0) {
            clearInterval(interval);
            timer.textContent = "Time: 0";
            quizQuestion.innerHTML = "Time's out!";
            answer0.textContent = "Try Again"
            answer0.addEventListener("click", refreshPage);
            for(j=1; j<4; j++){this["answer"+j].style.opacity = 0;}
        }
        else if (i >= 7){  // need to fix this to be something more concrete
            clearInterval(interval);
            timer.textContent = "Quiz Complete.";
        }
        else{
            //another nested if to decrement timer an additional 10 seconds if the user's input is incorrect
            timer.textContent = "Time: " + count;
            count--;
        }
    }, 100); //remember to change back to 1000 when not testing
};

//Forloop for event listeners so that when any button is clicked, the next question is populated through showCard, the result is stored and shown to the user through showResult, and starts the time in the beginning when there are 74 seconds left.
for(var k = 0; k < theQuestions[i].answers.length; k++){
    this["answer"+k].addEventListener("click",function(){
        //Start timer after clicking start, execute showCard and showResult
        if(count===74){
            startTimer();
            showCard();
            showResult();
        }
        //If within the time limit, continue with event listener; otherwise, buttons no longer have click listeners through this loop
        else if(count < 74 && count > 0){
            showCard();
            showResult();
        }
    });         
};

//Reloads the window
function refreshPage(){
    window.location.reload();
}