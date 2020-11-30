const chalk = require('chalk');
var readlineSync = require('readline-sync');
var userName = readlineSync.question('Enter your name? ');
console.log(chalk.bold.rgb(10, 100, 200)('Hi ' + userName + '!!'));
console.log(chalk.bgBlue.white("Welcome to quiz: Scam 1992"));

var score = 0;

function play(Que,Ans){
  var userans = readlineSync.question(Que)
  if(userans.toUpperCase() == Ans.toUpperCase()){
    score = score + 1;
    console.log(chalk.green("Hurray!! Right"))
  }
  else{
    console.log(chalk.bold.red("Oops!!Wrong ans"))
  }
  console.log("current score:", score)

}

function db(name,result){
  if(score == result){
    console.log("You have beaten", name)
  }
}

//array of object
var quiz = [
  {Que:"Name the brother of Harshad Mehta, a: Ashwin b:Aakash \n",
  Ans:"a"},
  {Que:"Risk hai to _____ hai?, a:Pyaar b: Ishq \n",
  Ans:"b"},
  {Que:"Who is big bull?, a:Harshad b: Bhushan\n",
  Ans:"a"},
  {Que:"Name of consultancy firm of Mehta's?, a: Growmore b: 21dinmedouble \n",
  Ans:"a"},
  {Que:"Which missing document let to exposed scam, a: cheques b: Bankrecepiets \n",
  Ans:"b"}
];

//array for next levelvar quiz = [
var quizone=[
  {Queone:"Name the father of Harshad Mehta \n",
  Ansone:"Shantilal"},
  {Queone:"Harshad and Bhushan met for first time when both of them were \n",
  Ansone:"jobbers"},
  {Queone:"Who tipped Sucheta Dalal about fraud in SBI \n",
  Ansone:"Sharad Bellary"}
];

var data = [
  {name:"The Best",
  result:8
  },
  {name:"Master",
  result:7
  }
]


//accessing array elements using for loop and calling it through function
for (var i=0;i < quiz.length;i++){
  var currentque = quiz[i];
  play(currentque.Que,currentque.Ans)
}
console.log("Final score:", score)
//var fscore = score;

if (score > 4){
  console.log(chalk.bgBlue.white("Congrats!! You have cleared round one!! Welcome to next round"))
  for (var i=0;i < quizone.length;i++){
   var currentque = quizone[i];
  play(currentque.Queone,currentque.Ansone)
}
}
console.log("Final score:", score)

for (var j=0; j < data.length; j++){
  var currentdata = data[j];
  db(currentdata.name,currentdata.result)
}

console.log(chalk.bold.rgb(10, 100, 200)("send me your screenshot if you have scored 8/8"))

