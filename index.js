var readlineSync = require("readline-sync");

var score = 0;
//array of object 
var highScores = [
  {
    name: "onkar",
    score: 5,
  },

  {
    name: "raja",
    score: 4,
  },
  {
    name: "Ballu",
    score: 3,
  },
  {
    name: "keshu",
    score: 3,
  },
]

var mathsQuestions = [{ Q : "The total of the ages of Amar, Akbar and Anthony is 80 years. What was the total of their ages three years ago ?      A.	71 years  B.	72 years  C.	74 years D.	77 years\n",
   A: "A"
},{Q : "1. 1/2 of a number equals  1)25% 2)50% 3)15% 4)10%  \n",
   A : "2"
},{Q : " 106 × 106 – 94 × 94 = ?   \n",
  A : "2400"
},{ Q: "The largest number of six digits is …..   \n",
  A: "999999"
},{
  Q :"Find the sum : –1.54 + 5.093.   \n",
  A : "3.553"
}]

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to Maths Fun Game!!!");
  console.log("Be careful while answering . Choose from the given options if applicable");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < mathsQuestions.length; i++) {
    var currentQuestion = mathsQuestions[i];
    play(currentQuestion.Q, currentQuestion.A)
  }
}
function showScores() {
  if(score > 0)
  {console.log("YAY! You SCORED: ", score);
  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  for(var i=0;i<highScores.length;i++){
    var scores = highScores[i];
    console.log(scores.name, " : ", scores.score);
  }}
  else
  console.log("Oops!! Practice more stuff");
}
welcome();
game();
showScores();

