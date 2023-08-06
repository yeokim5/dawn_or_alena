const question = [
  {
    type: "image",
    question: "Who's chin is this?",
    display1: "img/a_chin_answer(2).png",
    display2: "img/a_chin_answer(1).png",
    answer: "img/a_chin.jpg",
    name: "alena",
  },
  {
    type: "sound",
    question: "Who's sound is this?",
    display1: "sound/a_1.mp3",
    answer: "sound/a_1_answer.mp3",
    name: "alena",
  },

  {
    type: "sound",
    question: "Who's sound is this?",
    display1: "sound/a_2.mp3",
    answer: "sound/a_2_answer.mp3",
    name: "alena",
  },

  {
    type: "sound",
    question: "Who's sound is this?",
    display1: "sound/d_1.mp3",
    answer: "sound/d_1_answer.mp3",
    name: "dawn",
  },
  {
    type: "sound",
    question: "Who's sound is this?",
    display1: "sound/a_3.mp3",
    answer: "sound/a_3_answer.mp3",
    name: "alena",
  },
  {
    type: "image",
    question: "Who's eye is this?",
    display1: "img/d_eye_answer(2).png",
    display2: "img/d_eye_answer(1).png",
    answer: "img/d_eye.jpg",
    name: "dawn",
  },
  {
    type: "sound",
    question: "Who's sound is this?",
    display1: "sound/d_2.mp3",
    answer: "sound/d_2_answer.mp3",
    name: "dawn",
  },
  {
    type: "image",
    question: "Who's lips is this?",
    display1: "img/a_lip_answer(2).png",
    display2: "img/a_lip_answer(1).png",
    answer: "img/a_lip.jpg",
    name: "alena",
  },
];

const answersEL = document.querySelectorAll(".answer");
const quizEl = document.querySelector(".quiz_container");
const body = document.querySelector("body");
const media_container = document.querySelector(".media_container");
const quiz_title = document.querySelector(".quiz_header");
const btn_text = document.querySelector(".btn");
const answer_container = document.querySelector(".answer_container");
let currentQuestion = 0;
let count = 0;

loadQuiz();

btn_text.addEventListener("click", () => {
  if (btn_text.innerHTML === "Next Question") {
    answer_container.innerHTML = "";
    btn_text.innerText = "Submit";
    currentQuestion++;
    console.log(`next`);
    loadQuiz();
  } else {
    if (selected() === question[currentQuestion].name) {
      count++;
    }

    btn_text.innerText = "Next Question";
    if (question[currentQuestion].type === "image") {
      answer_container.innerHTML = `
        <h3 style="text-align: center;">It was ${question[currentQuestion].name}!</h3>
        <div class="img_container">
        <img class="img_answer" src="${question[currentQuestion].display2}" />
        <img class="img_answer" src="${question[currentQuestion].answer}" />
        </div>
        `;
    } else {
      answer_container.innerHTML = `
        <h3 style="text-align: center;">It was ${question[currentQuestion].name}!</h3>
        <h3 style="text-align: center;">Actual sound is below :)</h3>
        <div class="img_container">
        <audio controls>
          <source src="${question[currentQuestion].answer}" type="audio/mpeg" />
          </audio>
        </div>
  
        `;
    }
  }
});

function loadQuiz() {
  if (currentQuestion < question.length) {
    deselectAnswers();

    quiz_title.innerHTML = `<h2>${question[currentQuestion].question}</h2>`;
    checkMedia();
  } else {
    quizEl.innerHTML = `<div class="final"><h1>Done! You got <br>${count}/${question.length} <br>questions right!</h1></div>`;
  }
}

function checkMedia() {
  // check img or sound
  if (question[currentQuestion].type === "image") {
    media_container.innerHTML = `
    <img src="${question[currentQuestion].display1}" />
    `;
  } else {
    media_container.innerHTML = `
    <audio controls>
    <source src="${question[currentQuestion].display1}" type="audio/mpeg" />
    </audio>
    `;
  }
}

function deselectAnswers() {
  answersEL.forEach((answersEL) => {
    answersEL.checked = false;
  });
}

function selected() {
  let res;
  answersEL.forEach((answerEl) => {
    if (answerEl.checked) {
      res = answerEl.id;
    }
  });

  return res;
}
