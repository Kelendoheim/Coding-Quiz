var startingTime = 60;
var timerEl = document.getElementById("#timer");







document.getElementById("startButton").addEventListener("click", function(){
    setInterval(countDown, 1000);
    function countDown() {
        startingTime--;
        document.getElementById("timer").innerHTML = "Timer: " + startingTime;
        
        
    }

});

