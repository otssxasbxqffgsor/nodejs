const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let collectAnswers = function(onDone) {
  const answers = [];
  const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
  ];
  
  let questionAnswered = function (answer) {
    
    answers.push(answer);

    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      onDone(answers);
    }
  };

  rl.question(firstQuestion, questionAnswered);

};

collectAnswers( function(response) {
  console.log("Thank you for your answers. ");
  console.log(response);
  process.exit();
});
