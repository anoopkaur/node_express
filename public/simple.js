// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// a get request.
let Get = url => {
  let Httppreq = new XMLHttpRequest(); // Website is opened with Hhtppreq.open
  Httppreq.open("GET", url, false);
  Httppreq.send(null);
  return Httppreq.responseText;
};

let quiz = JSON.parse(
  Get("https://opentdb.com/api.php?amount=10&category=27&type=multiple")
);

// goes through the whole question
for (i = 0; i < 10; i++) {
  console.log(i + " " + quiz.results[i].question + "\n");
  let question = quiz.results[i].question;

  let body = document.getElementsByTagName("body")[0];
  body.innerHTML += quiz.results[i].question + "<br/>";
  console.log(quiz.results[0].question);
}

// let newElement = document.createElement("p"); // Create a <button> element
//   newElement.innerHTML = question; // Insert text

//   let parentElement = document.getElementById("smth");

//   parentElement.appendChild(newElement);
