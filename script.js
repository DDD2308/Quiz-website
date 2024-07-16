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
            question: 'What is so fragile that saying its name breaks it?',
            answers: [{ text: "Silence", correct: true }]},
        {
            question: 'I am tall when I am young, and I am short when I am old, what am I?',
            answers: [{ text: "Candle", correct: true }]},
        { 
            question: 'What can travel around the world while staying in a corner?',
            answers: [{ text: "Postage Stamp", correct: true }]},
        { 
            question: 'What can run but not walk, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?', 
            answers: [{ text: "River", correct: true }]},
        { 
            question: 'Where can you find roads without cars, forests without trees, and cities without houses (without people)?',
            answers: [{ text: "Map", correct: true }]},
        {
            question: 'What loses its head in the morning and gets it back at night?',
            answers: [{ text: "Pillow", correct: true }]},
        { 
            question: 'How can you throw a ball as hard as you can and have it come back to you, even if it does not bounce off anything? There is nothing attached to it, and no one else catches or throws it back to you.', 
            answers: [{ text: "Throw Ball Straight Up", correct: true }]},
        { 
            question: 'Feed me and I live, yet give me a water and I die.',
            answers: [{ text: "Fire", correct: true }]},
        { 
            question: 'With pointed fangs I sit and wait; With piercing force I crunch out fate; Grabbing victims, proclaiming might; Physically joining with a single bite. What am I?', 
            answers: [{ text: "Stapler", correct: true }]},
        { 
            question: 'A farmer has 17 sheep and all but 9 die. How many are left?',
            answers: [{ text: "Nine", correct: true }]},
        { 
            question: 'What comes once in a minute, twice in a moment, but never in a thousand years?',
            answers: [{ text: "Letter-M", correct: true }]},
        { 
            question: 'What has six faces, but does not wear makeup, has twenty-one eyes, but cannot see? What is it?',
            answers: [{ text: "Dice", correct: true }]},
        { 
            question: 'What five-letter word becomes shorter when you add two letters to it?',
            answers: [{ text: "Short", correct: true }]},
        { 
            question: 'Imagine you are in a room that is filling with water. There are no windows or doors. How do you get out?',
            answers: [{ text: "Stop Imagining", correct: true }]}, 
        { 
            question: 'What can you hear but not touch or see and yet control?',
            answers: [{ text: "Your Voice", correct: true }]}, 
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
