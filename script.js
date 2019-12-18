
var myQuestions = ["There are 9 continents in the world.",
  "There is no islands on Earth.",
  "Blue whales are mammals.",
  "Tomatoes are vegetables.",
  "The Blue Whale feeds on Tuna fish.",
  "Fifa World Cup tournaments are played every 4 years.",
  "The north side of the Equator Line has more countries than the south side.",
  "Madagascar is the largest island in the world.",
  "Helium is the lightest gas element out of all gas elements.",
  "The hottest planet in the solar system is Mercury."
];

var option1 = ["<button class=testButtons onclick=q1i()>True</button><br /><br /><button class=testButtons onclick=q1c()>False</button>"];
var option2 = ["<button class=testButtons onclick=q2c()>False</button><br /><br /><button class=testButtons onclick=q2i()>True</button>"];
var option3 = ["<button class=testButtons onclick=q3c()>True</button><br /><br /><button class=testButtons onclick=q3i()>False</button>"];
var option4 = ["<button class=testButtons onclick=q4i()>True</button><br /><br /><button class=testButtons onclick=q4c()>False</button>"];
var option5 = ["<button class=testButtons onclick=q5c()>False</button><br /><br /><button class=testButtons onclick=q5i()>True</button>"];
var option6 = ["<button class=testButtons onclick=q6i()>False</button><br /><br /><button class=testButtons onclick=q6c()>True</button>"];
var option7 = ["<button class=testButtons onclick=q7c()>True</button><br /><br /><button class=testButtons onclick=q7i()>False</button>"];
var option8 = ["<button class=testButtons onclick=q8c()>False</button><br /><br /><button class=testButtons onclick=q8i()>True</button>"];
var option9 = ["<button class=testButtons onclick=q9c()>True</button><br /><br /><button class=testButtons onclick=q9i()>False</button>"];
var option10 = ["<button class=testButtons onclick=q10i()>True</button><br /><br /><button class=testButtons onclick=q10c()>False</button>"];

var a = 0;
a++;
var b = 0;
b++;
var c = timer;

function begin() {
  c = 15;
  disappear.innerHTML = "";
  message1.innerHTML = myQuestions[0];
  message2.innerHTML = option1;
  number001.innerHTML = a++;
}

function q1c() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Correct";
  message2.innerHTML = "";
  score001.innerHTML = b++;
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q1i() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Incorrect";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q2c() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Correct";
  message2.innerHTML = "";
  score001.innerHTML = b++;
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q2i() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Incorrect";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q3c() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Correct";
  message2.innerHTML = "";
  score001.innerHTML = b++;
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q3i() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Incorrect";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q4c() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Correct";
  message2.innerHTML = "";
  score001.innerHTML = b++;
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q4i() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Incorrect";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q5c() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Correct";
  message2.innerHTML = "";
  score001.innerHTML = b++;
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q5i() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Incorrect";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q6c() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Correct";
  message2.innerHTML = "";
  score001.innerHTML = b++;
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q6i() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Incorrect";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q7c() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Correct";
  message2.innerHTML = "";
  score001.innerHTML = b++;
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q7i() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Incorrect";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q8c() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Correct";
  message2.innerHTML = "";
  score001.innerHTML = b++;
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q8i() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Incorrect";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q9c() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Correct";
  message2.innerHTML = "";
  score001.innerHTML = b++;
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q9i() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Incorrect. Helium is the lightest gas of all gas elements.";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q10c() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Correct. Venus is the hottest planet. That is because its atmosphere contains 95% of Carbon dioxide.";
  message2.innerHTML = "";
  score001.innerHTML = b++;
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function q10i() {
  window.clearInterval(update);
  c = "-";
  message3.innerHTML = "Incorrect. Venus is the hottest planet. That is because its atmosphere contains 95% of Carbon dioxide.";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
}

