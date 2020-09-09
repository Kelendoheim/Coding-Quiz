var startingTime = 60;
var timerEl = document.getElementById("#timer");







document.getElementById("btn1").addEventListener("click", function(){
    console.log("you hit button1");
    setInterval(countDown, 1000);
    function countDown() {
        startingTime--;
        console.log(startingTime);
        timerEl.textContent = "Timer: " + startingTime;
        document.getElementById("#timer").textContent = "werwer"
        
    }

});

