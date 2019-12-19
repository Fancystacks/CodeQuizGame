
var myQuestions = ["It is good practice to put a large JavaScript edit within an HTML document.",
  "HTML stands for Hypertext Markdown Language.",
  "CSS is used to style and design HTML content.",
  "Local storage can only hold arrays and objects.",
  "Vanilla JavaScript is the same thing as jQuery.",
  "An boolean is an example of a data type in JavaScript.",
  "JavaScript is the de facto language of the web.",
  "All HTML components need a seperate closing tag.",
  "!false actually means true.",
  "An asterisk is jQuery's calling card."
];

var option1 = ["<button class=testButtons onclick=qi()>True</button><br /><br /><button class=testButtons onclick=qc()>False</button>"];
var option2 = ["<button class=testButtons onclick=qc()>False</button><br /><br /><button class=testButtons onclick=qi()>True</button>"];
var option3 = ["<button class=testButtons onclick=qc()>True</button><br /><br /><button class=testButtons onclick=qi()>False</button>"];
var option4 = ["<button class=testButtons onclick=qi()>True</button><br /><br /><button class=testButtons onclick=qc()>False</button>"];
var option5 = ["<button class=testButtons onclick=qc()>False</button><br /><br /><button class=testButtons onclick=qi()>True</button>"];
var option6 = ["<button class=testButtons onclick=qi()>False</button><br /><br /><button class=testButtons onclick=qc()>True</button>"];
var option7 = ["<button class=testButtons onclick=qc()>True</button><br /><br /><button class=testButtons onclick=qi()>False</button>"];
var option8 = ["<button class=testButtons onclick=qc()>False</button><br /><br /><button class=testButtons onclick=qi()>True</button>"];
var option9 = ["<button class=testButtons onclick=qc()>True</button><br /><br /><button class=testButtons onclick=qi()>False</button>"];
var option10 = ["<button class=testButtons onclick=qi()>True</button><br /><br /><button class=testButtons onclick=qc()>False</button>"];

var a = 0;
a++;
var b = 0;
b++;
var c = timer;
var previousScore = localStorage.getItem("Score");
var previousInitials = localStorage.getItem("Initials");
console.log(previousScore, previousInitials);

if (!previousScore) {
  previousScore = 0;
}

if (!previousInitials) {
  previousInitials = '';
}

message1.innerHTML = "Previous user: " + previousInitials;
message2.innerHTML = "Previous score: " + previousScore;

function begin() {
  c = 15;
  disappear.innerHTML = "";
  message1.innerHTML = myQuestions[0];
  message2.innerHTML = option1;
  number001.innerHTML = a++;
}

function qc() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Correct";
  message2.innerHTML = "";
  score001.innerHTML = b++;
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
  if (parseInt(a) > 1 && parseInt(a) <= 9) {
    update = setInterval("timer()", 1000);
    c = 15;
    time001.innerHTML = 15;
    message1.innerHTML = myQuestions[parseInt(a)-1];
    message2.innerHTML = option2;
    message3.innerHTML = "";
    number001.innerHTML = a++;
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
    time001.innerHTML = 15;
    message1.innerHTML = myQuestions[9];
    message2.innerHTML = option10;
    message3.innerHTML = "";
    number001.innerHTML = a++;
    message4.innerHTML = "";
  } else {
    window.clearInterval(update);
    c = "-";
    message1.innerHTML = "End of Quiz";
    message2.innerHTML = "";
    message3.innerHTML = "";
    message4.innerHTML = "<button class=buttons onclick=repeat001()>Repeat</button>";

    var initials = prompt("Please enter your initials.")
    console.log(initials);
    console.log(score001.innerHTML);

    localStorage.setItem("Score", score001.innerHTML);
    localStorage.setItem("Initials", initials);
  }
}

function timer() {
  c = c - 1;
  if (c < 150) {
    time001.innerHTML = c;
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
