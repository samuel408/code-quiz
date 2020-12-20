// variables
var clear = function(){
    document.getElementById("main").innerHTML ="";
}
var startEL = document.querySelector('#start')
//timer and quiz start
function quizStart(){
    var timer = setInterval(clock, 1000)
    var seconds =75;
    clear();
    function clock () {
        document.getElementById("timer").innerHTML ="timer: " +  --seconds;
        console.log(seconds);
        if (seconds === 0){
            clearInterval(timer)
            window.alert("Time is up!");
        }
    }
    
}

//end of timer 

//start quiz clears introduction to quiz

//end of introducion clear 

//event listners
startEL.addEventListener("click",quizStart)