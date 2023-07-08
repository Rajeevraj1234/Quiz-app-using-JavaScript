const Questions = [{
    q: "What is capital of India?",
    a: [{ text: "Gandhinagar", isCorrect: false },
    { text: "Surat", isCorrect: false },
    { text: "Delhi", isCorrect: true },
    { text: "Mumbai", isCorrect: false }
    ]
 
},
{
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false },
    { text: "Phuket", isCorrect: false },
    { text: "Ayutthaya", isCorrect: false },
    { text: "Bangkok", isCorrect: true }
    ]
 
},
{
    q: "What is the capital of Gujarat",
    a: [{ text: "Surat", isCorrect: false },
    { text: "Vadodara", isCorrect: false },
    { text: "Gandhinagar", isCorrect: true },
    { text: "Rajkot", isCorrect: false }
    ]
}
]


let theQuestion = document.querySelector(".display-question");
let questionNumber = document.querySelector(".questionNumber");
let btn = document.querySelector(".btn");
let answerBox = document.querySelector(".answer-box");
let shiftButton = document.querySelector(".shift-button");
let score = 0;
let i=0;
var answer;
var aValue;


showQuestion = () =>{
    shiftButton.style.display = "none";
    if(i==Questions.length ){
        theQuestion.innerHTML = `YOU SCORED ${score}/3`;
        shiftButton.style.display = "block";
        shiftButton.innerHTML = "Play Agian";
    }
    removePrevContent();
    theQuestion.innerHTML = `Q${i+1} ${Questions[i].q}`;
    for (let j=0; j<Questions[i].a.length; j++){
        answer = document.createElement('div');
        aValue = Questions[i].a[j].text;
        answer.innerHTML = aValue;
        answer.classList = "btn";
        answerBox.appendChild(answer);
        if(Questions[i].a[j].isCorrect){
            answer.dataset.correct = Questions[i].a[j].isCorrect;
        }
        answer.addEventListener("click",answerSelect);
    }
    i++;
}

answerSelect = (e) =>{
    const selBtn = e.target;
    // const correctHai = selBtn.dataset.correct ==='true';
    if(selBtn.dataset.correct){
        selBtn.classList.add("correct");
        score++;
    }else{
        selBtn.classList.add("incorrect");   
    }


    Array.from(answerBox.children).forEach(btn =>{
        if(btn.dataset.correct === "true"){
            btn.classList.add("correct");
        }
    });

    shiftButton.style.display = "block";
    
}

removePrevContent = () => {
    while(answerBox.firstChild){
        answerBox.removeChild(answerBox.firstChild);
    }
}

shiftButton.addEventListener("click",()=>{
    shiftButton.innerHTML = "SUBMIT";
    showQuestion();
})
