var quizQuestion = document.querySelector("#quiz-question");
var answer0 = document.querySelector("#answer0");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var questResult = document.querySelector("#result");
var timer = document.querySelector("#timertext");

var buttons = document.querySelector(".btn");
var i = 0;
var count = 0;
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
        question: "NEW Question?",
        answers: [
            "1. Answer",
            "2. JAnd anotha one",
            "3. c",
            "4. d"
        ],
        correctAnswer: ""
    },

];
//Show quiz instructions
showCard();

//Function iterate through the object theQuestions containing questions and answers
function showCard(){
    //var questionText = theQuestions[i].question.toString();
    if (i===0){
        var questionText = theQuestions[i].question.toString();
        quizQuestion.append(questionText);
        answer0.innerHTML = "Start!";
        answer1.style.opacity = 0;
        answer2.style.opacity = 0;
        answer3.style.opacity = 0;
        i++;
    }
    else if(i < theQuestions.length){
        var questionText = theQuestions[i].question.toString();
        quizQuestion.innerHTML = "";
        answer0.innerHTML = "";   
        answer1.style.opacity = 1;
        answer2.style.opacity = 1;
        answer3.style.opacity = 1;
        quizQuestion.append(questionText);
        //add attribute btn-index to iterate through buttons and assign answer property
        for(var j = 0; j < theQuestions[i].answers.length; j++){
            this["answer"+j].textContent = theQuestions[i].answers[j];
                       
        };
        i++;
    }
    else {
        window.location.href = "highscores.html";
    }

};

function showResult(){
    //if answer is correct display "Correct!" under the next question, otherwise "Incorrect" under the next question

};

//Executes functions to show the next question and the result to the previous question.
buttons.addEventListener("click", function(event){
    showCard();
    showResult();
});



//add on click if button clicked === correct answer then display "Correct" otherwise "Nerp"