function next() {
  if (a == "2") {
    update = setInterval("timer()", 1000);
    c = 15;
    time001.innerHTML = 15;
    message1.innerHTML = myQuestions[1];
    message2.innerHTML = option2;
    message3.innerHTML = "";
    number001.innerHTML = a++;
    message4.innerHTML = "";
    if (c < 1) {
      window.clearInterval(update);
      message1.innerHTML = "Time's up";
      message2.innerHTML = "";
      message3.innerHTML = "";
      message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
    }
  }

  else if (a == "3") {
    update = setInterval("timer()", 1000);
    c = 15;
    time001.innerHTML = 15;
    message1.innerHTML = myQuestions[2];
    message2.innerHTML = option3;
    message3.innerHTML = "";
    number001.innerHTML = a++;
    message4.innerHTML = "";
    if (c < 1) {
      window.clearInterval(update);
      message1.innerHTML = "Time's up";
      message2.innerHTML = "";
      message3.innerHTML = "";
      message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
    }
  }

  else if (a == "4") {
    update = setInterval("timer()", 1000);
    c = 15;
    time001.innerHTML = 15;
    message1.innerHTML = myQuestions[3];
    message2.innerHTML = option4;
    message3.innerHTML = "";
    number001.innerHTML = a++;
    message4.innerHTML = "";
    if (c < 1) {
      window.clearInterval(update);
      message1.innerHTML = "Time's up";
      message2.innerHTML = "";
      message3.innerHTML = "";
      message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
    }
  }

  else if (a == "5") {
    update = setInterval("timer()", 1000);
    c = 15;
    time001.innerHTML = 15;
    message1.innerHTML = myQuestions[4];
    message2.innerHTML = option5;
    message3.innerHTML = "";
    number001.innerHTML = a++;
    message4.innerHTML = "";
    if (c < 1) {
      window.clearInterval(update);
      message1.innerHTML = "Time's up";
      message2.innerHTML = "";
      message3.innerHTML = "";
      message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
    }
  }

  else if (a == "6") {
    update = setInterval("timer()", 1000);
    c = 15;
    time001.innerHTML = 15;
    message1.innerHTML = myQuestions[5];
    message2.innerHTML = option6;
    message3.innerHTML = "";
    number001.innerHTML = a++;
    message4.innerHTML = "";
    if (c < 1) {
      window.clearInterval(update);
      message1.innerHTML = "Time's up";
      message2.innerHTML = "";
      message3.innerHTML = "";
      message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
    }
  }

  else if (a == "7") {
    update = setInterval("timer()", 1000);
    c = 15;
    time001.innerHTML = 15;
    message1.innerHTML = myQuestions[6];
    message2.innerHTML = option7;
    message3.innerHTML = "";
    number001.innerHTML = a++;
    message4.innerHTML = "";
    if (c < 1) {
      window.clearInterval(update);
      message1.innerHTML = "Time's up";
      message2.innerHTML = "";
      message3.innerHTML = "";
      message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
    }
  }

  else if (a == "8") {
    update = setInterval("timer()", 1000);
    c = 15;
    time001.innerHTML = 15;
    message1.innerHTML = myQuestions[7];
    message2.innerHTML = option8;
    message3.innerHTML = "";
    number001.innerHTML = a++;
    message4.innerHTML = "";
    if (c < 1) {
      window.clearInterval(update);
      message1.innerHTML = "Time's up";
      message2.innerHTML = "";
      message3.innerHTML = "";
      message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
    }
  }

  else if (a == "9") {
    update = setInterval("timer()", 1000);
    c = 15;
    time001.innerHTML = 15;
    message1.innerHTML = myQuestions[8];
    message2.innerHTML = option9;
    message3.innerHTML = "";
    number001.innerHTML = a++;
    message4.innerHTML = "";
    if (c < 1) {
      window.clearInterval(update);
      message1.innerHTML = "Time's up";
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
  }
}

function timer() {
  c = c - 1;
  if (c < 150) {
    time001.innerHTML = c;
  }

  if (c < 1) {
    window.clearInterval(update);
    message1.innerHTML = "Time's up";
    message2.innerHTML = "";
    message3.innerHTML = "";
    message4.innerHTML = "<button class=buttons onclick=next()>Next</button>";
  }
}

update = setInterval("timer()", 1000);

function repeat001() {
  location.reload();
}
