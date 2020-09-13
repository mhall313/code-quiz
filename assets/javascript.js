var quizQuestion = document.getElementsByClassName("quiz-question");
var quizAnswers = document.getElementsByClassName("quiz-answers");
var questResult = document.getElementsByName("result");

var theQuestions = [
    //First Question
    {
        question: "Here the instructions for the quiz will display ",
        start: "Start Quiz",
        option2: "",
        option3: "",
        option4: "",
        correctAnswer: ""
    },
    //Second Question
    {
        question: "What are the three fundamental programming languages of the modern web?",
        start: "1. C++, HTML, JQuery",
        option2: "2. Javascript, HTML, CSS",
        option3: "3. JQuery, HTML, C++",
        option4: "4. None of the above",
        correctAnswer: "2. Javascript, HTML, CSS"
    },
//     //Third Question
//     {
//         question:
//         start:
//         option2:
//         option3:
//         option4:
//         correctAnswer:
//     },
//     //Forth Question
//     {
//         question:
//         start:
//         option2:
//         option3:
//         option4:
//         correctAnswer:
//     },
//     //Fifth Question
//     {
//         question:
//         start:
//         option2:
//         option3:
//         option4:
//         correctAnswer:
//     }
];

function showQuestion(){
    var visible = [];
    
    


    visible.push("This works");
    console.log(visible);
};

function showResult(){

};

showQuestion();

//add on click if button clicked === correct answer then display "Correct" otherwise "Nerp"
