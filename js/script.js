//universal variables

//timer and quiz start
var end = false;
var seconds =75;
var scoresObject = {

}

//array the stores score.
var score =0;
function addScore(){
    score += 20;
}
// takes 15 seconds off the clock when answer is wrong 
function penalty(){
    var penalty = 15;
seconds = seconds - penalty;
    document.getElementById("timer").innerHTML ="timer: " + --seconds;

}
function quizStart(){
    var timer = setInterval(clock, 1000);
    question1();
    function clock () {
        document.getElementById("timer").innerHTML ="timer: " +  --seconds;
        if (end === true){
            clearInterval(timer)
            score[0] = seconds;
          
        }
        

        if (seconds === 0 || seconds < 0){
            
            document.getElementById("timer").innerHTML ="timer:0 " ;
            clearInterval(timer);
            window.alert("Time is up!");
            quizEnd();
        }
        
    }
    var finalScore = score[0];
    return finalScore;
}
//end of timer and quiz start 

//start of question pop ups
var key = [
    { q: 'Commonly used data types DO Not include:', a: 'alerts' },
    { q: 'The condition in an if / else statement is enclosed with ____.', a: 'parenthesis' },
    { q: 'Arrays in JavaScript can be used to store ____.', a: 'All of the above' },
    { q: 'String value must be inclosed within _____ when assigned to variables.', a: 'qoutes' },
    { q: 'A very useful tool used in development and debugging for printing content in the debugger is called ________.', a: 'console.log' }
  ];
//function question1() is called when the start button is clicked this program will flow by event listeners when ever the user clicks an answer (right or wrong) the click will take them to the next question which is another function that does the exact same thing.
function question1(){

    document.getElementById("question").innerHTML = key[0].q;
    document.getElementById("question").setAttribute('style', ' font-size:50px;');
    document.getElementById("text").innerHTML = "";
    document.getElementById("start").remove();
    var buttons = document.createElement("div");
    var btn1 = document.createElement("BUTTON");
    var btn2 = document.createElement("BUTTON");
    var btn3 = document.createElement("BUTTON");
    var btn4 = document.createElement("BUTTON");
    btn1.innerHTML ="1.strings";
    btn2.innerHTML = "2. booleans";
    btn3.innerHTML = '3.' + key[0].a;
    btn4.innerHTML = '4. numbers';

    buttons.classList.add("buttons");
    btn1.classList.add("btnstyle"); 
    btn2.classList.add("btnstyle");
    btn3.classList.add("btnstyle");
    btn4.classList.add("btnstyle");
    buttons.setAttribute('id','buttonSection')
    btn1.setAttribute('id', 'answer1')
    btn2.setAttribute('id', 'answer2')
    btn3.setAttribute('id', 'answer3')
    btn4.setAttribute('id', 'answer4') 

    document.body.appendChild(buttons)
    buttons.appendChild(btn1);
    buttons.appendChild(btn2);
    buttons.appendChild(btn3);
    buttons.appendChild(btn4);
    var answer1 = document.querySelector("#answer1");
    var answer2 = document.querySelector("#answer2");
    var answer3 = document.querySelector("#answer3");
    var answer4 = document.querySelector("#answer4");
//border at the bottom stating whether the question was right or wrong
    function correct(){
        var area = document.createElement("div");
        area.setAttribute('id','area');
        var text = document.createElement ("p");
        text.innerHTML = "Correct!";
        text.setAttribute('style','; width:90%; margin:100px;display:flex; justify-content:flex-start; border-top: solid 3px; border-color:grey; color:grey; font-size:50px;')
        
        document.body.appendChild(area);
        area.appendChild(text);
        
        
    }
    function wrong(){
        var area = document.createElement("div");
        area.setAttribute('id','area');

        var text = document.createElement ("p");
        text.innerHTML = "Wrong!";
        text.setAttribute('style','; width:90%; margin:100px;display:flex; justify-content:flex-start; border-top: solid 3px; border-color:grey; color:grey; font-size:50px;')
        
        document.body.appendChild(area);
        area.appendChild(text);
        
        
    }

    answer1.addEventListener("click",question2);
    answer1.addEventListener("click",wrong);
    answer1.addEventListener("click",penalty);
    answer2.addEventListener("click",question2);
    answer2.addEventListener("click",wrong);
    answer2.addEventListener("click",penalty);
    answer3.addEventListener("click",question2);
    answer3.addEventListener("click",correct);
    answer3.addEventListener("click",addScore)
    answer4.addEventListener("click",question2);
    answer4.addEventListener("click",wrong);
    answer4.addEventListener("click",penalty);

}



