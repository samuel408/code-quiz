//universal variables

//timer and quiz start

var seconds =75;
// takes 15 seconds off the clock when answer is wrong 
function penalty(){
    var penalty = 15;
seconds = seconds - penalty;
    document.getElementById("timer").innerHTML ="timer: " + --seconds;

}
function quizStart(){
    var timer = setInterval(clock, 1000)
    question1();
    function clock () {
        document.getElementById("timer").innerHTML ="timer: " +  --seconds;
        if (seconds === 0 || seconds < 0){
            document.getElementById("timer").innerHTML ="timer:0 " ;
            clearInterval(timer)
            window.alert("Time is up!");

        }
    }
    
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
    answer1.addEventListener("click",next);
    answer1.addEventListener("click",wrong);
    answer1.addEventListener("click",penalty);
    answer2.addEventListener("click",next);
    answer2.addEventListener("click",wrong);
    answer2.addEventListener("click",penalty);
    answer3.addEventListener("click",next);
    answer3.addEventListener("click",wrong);
    answer3.addEventListener("click",penalty);
    answer4.addEventListener("click",next);
    answer4.addEventListener("click",correct);
}
//filler function 
function next(){
console.log("works")
}
//end of questions
//query selectors

var startEL = document.querySelector('#start')
//end of query selectors.
//event listners
startEL.addEventListener("click",quizStart);
