
document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    const submitButton = document.getElementById('submit-btn');
    const scoreContainer = document.getElementById('score-container');
    let currentQuestionIndex = 0;
    let score = 0;

    const brainTeasersQuestions = [
        { question: 'What is so fragile that saying its name breaks it?', type: 'text', answer: 'Silence' },
        { question: 'I am tall when I am young, and I am short when I am old, what am I?', type: 'text', answer: 'Candle' },
        { question: 'What can travel around the world while staying in a corner?', type: 'text', answer: 'Postage stamp' },
        { question: 'What can run but not walk, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?', type: 'text', answer: 'River' },
        { question: 'Where can you find roads without cars, forests without trees, and cities without houses (without people)?', type: 'text', answer: 'Map' },
        { question: 'What loses its head in the morning and gets it back at night?', type: 'text', answer: 'Pillow' },
        { question: 'How can you throw a ball as hard as you can and have it come back to you, even if it does not bounce off anything?', type: 'text', answer: 'Throw ball up' },
        { question: 'Feed me and I live, yet give me water and I die.', type: 'text', answer: 'Fire' },
        { question: 'With pointed fangs I sit and wait; With piercing force I crunch out fate; Grabbing victims, proclaiming might; Physically joining with a single bite. What am I?', type: 'text', answer: 'Stapler' },
        { question: 'A farmer has 17 sheep and all but 9 die. How many are left?', type: 'text', answer: 'Nine' },
        { question: 'What comes once in a minute, twice in a moment, but never in a thousand years?', type: 'text', answer: 'M' },
        { question: 'What has six faces, but does not wear makeup, has twenty-one eyes, but cannot see? What is it?', type: 'text', answer: 'Dice' },
        { question: 'What five-letter word becomes shorter when you add two letters to it?', type: 'text', answer: 'Short' },
        { question: 'Imagine you are in a room that is filling with water. There are no windows or doors. How do you get out?', type: 'text', answer: 'Stop imagining' },
        { question: 'What can you hear but not touch or see and yet control?', type: 'text', answer: 'Your voice' },
    ];
    const scienceQuestions = [
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

        if (question.type === 'mcq') {
            question.answers.forEach(answer => {
                const button = document.createElement('button');
                button.textContent = answer.text;
                button.classList.add('answer');
                button.addEventListener('click', selectAnswer);
                questionContainer.appendChild(button);
            });
        } else {
            const input = document.createElement('input');
            input.type = 'text';
            input.classList.add('answer');
            questionContainer.appendChild(input);
        }
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

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showScore();
        }
    }

    function showScore() {
        questionContainer.innerHTML = '';
        scoreContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
    }

    submitButton.addEventListener('click', () => {
        const input = questionContainer.querySelector('input');
        if (input) {
            const answer = input.value.trim().toLowerCase();
            const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
            if (answer === correctAnswer) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(questions[currentQuestionIndex]);
            } else {
                showScore();
            }
        }
    });

    const questions = brainTeasersQuestions;
    showQuestion(questions[currentQuestionIndex]);
});

