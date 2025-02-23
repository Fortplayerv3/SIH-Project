const questions = [
    {
        question: " Which of the following statement is true about Ajanta caves?",
        answers: [
            {text: "Ajanta caves were excavated between the 2nd century and 6th century.", correct: true},
            {text: " They depict the story of Jainism", correct: false},
            {text: "Ajanta caves are excavated in an elephant shoe-shaped rock surface", correct: false},
            {text: " The caves are believed to be made in 2 distinct periods: Gupta period and Vakataka, period.", correct: false },
        ]
    },
    {
        question: " Where Ellora caves are situated??",
        answers: [
            {text: "Madhya Pradesh", correct: false},
            {text: "Andhra Pradesh", correct: false},
            {text: "Maharashtra", correct: true},
            {text: "Rajasthan", correct: false },
        ]
    },
    {
        question: "Which of the following is not true about elephant caves?",
        answers: [
            {text: "In 1987, Elephanta Caves were designated a UNESCO World Heritage Site.", correct: false},
            {text: "Caves are made from solid rock.", correct: false},
            {text: "Portuguese renamed these caves  as Elephanta", correct: false},
            {text: "These caves are excavated during the 11th century.", correct: true},
        ]
    },
    {
        question: "Where is the largest concentration of stupas in India?",
        answers: [
            {text: "Himachal Pradesh", correct: false},
            {text: "Madhya Pradesh", correct: true},
            {text: "Arunachal Pradesh", correct: false},
            {text: "None of these", correct: false},
        ]
    },
    {
        question: "Who wrote 'Lehar' ('Wave')?",
        answers: [
            {text: " Suryakanth Tripathi", correct: false},
            {text: "Maithili Sharan Gupt", correct: false},
            {text: "Yashpal", correct: false},
            {text: "Jaishankar Prasad", correct: true},
        ]
    },
    {
        question: "The earliest architectural remains in India belong to?",
        answers: [
            {text: "Mughal Empire", correct: false},
            {text: "Roman Empire", correct: false},
            {text: "Ottoman Empire", correct: false},
            {text: "Indus Valley Civilisation", correct: true},
        ]
    },
    {
        question: "Where is the Brihadeswara or RajaRajeswara temple situated?",
        answers: [
            {text: "Jamnagar in Gujrat", correct: false},
            {text: "Thanjavur in Tamil Nadu", correct: true},
            {text: "Murshidabad in West Bengal", correct: false},
            {text: "Thiruvananthapuram in Kerala", correct: false},
        ]
    },
    {
        question: "Which is the principal festival of Kerala?",
        answers: [
            {text: " Christmas", correct: false},
            {text: " Diwali", correct: false},
            {text: " Onam", correct: true},
            {text: "Eid", correct: false},
        ]
    },
    {
        question: "Which one of these schools of the performing arts was founded in 1953?",
        answers: [
            {text: "Kerala kalamandalam", correct: false},
            {text: "School of Drama", correct: false},
            {text: "Margi", correct: false},
            {text: "Sangeet Natak Academy", correct: true},
        ]
    },
    {
        question: "Where is the Victoria Memorial situated?",
        answers: [
            {text: " Kolkata", correct: true},
            {text: "  Mumbai", correct: false},
            {text: "  Chennai", correct: false},
            {text: " Delhi", correct: false},
        ]
    }
];

// shuffle the questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }
  
  // call shuffleQuestions before starting the quiz
  shuffleQuestions();


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"; 
    showQuestion();
}
function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
  }

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
   
    shuffleAnswers(currentQuestion.answers);

    currentQuestion.answers.forEach(answer =>  {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        button.dataset.correct = answer.correct.toString(); // Set dataset.correct for all answers
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display= "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
} 
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        console.log(button.dataset.correct);
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();