// question #2
function question2(){
    document.getElementById("question").innerHTML = key[1].q;
    document.getElementById("question").setAttribute('style', ' font-size:50px;');
    document.getElementById("text").innerHTML = "";
// removes previous questions 
    document.getElementById("buttonSection").remove();
    var buttons = document.createElement("div");
    var btn1 = document.createElement("BUTTON");
    var btn2 = document.createElement("BUTTON");
    var btn3 = document.createElement("BUTTON");
    var btn4 = document.createElement("BUTTON");
    btn1.innerHTML ="1.strings";
    btn2.innerHTML = "2. booleans";
    btn3.innerHTML = '3.' + key[1].a;
    btn4.innerHTML = '4. numbers';

    buttons.classList.add("buttons");
    btn1.classList.add("btnstyle"); 
    btn2.classList.add("btnstyle");
    btn3.classList.add("btnstyle");
    btn4.classList.add("btnstyle");
    buttons.setAttribute('id','buttonSection')
    btn1.setAttribute('id', 'answer1')
    btn2.setAttribute('id', 'answer2')
    btn3.setAttribute('id', 'answer3')
    btn4.setAttribute('id', 'answer4') 

    document.body.appendChild(buttons)
    buttons.appendChild(btn1);
    buttons.appendChild(btn2);
    buttons.appendChild(btn3);
    buttons.appendChild(btn4);
    var answer1 = document.querySelector("#answer1");
    var answer2 = document.querySelector("#answer2");
    var answer3 = document.querySelector("#answer3");
    var answer4 = document.querySelector("#answer4");
//border at the bottom stating whether the question was right or wrong
    function correct(){
        document.getElementById("area").remove();
        var area = document.createElement("div");
        area.setAttribute('id','area');

        var text = document.createElement ("p");
        text.innerHTML = "Correct!";
        text.setAttribute('style','; width:90%; margin:100px;display:flex; justify-content:flex-start; border-top: solid 3px; border-color:grey; color:grey; font-size:50px;')
        
        document.body.appendChild(area);
        area.appendChild(text);
        
        
    }
    function wrong(){
        document.getElementById("area").remove();

        var area = document.createElement("div");
        area.setAttribute('id','area');

        var text = document.createElement ("p");
        text.innerHTML = "Wrong!";
        text.setAttribute('style','; width:90%; margin:100px;display:flex; justify-content:flex-start; border-top: solid 3px; border-color:grey; color:grey; font-size:50px;')
        
        document.body.appendChild(area);
        area.appendChild(text);
        
        
    }

    answer1.addEventListener("click",question3);
    answer1.addEventListener("click",wrong);
    answer1.addEventListener("click",penalty);
    answer2.addEventListener("click",question3);
    answer2.addEventListener("click",wrong);
    answer2.addEventListener("click",penalty);
    answer3.addEventListener("click",question3);
    answer3.addEventListener("click",correct);
    answer3.addEventListener("click",addScore)
    answer4.addEventListener("click",question3);
    answer4.addEventListener("click",wrong);
    answer4.addEventListener("click",penalty);
}
function question3(){
        document.getElementById("question").innerHTML = key[2].q;
        document.getElementById("question").setAttribute('style', ' font-size:50px;');
        document.getElementById("text").innerHTML = "";
    // removes previous questions 
        document.getElementById("buttonSection").remove();
        var buttons = document.createElement("div");
        var btn1 = document.createElement("BUTTON");
        var btn2 = document.createElement("BUTTON");
        var btn3 = document.createElement("BUTTON");
        var btn4 = document.createElement("BUTTON");
        btn1.innerHTML = "1.numbers and strings";
        btn2.innerHTML = "2. other arrays";
        btn3.innerHTML = '3. booleans';
        btn4.innerHTML = '4.' + key[2].a;
    
        buttons.classList.add("buttons");
        btn1.classList.add("smallerFont"); 
        btn2.classList.add("btnstyle");
        btn3.classList.add("btnstyle");
        btn4.classList.add("smallerFont");
        buttons.setAttribute('id','buttonSection')
        btn1.setAttribute('id', 'answer1')
        btn2.setAttribute('id', 'answer2')
        btn3.setAttribute('id', 'answer3')
        btn4.setAttribute('id', 'answer4') 
    
        document.body.appendChild(buttons)
        buttons.appendChild(btn1);
        buttons.appendChild(btn2);
        buttons.appendChild(btn3);
        buttons.appendChild(btn4);
        var answer1 = document.querySelector("#answer1");
        var answer2 = document.querySelector("#answer2");
        var answer3 = document.querySelector("#answer3");
        var answer4 = document.querySelector("#answer4");
    //border at the bottom stating whether the question was right or wrong
        function correct(){
            document.getElementById("area").remove();
            var area = document.createElement("div");
            area.setAttribute('id','area');

            var text = document.createElement ("p");
            text.innerHTML = "Correct!";
            text.setAttribute('style','; width:90%; margin:100px;display:flex; justify-content:flex-start; border-top: solid 3px; border-color:grey; color:grey; font-size:50px;')
            
            document.body.appendChild(area);
            area.appendChild(text);
            
            
        }
        function wrong(){
            document.getElementById("area").remove();
    
            var area = document.createElement("div");
            area.setAttribute('id','area');

            var text = document.createElement ("p");
            text.innerHTML = "Wrong!";
            text.setAttribute('style','; width:90%; margin:100px;display:flex; justify-content:flex-start; border-top: solid 3px; border-color:grey; color:grey; font-size:50px;')
            
            document.body.appendChild(area);
            area.appendChild(text);
            
            
        }
    // when clicked the eventlisteners trigger certain functions
        answer1.addEventListener("click",question4);
        answer1.addEventListener("click",wrong);
        answer1.addEventListener("click",penalty);
        answer2.addEventListener("click",question4);
        answer2.addEventListener("click",wrong);
        answer2.addEventListener("click",penalty);
        answer3.addEventListener("click",question4);
        answer3.addEventListener("click",wrong);
        answer3.addEventListener("click",penalty);
        answer4.addEventListener("click",question4);
        answer4.addEventListener("click",correct);
        answer4.addEventListener("click",addScore)

}
function question4(){
    document.getElementById("question").innerHTML = key[3].q;
    document.getElementById("question").setAttribute('style', ' font-size:50px;');
    document.getElementById("text").innerHTML = "";
// removes previous questions 
    document.getElementById("buttonSection").remove();
    var buttons = document.createElement("div");
    var btn1 = document.createElement("BUTTON");
    var btn2 = document.createElement("BUTTON");
    var btn3 = document.createElement("BUTTON");
    var btn4 = document.createElement("BUTTON");
    btn1.innerHTML = "1. commas";
    btn2.innerHTML = "2. curly brackets";
    btn3.innerHTML = '3. ' + key[3].a;
    btn4.innerHTML = '4. parenthesis';

    buttons.classList.add("buttons");
    btn1.classList.add("btnstyle"); 
    btn2.classList.add("smallerFont");
    btn3.classList.add("btnstyle");
    btn4.classList.add("btnstyle");
    buttons.setAttribute('id','buttonSection')
    btn1.setAttribute('id', 'answer1')
    btn2.setAttribute('id', 'answer2')
    btn3.setAttribute('id', 'answer3')
    btn4.setAttribute('id', 'answer4') 

    document.body.appendChild(buttons)
    buttons.appendChild(btn1);
    buttons.appendChild(btn2);
    buttons.appendChild(btn3);
    buttons.appendChild(btn4);
    var answer1 = document.querySelector("#answer1");
    var answer2 = document.querySelector("#answer2");
    var answer3 = document.querySelector("#answer3");
    var answer4 = document.querySelector("#answer4");
//border at the bottom stating whether the question was right or wrong
    function correct(){
        document.getElementById("area").remove();
        var area = document.createElement("div");
        area.setAttribute('id','area');

        var text = document.createElement ("p");
        text.innerHTML = "Correct!";
        text.setAttribute('style','; width:90%; margin:100px;display:flex; justify-content:flex-start; border-top: solid 3px; border-color:grey; color:grey; font-size:50px;')
        
        document.body.appendChild(area);
        area.appendChild(text);
        
        
    }
    function wrong(){
        document.getElementById("area").remove();

        var area = document.createElement("div");
        area.setAttribute('id','area');

        var text = document.createElement ("p");
        text.innerHTML = "Wrong!";
        text.setAttribute('style','; width:90%; margin:100px;display:flex; justify-content:flex-start; border-top: solid 3px; border-color:grey; color:grey; font-size:50px;')
        
        document.body.appendChild(area);
        area.appendChild(text);
        
        
    }
// when clicked the eventlisteners trigger certain functions
    answer1.addEventListener("click",question5);
    answer1.addEventListener("click",wrong);
    answer1.addEventListener("click",penalty);
    answer2.addEventListener("click",question5);
    answer2.addEventListener("click",wrong);
    answer2.addEventListener("click",penalty);
    answer3.addEventListener("click",question5);
    answer3.addEventListener("click",correct);
    answer3.addEventListener("click",addScore);
    answer4.addEventListener("click",question5);
    answer4.addEventListener("click",wrong);
    answer4.addEventListener("click",penalty);
}
function question5(){
   document.getElementById("question").innerHTML = key[4].q;
    document.getElementById("question").setAttribute('style', ' font-size:50px;');
    document.getElementById("text").innerHTML = "";
// removes previous questions 
    document.getElementById("buttonSection").remove();
    var buttons = document.createElement("div");
    var btn1 = document.createElement("BUTTON");
    var btn2 = document.createElement("BUTTON");
    var btn3 = document.createElement("BUTTON");
    var btn4 = document.createElement("BUTTON");
    btn1.innerHTML = "1. JavaSript";
    btn2.innerHTML = "2. terminal/bash";
    btn3.innerHTML = '3. for loops';
    btn4.innerHTML = '4. ' + key[4].a;

    buttons.classList.add("buttons");
    btn1.classList.add("btnstyle"); 
    btn2.classList.add("smallerFont");
    btn3.classList.add("btnstyle");
    btn4.classList.add("btnstyle");
    buttons.setAttribute('id','buttonSection')
    btn1.setAttribute('id', 'answer1')
    btn2.setAttribute('id', 'answer2')
    btn3.setAttribute('id', 'answer3')
    btn4.setAttribute('id', 'answer4') 

    document.body.appendChild(buttons)
    buttons.appendChild(btn1);
    buttons.appendChild(btn2);
    buttons.appendChild(btn3);
    buttons.appendChild(btn4);
    var answer1 = document.querySelector("#answer1");
    var answer2 = document.querySelector("#answer2");
    var answer3 = document.querySelector("#answer3");
    var answer4 = document.querySelector("#answer4");
//border at the bottom stating whether the question was right or wrong
    function correct(){
        document.getElementById("area").remove();
        var area = document.createElement("div");
        area.setAttribute('id','area');

        var text = document.createElement ("p");
        text.innerHTML = "Correct!";
        text.setAttribute('style','; width:90%; margin:100px;display:flex; justify-content:flex-start; border-top: solid 3px; border-color:grey; color:grey; font-size:50px;')
        
        document.body.appendChild(area);
        area.appendChild(text);
        
        
    }
    function wrong(){
        document.getElementById("area").remove();

        var area = document.createElement("div");
        area.setAttribute('id','area');

        var text = document.createElement ("p");
        text.innerHTML = "Wrong!";
        text.setAttribute('style','; width:90%; margin:100px;display:flex; justify-content:flex-start; border-top: solid 3px; border-color:grey; color:grey; font-size:50px;')
        
        document.body.appendChild(area);
        area.appendChild(text);
        
        
    }
// when clicked the eventlisteners trigger certain functions
   answer1.addEventListener("click",wrong);
    answer1.addEventListener("click",penalty);
    answer1.addEventListener("click",quizEnd);
    answer2.addEventListener("click",wrong);
    answer2.addEventListener("click",penalty);
    answer2.addEventListener("click",quizEnd);
    answer3.addEventListener("click",wrong);
    answer3.addEventListener("click",penalty);
    answer3.addEventListener("click",quizEnd);
    answer4.addEventListener("click",addScore);
    answer4.addEventListener("click",correct);
    answer4.addEventListener("click",quizEnd);

}
//quiz end 
var initials  = null;
function quizEnd(){

    end = true;
    // var finalscore = score[0];
    document.getElementById("buttonSection").remove();
    document.getElementById('area').remove();

    document.getElementById("question").innerHTML = "All Done !";
    var text= document.createElement("p");
    text.innerHTML = "Your final score is " + score + "/100." ;
    text.setAttribute('style','margin-left: 500px; font-size:50px;');
    var section = document.createElement("div");
    var text1 = document.createElement("p");
    var form = document.createElement("input");
    var btn = document.createElement("button");
    // btn.classList.add("btnstyle");
    section.setAttribute('style', 'display:flex; justify-content:center; align-items:center;')
    text1.setAttribute('style', "padding:0;")
    text1.innerHTML= "Enter initials: ";
    form.setAttribute('style', 'font-size:20px; width: 25%; height:25%;')
    text1.setAttribute('style', ' font-size:50px;');

    btn.innerHTML = "Submit"
    btn.setAttribute('id', 'submit')
    form.setAttribute('id', 'form')

    

document.body.appendChild(text)
    document.body.appendChild(section);
    section.appendChild(text1);
    section.appendChild(form);
    section.appendChild(btn);
// save score and initials to an array 
    function save(){
        var initial = document.getElementById('form').value;
        initials=initial;
       localStorage.setItem(initials, score);
    }

     var enter = document.querySelector("#submit");
     enter.addEventListener("click",save);

    


}
var theScores = document.querySelector("#view");



 function view(){
document.getElementById('body').innerHTML="";
body.setAttribute('style', ';margin-left:40%; justify-content:center ; margin-top:15%;')
var div = document.createElement("div");
var h1 = document.createElement("h1");
var scores = document.createElement("p");
scores.setAttribute('id', 'total');
var btnRefresh = document.createElement("BUTTON");
btnRefresh.setAttribute('id', 'refresh');
var btnClear = document.createElement("BUTTON");
btnClear.setAttribute('id', 'clear')
h1.innerHTML = "High Scores"
// scores.innerHTML = initials + " - " + score;
btnRefresh.innerHTML = "Go Back";
btnClear.innerHTML = "Clear"

document.body.appendChild(div);
body.appendChild(h1);
body.appendChild(scores)
body.appendChild(btnRefresh);
body.appendChild(btnClear);
var goBack = document.querySelector("#refresh");
var clear = document.querySelector("#clear")
for (i = 0; i < localStorage.length; i++) {
    x = localStorage.key(i);
    document.getElementById("total").innerHTML +=  x + " - " +score+"</br>";
  }
function reload() {
    location.reload();
}
function clearscores() {
    document.getElementById('total').innerHTML="";
    localStorage.clear();
}

goBack.addEventListener("click",reload)
clear.addEventListener("click", clearscores)
 }
 
//end of questions
//query selectors

var startEL = document.querySelector('#start')
//end of query selectors.
//event listners
startEL.addEventListener("click",quizStart);
theScores.addEventListener("click",view)
