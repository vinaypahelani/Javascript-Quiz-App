const quizData = [
  {
    question: "What is the capital of India?",
    a: "Rajasthan",
    b: "Haryana",
    c: "Gujarat",
    d: "New Delhi",
    correct: "d",
  },
  {
    question: "Who was the first Prime Minister of India?",
    a: "Mahatama Gandi",
    b: "APJ abdul kalam",
    c: "Jawaharlal Nehru",
    d: "Saradar Vallabhai Patel",
    correct: "c",
  },
  {
    question: "What is the National sport of India?",
    a: "Chess",
    b: "Hockey",
    c: "Cricket",
    d: "Kabbadi",
    correct: "b",
  },
  {
    question: "What is the full form of HTML?",
    a: "Hypertexting markingup language",
    b: "Hypertest markup lang",
    c: "HyperText Markup Language",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "Which of the following is not an planet in Solar system?",
    a: "Spectron",
    b: "Uranus",
    c: "Jupiter",
    d: "Mercury",
    correct: "a",
  },
];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const quiz = document.getElementById("quiz");
const header = document.getElementById("header");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deSelectanswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deSelectanswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log("answer is :", answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz > 0) {
      header.innerHTML = "";
    }
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly ${score} out of ${quizData.length}</h2> 
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
