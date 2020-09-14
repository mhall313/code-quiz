var quizQuestion = document.querySelector("#quiz-question");
var quizAnswers = document.querySelector("#answer");
var answerButtons = document.querySelector("#answer-buttons");
var questResult = document.querySelector("#result");
var i = 0;
var theQuestions = [
    //First Question
    {
        question: "Here the instructions for the quiz will display ",
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
    {
        question: "NEW What are the three fundamental programming languages of the modern web?",
        answers: [
            "1. C++, HTML, JQuery",
            "2. Javascript, HTML, CSS",
            "3. JQuery, HTML, C++",
            "4. None of the above"
        ],
        correctAnswer: "2. Javascript, HTML, CSS"
    },

];
//Show quiz instructions
showCard();

//Function iterate through the object theQuestions containing questions and answers
function showCard(){
    var questionText = theQuestions[i].question.toString();
    if (i===0){
        quizQuestion.append(questionText);
        quizAnswers.innerHTML = "Start!";
        i++;
    }
    else if(i < theQuestions.length){
        quizQuestion.innerHTML = "";
        quizAnswers.innerHTML = "";   
        quizQuestion.append(questionText);
        //add attribute btn-index to iterate through buttons and assign answer property
        for(var j = 0; j < theQuestions[i].answers.length; j++){
            var answerBtn = document.createElement("button");
            answerBtn.textContent = theQuestions[i].answers[j];
            console.log(theQuestions[i].answers[j]);
            answerButtons.appendChild(answerBtn);
        };
        i++;
    }
    else {
        //go to the results page to display high scores
    }

};

function showResult(){
    //if answer is correct display "Correct!" under the next question, otherwise "Incorrect" under the next question

};

//Executes functions to show the next question and the result to the previous question.
quizAnswers.addEventListener("click", function(event){
    showCard();
    showResult();
});



//add on click if button clicked === correct answer then display "Correct" otherwise "Nerp"
