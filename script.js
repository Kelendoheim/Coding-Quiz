// Global variables are stored here so they may be manipulated appropriately
var startingTime = 60;
var questionEL = document.getElementById("questionText");
var answerOneEl = document.getElementById("btn1");
var answerTwoEl = document.getElementById("btn2");
var answerThreeEl = document.getElementById("btn3");
var answerFourEl = document.getElementById("btn4");
var pageIndex = 1;
var answerButtonsEl = document.getElementsByClassName("answerButton");
var playerName = "";
var finalScore = 0;
// The following array of objects is what will populate the DOM and display each question. The correct value is also here so that it can be compared with user input.
var quizPageArray = [
  {
    set: "1",
    question: "Commonly used data types DO NOT include:",
    answer1: "1. strings",
    answer2: "2. booleans",
    answer3: "3. alerts",
    answer4: "4. numbers",
    correct: "3. alerts",
  },
  {
    set: "2",
    question: "The condition in an if/else statement is enclosed within ____.",
    answer1: "1. quotes",
    answer2: "2. curly brackets",
    answer3: "3. parentheses",
    answer4: "4. square brackets",
    correct: "2. curly brackets",
  },
  {
    set: "3",
    question: "Arrays in JavaScript can be used to store ____.",
    answer1: "1. numbers and strings",
    answer2: "2. other arrays",
    answer3: "3. booleans",
    answer4: "4. all of the above",
    correct: "4. all of the above",
  },
  {
    set: "4",
    question:
      "String values must be stored within ____ when being assigned to variables.",
    answer1: "1. commas",
    answer2: "2. curly brackets",
    answer3: "3. quotes",
    answer4: "4. parentheses",
    correct: "3. quotes",
  },
  {
    set: "5",
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: "1. JavaScript",
    answer2: "2. terminal/bash",
    answer3: "3. for loops",
    answer4: "4. console log",
    correct: "4. console log",
  },
];
// Below is the event listener to start the quiz function
document.getElementById("startButton").addEventListener("click", function () {
  setInterval(countDown, 1000);

  startQuiz();
});
// This for loop will iterate through each button to make sure each one will trigger the nextpage function.
for (i = 0; i < answerButtonsEl.length; i++) {
  answerButtonsEl[i].addEventListener("click", nextPage);
}
// The following function is the countdown timer for the quiz and will redirect the user to the ScriptProcessorNode.html page if time reaches 00. It will also store the score of 0 locally.
function countDown() {
  startingTime--;
  document.getElementById("timer").innerHTML = "Timer: " + startingTime;
  if (startingTime <= 0) {
    window.localStorage.setItem('finalScore', startingTime);
    location.assign("scores.html");
  }
}
// This function will start the quix. It will remove the start button and the instructions for the quiz while populating the page with the question and corresponding answer buttons.
function startQuiz() {
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
}
// the following function will iterate through all future questions and answers as well as decrement the timer if answered incorrectly by user. it will also locally store the final score.
function nextPage(event) {

  if (quizPageArray[pageIndex - 1].correct !== event.target.textContent) {
    startingTime -= 10;
  }

  if (pageIndex < 5) {
    questionEL.textContent = quizPageArray[pageIndex].question;
    answerOneEl.textContent = quizPageArray[pageIndex].answer1;
    answerTwoEl.textContent = quizPageArray[pageIndex].answer2;
    answerThreeEl.textContent = quizPageArray[pageIndex].answer3;
    answerFourEl.textContent = quizPageArray[pageIndex].answer4;
    pageIndex++;
  } else {
    window.localStorage.setItem('finalScore', startingTime);
    location.assign("scores.html");
  }
}