const quizData = [
    {
        question: "Veb-brauzerda qaysi til ishlaydi?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "CSS nimani anglatadi?",
        a: "Markaziy uslublar varaqlari",
        b: "Kaskadli uslublar jadvallari",
        c: "Kaskadli oddiy varaqlar",
        d: "Avtomobillar SUVlar Yelkanli qayiqlar",
        correct: "b",
    },
    {
        question: "HTML nimani anglatadi?",
        a: "Gipermatnni belgilash tili",
        b: "Saytni ichki qismi",
        c: "Hyperloop mashina tili",
        d: "vertolyotlar terminallari motorli qayiqlar Lamborginis",
        correct: "a",
    },
    {
        question: "JavaScript nechanchi yilda ishga tushirilgan?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "Yuqoridagilardan hech qaysisi",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Siz savollari ${score}/${quizData.length} to'g'ri javob berdingiz</h2>
                <button onclick="location.reload()" > Qayta boshlash </button>
            `
        }
    }
    
})
