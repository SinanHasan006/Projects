//Questions
const questions = [
    {
        question: "Which is the Capital city of Bulgaria",
        answers: [
            {text: "Plovdiv", correct: false},
            {text: "Varna", correct: false},
            {text: "Sofia", correct: true},
            {text: "Burgas", correct: false},
        ]
    },
    {
        question: "Who is the founder of Tesla",
        answers: [
            {text: "Bill Gates", correct: false},
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Mark Zuckerberg", correct: false},
            {text: "Nikola Tesla", correct: true},
        ]
    },
    {
        question: "Which country, with its capital being Ankara, is located at the crossroads of Europe and Asia",
        answers: [

            {text: "Turkey", correct: true},
            {text: "Iran", correct: false},
            {text: "Greece", correct: false},
            {text: "Russia", correct: false},
        ]
    },
    {
        question: "Who developed the theory of relativity",
        answers: [

            {text: "Albert Einstein", correct: true},
            {text: "Isaac Newton", correct: false},
            {text: "Galileo Galilei", correct: false},
            {text: "Stephen Hawking", correct: false},
        ]
    },
    {
        question: "Who painted Mona Lisa",
        answers: [

            {text: "Vincent van Gogh", correct: false},
            {text: "Pablo Picasso", correct: false},
            {text: "Salvador Dali", correct: false},
            {text: "Leonardo da Vinci", correct: true},
        ]
    },
    {
        question: "Who is the author of Crime and Punishment",
        answers: [

            {text: "Leo Tolstoy", correct: false},
            {text: "Fyodor Dostoyevsky", correct: true},
            {text: "Anton Chekhov", correct: false},
            {text: "Nikolai Gogol", correct: false},
        ]
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere",
        answers: [

            {text: "Nitrogren", correct: true},
            {text: "Oxygen", correct: false},
            {text: "Carbon dioxide", correct: false},
            {text: "Helium", correct: false},
        ]
    },
    {
        question: "What is the largest desert in the world",
        answers: [

            {text: "Gobi Desert", correct: false},
            {text: "Antarctic Desert", correct: false},
            {text: "Arabian Desert", correct: false},
            {text: "Sahara Desert", correct: true},
        ]
    },
    {
        question: "Which planet has the highest average surface temperature in our solar system",
        answers: [

            {text: "Venus", correct: true},
            {text: "Mercury", correct: false},
            {text: "Earth", correct: false},
            {text: "Mars", correct: false},
        ]
    },
    {
        question: "Who is the current President of France",
        answers: [

            {text: "Francois Hollande", correct: false},
            {text: "Nicolas Sarkozy", correct: false},
            {text: "Emmanuel Macron", correct: true},
            {text: "Jacques Chirac", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}
function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
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

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz()
