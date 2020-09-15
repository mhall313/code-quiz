//Slew of variables to call upon HTML elements in functions
var quizQuestion = document.querySelector("#quiz-question");
var answer0 = document.querySelector("#answer0");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var userIni = document.querySelector("#initials");
var questResult = document.querySelector("#result");
var resultStyle = document.querySelector("#result-style");
var timer = document.querySelector("#timerText");

//Iterative Variable for showCard function to move through array theQuestions and signal when quiz is complete
var i = 0;
//Variable to increment timer - timer is shown as 60 seconds in index.html so there is a smaller lah between when the user clicks and when the timer ticks down
var count = 59;
//variable for score - users score starts at zero
var score = 0;

//Variable containing quiz content - 6 total elements including quiz questions, answer choices and correct answers
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
            correctAnswer: "3. both 1. and 2."
        }
];

//Initially hide 3 buttons and Name input for scoreboard
answer1.style.opacity = 0;
answer1.style.height = "0";
answer2.style.opacity = 0;
answer2.style.height = "0";
answer3.style.opacity = 0;
answer3.style.height = "0";
userIni.style.opacity = 0;
userIni.style.height = "0";
resultStyle.style.opacity = 0;

//Initial set up to show quiz instructions and Start in button
quizQuestion.append("Test your coding knowledge before the time runs out! Get an answer wrong and the time drops by 10 seconds. When you're done, log your high score!");
answer0.innerHTML = "Start!";

//Start timer on initial click of the first button
answer0.addEventListener("click",function(){
    if(count===59){
        startTimer();
    }  
});

//Function to build each card/question of the quiz and log user input of button clicked to local storage - iterate through array theQuestions using variable i and log clicks to local storage. Once the user has reached the end of array theQuestions, HTML elements are populated with user's score and buttons to try again or submit name to scoreboard.
function showCard(event){
    //Assigns text content of the buttons clicked/event to the variable target
    var target = event.target.textContent;
    resultStyle.style.opacity = .7;
    //When i is 0 and start is clicked, show index 0 of theQuestions array with 4 answer selections the execute function showResult
    if ( i === 0){
        var questionText = theQuestions[i].question.toString();
        quizQuestion.innerHTML = "";
        quizQuestion.append(questionText);
        resultStyle.style.opacity = 0;
        //Show answer buttons and populate with answers in order of index
        for(var j = 0; j < theQuestions[i].answers.length; j++){
            this["answer" + j].textContent = theQuestions[i].answers[j];
            this["answer"+j].style.opacity = 1;
            this["answer"+j].style.height = "auto";
        };
        showResult();
    }
    ///When within the length of theQuestions array, display each elment of the array with all button opacity set to 1 (visible). Increase array increment i by 1, store input/button clicked to local storage and execute function showResult
    else if(i < theQuestions.length){
        var questionText = theQuestions[i].question.toString();
        quizQuestion.innerHTML = "";
        quizQuestion.append(questionText);
        //Show answer buttons and populate with next questions
        for(var j = 0; j < theQuestions[i].answers.length; j++){
            this["answer" + j].textContent = theQuestions[i].answers[j];
            this["answer"+j].style.opacity = 1;
            this["answer"+j].style.height = "auto";
        };
        //Store the users click to local storage as userInput[i] then execute function showResult
        localStorage.setItem("userInput" + i, target);
        showResult();
    }
    //Once all questions are answered within the time limit display user's score and input feild to submit high score
    else if (i === theQuestions.length){
        localStorage.setItem(("userInput" + i), target);
        showResult();
        quizQuestion.innerHTML = "You've finished! Your score is " + score + " melanpoints! Enter your name below and click submit to save your score."; 
        timer.textContent = "Quiz Complete";
        userIni.style.height = "75px";
        userIni.style.opacity = 1;
        questResult.innerHTML = "";
        questResult.append("Bring in the Dancing Lobsters!");

        //if you want to submit your score - takes you to the leaderboard
        answer0.innerHTML = "Submit Score";
        answer0.addEventListener("click", submitScore);

        //Refreshes the page if you want to try again.
        answer1.innerHTML = "Try Again"
        answer1.addEventListener("click", refreshPage);

        //Adjusts remaining buttons so invisible
        answer2.style.opacity = 0;
        answer3.style.opacity = 0;
        answer2.style.height = "0";
        answer3.style.height = "0";
    }
}

//Function to move through theQuestions array with iterator i, log and validate user input against the correct answer of each element in the array theQuestions
function showResult(){
    if(i===0){
      //wait for click to move past start menu to the first question  
    }
    else if(i <= theQuestions.length){
        var correctText = theQuestions[(i-1)].correctAnswer.toString();
        var userText = localStorage.getItem("userInput"+i);
        //If user gets question correct, add 1000 melanpoints
        if (correctText === userText){
            questResult.innerHTML = "";
            questResult.append("Correct! The answer was " + correctText);
            score = score + 1000;
        }
        //If user gets the question wrong, deduct an additional 10 seconds from the timer
        else{
            questResult.innerHTML = "";
            questResult.append("Incorrect. The answer was not " + userText);
            count = count - 10;
        }
    }
    else{
        //I think this isn't necessary. Will verify when brain works again
    }
    i++;
}

//Sets the interval to count down in all instances when count is greater than 0 and if the quiz is not complete
function startTimer(){
    interval = setInterval(function() {
        //When the timer hits zero, the timer stops and displays zero, the bold text reads "Time's out!" and the first button is visible as a Try again/refresh button. All other buttons opacity are set to 0 
        if (count<0) {
            clearInterval(interval);
            timer.textContent = "Time: 0";
            quizQuestion.innerHTML = "Time's out! Your score is " + score + " melanpoints. Try again, finish the quiz and log your score to the score board!";
            answer0.innerHTML = "Try Again"
            questResult.innerHTML = "";
            answer0.addEventListener("click", refreshPage);
            answer1.style.opacity = 0;
            answer2.style.opacity = 0;
            answer3.style.opacity = 0;

        }
        //Once all questions are answered, the time is cleared and the timer displays "Quiz Complete"
        else if (i >= 6){
            clearInterval(interval);
        }
        //For the duration of the quiz the timer continues to count down.
        else{ 
            timer.textContent = "Time: " + count;
            count--;
        }
    }, 1000); //1000 = decrement every second
}

//Logs the users score and name to local storage and redirects to highscores html
function submitScore(){
    // take userIni inner text and store to local storage with score
    localStorage.setItem("highScore", userIni.value);
    localStorage.setItem("userScore", score);
    location.href = "highscores.html"
}

//Reloads the window to take quiz again and removes user input/click values from local storage
function refreshPage(){
    window.location.reload();
    for(var j = 0; j < 7; j++){
        localStorage.removeItem("userInput" +j);
    }
}
