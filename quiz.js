const quiz = document.getElementById("quiz");
const start = document.getElementById("start");
const quizContainer = document.getElementById("quizContainer");
const questionElement = document.getElementById("question");
const choices = document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const end = document.getElementById("end");
const score = document.getElementById("score");
const retry = document.getElementById("retry");

start.addEventListener("click", startQuiz);

let questions = [{
    "Q": "Who are you?",
    "A": "Obama",
    "B": "Trump",
    "C": "Neba",
    "D": "Trauma",
    "Ans": "C"
}, {
    "Q": "Mama, ",
    "A": "There goes",
    "B": "That",
    "C": "Man",
    "D": "!",
    "Ans": "B"
}]


function startQuiz() {
    start.style.display = "none";
    renderQuestions();
    quizContainer.style.display = "block";
    question.style.display = "block";
    question.style.fontSize = "2em";
}

let lastQuestion = questions.length - 1;
let questionNow = 0;
let scoreTracker = 0;

function renderQuestions() {
    let question = questions[questionNow].Ans;
    questionElement.innerHTML = questions[questionNow].Q;
    choiceA.innerHTML = questions[questionNow].A;
    choiceB.innerHTML = questions[questionNow].B;
    choiceC.innerHTML = questions[questionNow].C;
    choiceD.innerHTML = questions[questionNow].D;
}

function checkAnswer(ans){
    if(questions[questionNow].Ans == ans){
        console.log("Correct");
        scoreTracker++;
    }else{
        console.log("Wrong")
    }


    if(questionNow < lastQuestion){
        questionNow++;
        renderQuestions();
    }else{
        quizContainer.style.display="none";
        question.style.display="none";
        showScore();
    }
}

function showScore(){
    end.style.display="block";
    var img1 =document.createElement("img");
    img1.src = "../Gifs/noPass.webp";
    var img2 =document.createElement("img");
    img2.src = "../Gifs/pass.gif";

    console.log(scoreTracker);
    console.log(questions.length)
    let scorePercentage = Math.round(100 * scoreTracker / questions.length);
    score.innerHTML = "<p>" + scorePercentage + "%</p>";

    if(scorePercentage >= 50){
        end.appendChild(img2);
    }else{
        end.appendChild(img1);
    }
}



