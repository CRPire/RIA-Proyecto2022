var preguntas;
var questions = [];

function getQuestions(cantQuestions = 10,difficulty = 'any'){
  var objXMLHttpRequest = new XMLHttpRequest();
  objXMLHttpRequest.onreadystatechange = function() {
    if (objXMLHttpRequest.status == 200) {
      preguntas = objXMLHttpRequest.responseText;
      var json = JSON.parse(objXMLHttpRequest.response);
      getQuiz(json);
    }
  }
  objXMLHttpRequest.open('GET', `https://opentdb.com/api.php?amount=${cantQuestions}&category=18&difficulty=${difficulty}&type=multiple`, false);
  objXMLHttpRequest.send();
}

function getQuiz(json){
  for (let i = 0; i < json.results.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [json.results[i], json.results[j]] = [json.results[j], json.results[i]];
  }

  for (var i = 0; i < json.results.length; i++) {
    var pregunta = {};
    pregunta.numb = i + 1;
    pregunta.question = json.results[i].question;
    pregunta.answer = json.results[i].correct_answer;
    pregunta.options = [];
    pregunta.options.push(json.results[i].incorrect_answers[0]);
    pregunta.options.push(json.results[i].incorrect_answers[1]);
    pregunta.options.push(json.results[i].incorrect_answers[2]);
    pregunta.options.push(json.results[i].correct_answer);
    for (let i = 0; i < pregunta.options.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [pregunta.options[i], pregunta.options[j]] = [pregunta.options[j], pregunta.options[i]];
    }

    questions.push(pregunta);
  }
}