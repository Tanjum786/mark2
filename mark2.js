var input=require("readline-sync");
var chalk=require("chalk")
var score=0;
var userName=input.question("May i know your name?: ");
console.log(".........................................................................");
console.log(chalk.yellowBright("welcome "+userName+"!  How Much You Know About INDIAN HISTORY?? let's see"));
function playGame(question,answer){
  console.log("                                             ");
  console.log(chalk.green( question));
  var j=1
  for (let k = 0; k < optionaList[i].length; k++) {
    console.log(chalk.white(j,optionaList[i][k]));
    j++ 
  }console.log("-------------");
  var userAnswer=input.questionInt(chalk.grey("your answer: "));
  if (userAnswer==answer){
    console.log(chalk.blue("right answer!"));
    score+=1

  }else{``
    console.log(chalk.red("wrong!"+"\n"+"corrct answer is "+answer))
  }console.log("-----------");
}console.log("....................................................................");
var questions=[{
  question:"What substance did Mohandas Gandhi’s 1930 march to the sea produce? ",
  answer:4},{
  question:"Who was the first prime minister of India? ",
  answer:4},{
  question:"Who was the first Sikh to serve as India’s prime minister? ",
  answer:3},{
  question:"When was the Indian National Party founded? ",
  answer:1},{  
  question:"What language did Mohandas Gandhi grow up speaking? ",
  answer:4
}]
var optionaList=[["Sugar","Vinegar","Paper","Salt"],["Raja rao","Manmoha nsingh","Indira gandhi","Jawaharlal neharu"],["Paul singh","Rajiv gandhi","Manmohan singh","Trilochi singh"],["1885","1998","1995","1999"],["Urdu","Marathi","Hindi","Gujarati"]]
for(i in questions){
  playGame(questions[i].question,questions[i].answer)
}
console.log(chalk.yellow("yeahhh :) you scored! ",score))
var highScorer=[{
    name:"Tanjum",
    h_score:4},
    {
    name:"Muskan",
    h_score:5
}]
console.log("                                                     ");
console.log(chalk.whiteBright("*********************"));
for(j in highScorer){
    if (score>highScorer[j].h_score) {
        console.log(chalk.yellow("congratulation!! Thank you "+userName+" well played"+"\n" +"you score highest"+"  send me screen shot of score i will update your score"));
        break
    }
}
console.log("Highest score Board");
for (j of highScorer){
    console.log(j.name+" : "+j.h_score);
}

