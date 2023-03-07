var startquiz = document.getElementById("startquiz");

time = 45;
score = 0;
hs = highscore.textContent;

//Start Quiz button is pressed
startquiz.onclick = firststart;

//Clear Highscore Function
function clearhighscore() {
  document.getElementById("highscore").textContent = 0;
  document.getElementById("winner").textContent = "NA";
};

//Time up Function
function timeup() {
  document.getElementById("restart").style.display = "block";
  document.getElementById("clear").style.display = "block";
  document.getElementById("restart").onclick = function() {firststart();};
  document.getElementById("a1").style.display = "none";
  document.getElementById("a2").style.display = "none";
  document.getElementById("a3").style.display = "none";
  document.getElementById("a4").style.display = "none";
  question.innerText = ("Time Up!");
}

//answer right
function right() {
  answer.textContent = "Right"
    score = score + 3;
    count.textContent = score;
};

//answer wrong
function wrong() {
  answer.textContent = "Wrong!";
  time = time - 5;
};

//final right answer
function rightfin() {
  answer.textContent = "Right"
    finalscore = score + time + 3;
    count.textContent = finalscore;
    clearInterval(countdown);
    hs = highscore.textContent;
    //if function to check hs
    if (finalscore > hs) {
      highscore.textContent = finalscore;
      winner.textContent = prompt("You got the new highscore! What are your initials?");
    }
    //create end buttons
    restart.style.display = "block";
    clear.style.display = "block";
    document.getElementById("clear").onclick = function() {clearhighscore();};
    document.getElementById("restart").onclick = function() {firststart();};
};

//final wrong anser
function wrongfin() {
  answer.textContent = "wrong"
  time = time - 10;
  finalscore = score + time;
  count.textContent = finalscore;
  clearInterval(countdown);
  hs = highscore.textContent;
//if function to check hs
  if (finalscore > hs) {
   highscore.textContent = finalscore;
   winner.textContent = prompt("You got the new highscore! What are your initials?");
  }
  //create end buttons
  restart.style.display = "block";
  clear.style.display = "block";
  document.getElementById("clear").onclick = function() {clearhighscore();};
  document.getElementById("restart").onclick = function() {quizsetup();};
};

function quiz5() {
  //Question
  question.innerText = ("How do you add a comment in CSS");
  
  //Change Answer Choices
  document.getElementById("a1").textContent = "//This is a comment";
  document.getElementById("a2").textContent = "<!--This is a comment-->";
  document.getElementById("a3").textContent = "'This is a comment'";
  document.getElementById("a4").textContent = "/*This is a comment*/";

  //Change correct answer
  document.getElementById("a1").onclick = function() {wrongfin();};
  document.getElementById("a2").onclick = function() {wrongfin();}; 
  document.getElementById("a3").onclick = function() {wrongfin();};
  document.getElementById("a4").onclick = function() {rightfin();};
};

function quiz4() {
  //Question
  question.innerText = ("How do you make a new function in JavaScript?");

  //Change Answer Choices
  document.getElementById("a1").textContent = "function newFunction()";
  document.getElementById("a2").textContent = "function=newFunction()";
  document.getElementById("a3").textContent = "function:newFunction()";
  document.getElementById("a4").textContent = "Function [newFunction()]";

  //Change correct answer
  document.getElementById("a1").onclick = function() {right(); quiz5();};
  document.getElementById("a2").onclick = function() {wrong(); quiz5();}; 
  document.getElementById("a3").onclick = function() {wrong(); quiz5();};
  document.getElementById("a4").onclick = function() {wrong(); quiz5();};
};

function quiz3() {
  //Question
  question.innerText = ("What HTML element inserts a line break");

  //Change Answer Choices
  document.getElementById("a1").textContent = "<break>";
  document.getElementById("a2").textContent = "<nl>";
  document.getElementById("a3").textContent = "<br>";
  document.getElementById("a4").textContent = "<lb>";

  //Change correct answer
  document.getElementById("a1").onclick = function() {wrong(); quiz4();};
  document.getElementById("a2").onclick = function() {wrong(); quiz4();}; 
  document.getElementById("a3").onclick = function() {right(); quiz4();};
  document.getElementById("a4").onclick = function() {wrong(); quiz4();};
};


function quiz2() {
  //Question
  question.innerText = ("What does CSS stand for?");

  //Change Answer Choices
  document.getElementById("a1").textContent = "Cascading Style Sheet";
  document.getElementById("a2").textContent = "Computer Style Standards";
  document.getElementById("a3").textContent = "Creative Style Sheets";
  document.getElementById("a4").textContent = "Controlled Styling Standard";

  //Change correct answer
  document.getElementById("a1").onclick = function() {right(); quiz3();};
  document.getElementById("a2").onclick = function() {wrong(); quiz3();}; 
  document.getElementById("a3").onclick = function() {wrong(); quiz3();};
  document.getElementById("a4").onclick = function() {wrong(); quiz3();};
};

function quiz1() {
  //Question
  question.innerText = ("What does HTML stand for?");

  //Set Answer Choices
  document.getElementById("a1").textContent = "Hyperlink and text marker language";
  document.getElementById("a2").textContent = "HyperText Markup Language";
  document.getElementById("a3").textContent = "Home tools marketing level";
  document.getElementById("a4").textContent = "Helpful technology makers launcher";

  //Set correct Answer
  document.getElementById("a1").onclick = function() {wrong(); quiz2();};
  document.getElementById("a2").onclick = function() {right(); quiz2();}; 
  document.getElementById("a3").onclick = function() {wrong(); quiz2();};
  document.getElementById("a4").onclick = function() {wrong(); quiz2();};
};

function quizsetup() {
  answer.textContent = ""
  document.getElementById("restart").style.display = "none";
  document.getElementById("clear").style.display = "none";
  document.getElementById("a1").style.display = "block";
  document.getElementById("a2").style.display = "block";
  document.getElementById("a3").style.display = "block";
  document.getElementById("a4").style.display = "block";
  score = 0;
  time = 44;
  count.textContent = score;
  quiz1();
};

//Starts Quiz
function firststart() {
  startquiz.remove();
  quizsetup();
  countdown = setInterval(function () {
  if (time > 1) {
    //sets time counter while time is greater than 0
    document.getElementById("timer").textContent = time;
    // Decrement `time` by 1
    time--;
  } 
  else {
    // Once time runs out end quiz
    document.getElementById("timer").textContent = '0';
    clearInterval(countdown);
    timeup();
  }
  }, 1000);
  };


