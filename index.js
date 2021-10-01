var input = require("readline-sync");
var score = 0;
var highScores = [
  {
    name: "Satvik",
    score: "5",
  },
  {
    name: "Speedy",
    score: "4",
  },
  {
    name: "Kshtij",
    score: "3"
  }

]
var questions=[
  {
    "question":"What's my birth month?(enter full month)\n","answer":"september"
    },
  {
      "question":"Do I like watching movies?(answer yes or no)\n",
      "answer":"yes"

  },
  {
      "question":"Which city do I live in?\n",
      "answer":"ludhiana"

  },
  {
      "question":"What is my favortie crypto? choose one of the following  \n => xrp or btc? \n",
      "answer":"xrp"

  },
  {
      "question":"Do I read books? (answer yes or no) \n",
      "answer":"yes"
      
    }];

function start(){
var name= input.question("What's your name? \n");
console.log("\nWelcome "+name+" to How well do you know Lakshay? \n \n");
}


function go(){
for(var i=0;i<questions.length;i++){
 game(questions[i].question, questions[i].answer);
}}

function game(questions,answer){
var userAnswer=input.question(questions);
if (userAnswer.toLowerCase()==answer){
    score++;
    }
else{
 console.log("wrong!");
    }

console.log("Current score is => "+score);
}
function highScorers(){
console.log("Congrats! Your scored "+score+" points.");
console.log("Current highScorers are :");
for(var i = 0 ; i < highScores.length ; i++)
{
console.log(highScores[i].name+" "+highScores[i].score);
}

}


start();
go();
highScorers();
