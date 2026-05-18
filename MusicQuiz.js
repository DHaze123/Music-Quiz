// =========================
// script.js
// =========================

// Quiz questions
const questions = [
  {
    song: "Tití Me Preguntó",
    correct: "Bad Bunny",
    options: ["Bad Bunny", "J Balvin", "Rauw Alejandro", "Feid"]
  },

  {
    song: "Bichota",
    correct: "Karol G",
    options: ["Rosalía", "Shakira", "Karol G", "Natti Natasha"]
  },

  {
    song: "Hawái",
    correct: "Maluma",
    options: ["Maluma", "Ozuna", "Anuel AA", "Manuel Turizo"]
  },

  {
    song: "Despechá",
    correct: "Rosalía",
    options: ["Rosalía", "Karol G", "Aitana", "Becky G"]
  },

  {
    song: "Todo de Ti",
    correct: "Rauw Alejandro",
    options: ["Sebastián Yatra", "Rauw Alejandro", "Camilo", "Feid"]
  },

  {
    song: "Ella Baila Sola",
    correct: "Eslabon Armado & Peso Pluma",
    options: [
      "Grupo Frontera",
      "Peso Pluma",
      "Natanael Cano",
      "Eslabon Armado & Peso Pluma"
    ]
  },

  {
    song: "TQG",
    correct: "Karol G & Shakira",
    options: [
      "Karol G & Shakira",
      "Shakira & Becky G",
      "Karol G & Rosalía",
      "Natti Natasha & Shakira"
    ]
  },

  {
    song: "Provenza",
    correct: "Karol G",
    options: ["Karol G", "Young Miko", "Rosalía", "Anitta"]
  },

  {
    song: "Pepas",
    correct: "Farruko",
    options: ["Daddy Yankee", "Farruko", "Don Omar", "Jhayco"]
  },

  {
    song: "La Bachata",
    correct: "Manuel Turizo",
    options: [
      "Prince Royce",
      "Romeo Santos",
      "Manuel Turizo",
      "Camilo"
    ]
  }
];

// HTML elements
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const questionNumberEl = document.getElementById("question-number");

const resultsEl = document.getElementById("results");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

// Quiz state
let currentQuestion = 0;
let score = 0;

// Load question
function loadQuestion() {

  nextBtn.classList.add("hidden");

  const q = questions[currentQuestion];

  questionNumberEl.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  questionEl.textContent =
    `Who created the song "${q.song}"?`;

  answersEl.innerHTML = "";

  q.options.forEach(option => {

    const button = document.createElement("button");

    button.textContent = option;

    button.classList.add("answer-btn");

    button.addEventListener("click", () => {
      selectAnswer(button, q.correct);
    });

    answersEl.appendChild(button);
  });

  scoreEl.textContent = `Score: ${score}`;
}

// Check answer
function selectAnswer(button, correctAnswer) {

  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach(btn => {

    btn.disabled = true;

    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
  });

  if (button.textContent === correctAnswer) {

    score++;

  } else {

    button.classList.add("wrong");
  }

  scoreEl.textContent = `Score: ${score}`;

  nextBtn.classList.remove("hidden");
}

// Next question button
nextBtn.addEventListener("click", () => {

  currentQuestion++;

  if (currentQuestion < questions.length) {

    loadQuestion();

  } else {

    showResults();
  }
});

// Show final score
function showResults() {

  document.getElementById("quiz").classList.add("hidden");

  resultsEl.classList.remove("hidden");

  finalScoreEl.innerHTML =
    `🎉 You scored ${score} out of ${questions.length}!`;
}

// Restart quiz
restartBtn.addEventListener("click", restartQuiz);

function restartQuiz() {

  currentQuestion = 0;
  score = 0;

  resultsEl.classList.add("hidden");

  document.getElementById("quiz").classList.remove("hidden");

  loadQuestion();
}

// Start quiz
loadQuestion();