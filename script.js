var startingTime = 60;
var questionEL = document.getElementById("questionText");
var answerOneEl = document.getElementById("btn1");
var answerTwoEl = document.getElementById("btn2");
var answerThreeEl = document.getElementById("btn3");
var answerFourEl = document.getElementById("btn4");
var pageIndex = 1;
var quizPageArray = [
    {
        "set": "1",
        "question": "Commonly used data types DO NOT include:",
        "answer1": "1. strings",
        "answer2": "2. booleans",
        "answer3": "3. alerts",
        "answer4": "4. numbers"
    },
    {
        "set": "2",
        "question": "The condition in an if/else statement is enclosed within ____.",
        "answer1": "1. quotes",
        "answer2": "2. curly brackets",
        "answer3": "3. parentheses",
        "answer4": "4. square brackets"
    },
    {
        "set": "3",
        "question": "Arrays in JavaScript can be used to store ____.",
        "answer1": "1. numbers and strings",
        "answer2": "2. other arrays",
        "answer3": "3. booleans",
        "answer4": "4. all of the above"
    },
    {
        "set": "4",
        "question": "String values must be stored within ____ when being assigned to variables.",
        "answer1": "1. commas",
        "answer2": "2. curly brackets",
        "answer3": "3. quotes",
        "answer4": "4. parentheses"
    },
    {
        "set": "5",
        "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "answer1": "1. JavaScript",
        "answer2": "2. terminal/bash",
        "answer3": "3. for loops",
        "answer4": "4. console log"
    }
];

document.getElementById("startButton").addEventListener("click", function(){
    setInterval(countDown, 1000);
    function countDown() {
        startingTime--;
        document.getElementById("timer").innerHTML = "Timer: " + startingTime;
        if(startingTime === 0){
            alert("GAME OVER");
        }
    }
    startQuiz();
});

document.getElementById("btn1").addEventListener("click", nextPage);



function startQuiz(){
    document.getElementById("startButton").remove();
    document.getElementById("instructions").remove();
    answerOneEl.style.visibility = "visible";
    answerTwoEl.style.visibility = "visible";
    answerThreeEl.style.visibility = "visible";
    answerFourEl.style.visibility = "visible";
    questionEL.textContent = quizPageArray[0].question;
    answerOneEl.textContent = quizPageArray[0].answer1;
    answerTwoEl.textContent = quizPageArray[0].answer2;
    answerThreeEl.textContent = quizPageArray[0].answer3;
    answerFourEl.textContent = quizPageArray[0].answer4;
};
function nextPage(){
    questionEL.textContent = quizPageArray[pageIndex].question;
    answerOneEl.textContent = quizPageArray[pageIndex].answer1;
    answerTwoEl.textContent = quizPageArray[pageIndex].answer2;
    answerThreeEl.textContent = quizPageArray[pageIndex].answer3;
    answerFourEl.textContent = quizPageArray[pageIndex].answer4;
    pageIndex++;

};
