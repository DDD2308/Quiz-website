document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    const nextButton = document.getElementById('next-btn');
    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Paris", correct: true },
                { text: "London", correct: false },
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false }
            ]
        },
       {
            question: "What is the capital of France?",
            answers: [
                { text: "Paris", correct: true },
                { text: "London", correct: false },
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false }
            ]
        },
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Paris", correct: true },
                { text: "London", correct: false },
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false }
            ]
        },
    ];

    function showQuestion(question) {
        questionContainer.innerHTML = '';
        const questionElement = document.createElement('div');
        questionElement.textContent = question.question;
        questionContainer.appendChild(questionElement);

        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('answer');
            button.addEventListener('click', selectAnswer);
            questionContainer.appendChild(button);
        });
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const isCorrect = questions[currentQuestionIndex].answers.find(answer => answer.text === selectedButton.textContent).correct;
        
        if (isCorrect) {
            score++;
        }

        Array.from(questionContainer.children).forEach(button => {
            button.disabled = true;
            if (questions[currentQuestionIndex].answers.find(answer => answer.text === button.textContent).correct) {
                button.style.backgroundColor = 'green';
            } else {
                button.style.backgroundColor = 'red';
            }
        });

        nextButton.style.display = 'block';
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
            nextButton.style.display = 'none';
        } else {
            showScore();
        }
    });

    function showScore() {
        questionContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
        nextButton.style.display = 'none';
    }

    showQuestion(questions[currentQuestionIndex]);
});
