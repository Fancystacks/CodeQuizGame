var myQuestionsAnswers = [
  {
    question: "It is good practice to put a large JavaScript edit within an HTML document.",
    option: "<button class=testButtons onclick=qi()>True</button><br /><br /><button class=testButtons onclick=qc()>Falsec1</button>"
  }, {
    question: "HTML stands for Hypertext Markdown Language.",
    option: "<button class=testButtons onclick=qc()>Falsec2</button><br /><br /><button class=testButtons onclick=qi()>True</button>"
  }, {
    question: "CSS is used to style and design HTML content.",
    option: "<button class=testButtons onclick=qc()>Truec3</button><br /><br /><button class=testButtons onclick=qi()>False</button>"
  }, {
    question: "Local storage can only hold arrays and objects.",
    option: "<button class=testButtons onclick=qi()>True</button><br /><br /><button class=testButtons onclick=qc()>Falsec4</button>"
  }, {
    question: "Vanilla JavaScript is the same thing as jQuery.",
    option: "<button class=testButtons onclick=qc()>Falsec5</button><br /><br /><button class=testButtons onclick=qi()>True</button>"
  }, {
    question: "An boolean is an example of a data type in JavaScript.",
    option: "<button class=testButtons onclick=qi()>False</button><br /><br /><button class=testButtons onclick=qc()>Truec6</button>"
  }, {
    question: "JavaScript is the de facto language of the web.",
    option: "<button class=testButtons onclick=qc()>Truec7</button><br /><br /><button class=testButtons onclick=qi()>False</button>"
  }, {
    question: "All HTML components need a seperate closing tag.",
    option: "<button class=testButtons onclick=qc()>Falsec8</button><br /><br /><button class=testButtons onclick=qi()>True</button>"
  }, {
    question: "!false actually means true.",
    option: "<button class=testButtons onclick=qc()>Truec9</button><br /><br /><button class=testButtons onclick=qi()>False</button>"
  }, {
    question: "An asterisk is jQuery's calling card.",
    option: "<button class=testButtons onclick=qi()>Truec10</button><br /><br /><button class=testButtons onclick=qc()>False</button>"
  }
]

var a = 0;
console.log(a);
a++;
console.log(a);
var b = 0;
b++;
var c = timer;
var previousScore = localStorage.getItem("Score");
var previousInitials = localStorage.getItem("Initials");
var topScores = JSON.parse(localStorage.getItem("topScores"));

// controls display of previous user's initials and score
if (!previousScore) {
  previousScore = 0;
}

if (!previousInitials) {
  previousInitials = '';
}

message1.innerHTML = "Previous user: " + previousInitials;
message2.innerHTML = "Previous score: " + previousScore;

// start of the quiz
function begin() {
  console.log(a);
  c = 15;
  disappear.innerHTML = "";
  message1.innerHTML = myQuestionsAnswers[0].question;
  message2.innerHTML = myQuestionsAnswers[0].option;
  questionNumber.innerHTML = a++;
}

// first question appears and quiz starts
function qc() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Correct";
  message2.innerHTML = "";
  userScore.innerHTML = b++;
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function qi() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Incorrect";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function next() {
  console.log(a)
  if (parseInt(a) >= 1 && parseInt(a) <= 9) {
    update = setInterval("timer()", 1000);
    c = 15;
    timeLeft.innerHTML = 15;
    message1.innerHTML = myQuestionsAnswers[parseInt(a)-1].question;
    message2.innerHTML = myQuestionsAnswers[parseInt(a)-1].option;
    message3.innerHTML = "";
    questionNumber.innerHTML = a++;
    message4.innerHTML = "";
    if (c < 1) {
      window.clearInterval(update);
      message1.innerHTML = "Time's up!";
      message2.innerHTML = "";
      message3.innerHTML = "";
      message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
    }
  }

  else if (a == "10") {
    update = setInterval("timer()", 1000);
    c = 15;
    timeLeft.innerHTML = 15;
    message1.innerHTML = myQuestionsAnswers[parseInt(a)-1].question;
    message2.innerHTML = myQuestionsAnswers[parseInt(a)-1].option;
    message3.innerHTML = "";
    questionNumber.innerHTML = a++;
    message4.innerHTML = "";
  } else {
    window.clearInterval(update);
    c = "-";
    message1.innerHTML = "End of Quiz";
    message2.innerHTML = "";
    message3.innerHTML = "";
    message4.innerHTML = "<button class=buttons onclick=repeat001()>Repeat</button>";
    message5.innerHTML = "<button class=buttons onclick=viewHighScores()>View Highscores</button>";

    var initials = prompt("Please enter your initials.")
    console.log(initials);
    console.log(userScore.innerHTML);

    var currentScore = userScore.innerHTML;

    localStorage.setItem("Score", currentScore);
    localStorage.setItem("Initials", initials);

    var currentUserScore = {
      initials: initials,
      score: currentScore
    }

    if (!topScores) {
      topScores = [];
      topScores[0] = currentUserScore;
    } else if ( currentScore < topScores[topScores.length -1].score) {
      topScores.push(currentUserScore);
    } else if ( currentScore > topScores[0].score) {
      topScores.unshift(currentUserScore);
    } else {
      for (var i = 0; i < topScores.length; i++) {
        if (currentScore === topScores[i].score) {
          topScores.splice(i, 1, currentUserScore)
        } else if (currentScore < topScores[i].score && currentScore > topScores[i + 1].score) {
          topScores.splice(i, 0, currentUserScore)
        }
      }
    }

    if (topScores.length > 5) {
      topScores.pop();
    }

    localStorage.setItem("topScores", JSON.stringify(topScores));
    console.log(localStorage.getItem("topScores"));
  } 
}

function timer() {
  c = c - 1;
  if (c < 15) {
    timeLeft.innerHTML = c;
  }

  if (c < 1) {
    window.clearInterval(update);
    message1.innerHTML = "Time's up!";
    message2.innerHTML = "";
    message3.innerHTML = "";
    message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
  }
}

update = setInterval("timer()", 1000);

function repeat001() {
  location.reload();
}

function viewHighScores() {
  var currentHighScores = JSON.parse(localStorage.getItem("topScores"));
  message5.innerHTML = "<div>Initials: .... Score:</div><br>";
  for (var i = 0; i < currentHighScores.length; i++) {
    message5.innerHTML = message5.innerHTML + "<div>" + currentHighScores[i].initials + " .... " + currentHighScores[i].score + "</div>";
  }
}