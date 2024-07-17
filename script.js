
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
        { question: 'Who was the first man on Moon? ', type: 'text', answer: 'Neil Armstrong' },
        { question: 'Who is the largest land animal?', type: 'text', answer: 'Elephant' },
        { question: 'What do vampire bats eat?', type: 'text', answer: 'Blood' },
        { question: 'What is hottest planet in solar system?', type: 'text', answer: 'Venus' },
        { question: 'What is fear of spiders called?', type: 'text', answer: 'Arachnophobia' },
        { question: 'Bronze is an alloy consisting primarily of which two elements?', type: 'text', answer: 'Copper and Tin' },
        { question: 'How many bones do sharks have?', type: 'text', answer: 'Zero' },
        { question: 'What is study of light called?', type: 'text', answer: 'Optics' },
        { question: 'How many legs does a spider have?', type: 'text', answer: 'Eight' },
        { question: 'What is the rarest blood type?', type: 'text', answer: 'AB-' },
        { question: 'What is the largest internal organ?', type: 'text', answer: 'Liver' },
        { question: 'What are gaps between nerves called?', type: 'text', answer: 'Synapses' },
        { question: 'What is the powerhouse of cell?', type: 'text', answer: 'Mitochondria' },
        { question: 'Which is the nearest planet to Sun?', type: 'text', answer: 'Mercury' },
        { question: 'What is the thinnest layer of Earth?', type: 'text', answer: 'Crust' },
    ];
    const CapitalQuestions = [
            { question: "Minsk", options: ["Belarus", "Gambia", "India"], answer: "Belarus" },
            { question: "Nicosia", options: ["Georgia", "Cyprus", "Slovakia"], answer: "Cyprus" },
            { question: "Tbilisi", options: ["Hungary", "Georgia", "Morocco"], answer: "Georgia" },
            { question: "Australia", options: ["Sydney", "Melbourne", "Canberra"], answer: "Canberra" },
            { question: "Kuala Lumpur", options: ["Malaysia", "Philippines", "Tonga"], answer: "Malaysia" },
            { question: "Stockholm", options: ["Sweden", "Cyprus", "Denmark"], answer: "Sweden" },
            { question: "Baku", options: ["Iraq", "Iran", "Azerbaijan"], answer: "Azerbaijan" },
            { question: "Prague", options: ["Denmark", "Czech Republic", "Austria"], answer: "Czech Republic" },
            { question: "Budapest", options: ["Hungary", "Georgia", "Siberia"], answer: "Hungary" },
            { question: "Buenos Aires", options: ["Chile", "Argentina", "Brazil"], answer: "Argentina" },
            { question: "Paris", options: ["Italy", "UK", "France"], answer: "France" },
            { question: "Athens", options: ["Greece", "UK", "France"], answer: "Greece" },
            { question: "Bucharest", options: ["Albania", "Romania", "Hungary"], answer: "Romania" },
            { question: "Copenhagen", options: ["Denmark", "Czech Republic", "Austria"], answer: "Denmark" },
            { question: "Vienna", options: ["Denmark", "Czech Republic", "Austria"], answer: "Austria" }
    ];
    const dailyquestions = [
            { question: "Who was the first Indian bowler to take all ten wickets in an inning?", options: ["Anil Kumble", "Javagal Srinath", "Harbhajan Singh", "Kapil Dev"], answer: "Anil Kumble" },
            { question: "Which Hindu god is believed to have 6 heads?", options: ["Lord Shiva", "Lord Kartikey", "Lord Ganesha", "Lord Krishna"], answer: "Lord Kartikeya" },
            { question: "Who was the first Prime Minister of USA?", options: ["Bill Clinton", "Abraham Lincoln", "Peyton Randolph", "James Monroe"], answer: "Peyton Randolph" },
            { question: "Entomology is the science that studies", options: ["Human behavior ", "Population of world", "Minerals", "Insects"], answer: "Insects" },
            { question: "Which of the following countries isn\'t a part of Gulf Cooperation?", options: ["Saudi Arabia", "Bahrain", "Kuwait", "Iraq"], answer: "Iraq" },
            { question: "In which year United Nations was formed?", options: ["1934", "1954", "1947", "1945"], answer: "1945" },
            { question: "In which series did Bodyline bowling become controversial?", options: ["Ashes,1932", "Border-Gavaskar Trophy,2007-08", "Pataudi Trophy,2011", "Freedom Trophy,1992"], answer: "Ashes,1932" },
            { question: "Where is the International Court of Justice located?", options: ["Hague", "Geneva", "New York", "Paris"], answer: "Hague" },
            { question: "Where are 2028 Olympics to be held?", options: ["London", "Paris", "Los Angeles", "Tokyo"], answer: "Los Angeles" },
            { question: "As per Forest Act, cultivation of which of the following is a non-forest activity?", options: ["Mulberry", "Rubber", "Tea", "All of the above"], answer: "All of the above" },
            { question: "Who was the queen of England when Royal Charter was granted to East India Company?", options: [" Queen Elizabeth 1 ", "Queen Victoria ", " Queen Anne", "Queen Mary 2"], answer: "Queen Elizabeth 1" },
            { question: "Who is the first Indian wrestler to win a medal at Asian Games?", options: ["Babita Kumari", "Vinesh Phogat", "Sakshi Malik", "Kavita Devi"], answer: "Vinesh Phogat" },
            { question: "Name the Indian tennis player who turned to Hollywood Filmmaker.", options: ["Leander Peas", "Mahesh Bhupathi", "Vijay Amritraj", "Ashok Amritraj"], answer: "Ashok Amritraj" },
            { question: "Who is the writer of the book \'House of Cards\'?", options: ["Sudha Murthy", "Chetan Bhagat", "Arundhati Roy", "Shashi Deshpande"], answer: "Sudha Murthy" },
            { question: "Which Indian state has most airports?", options: ["Maharashtra", "Gujarat", "Madhya Pradesh", "Rajasthan"], answer: "Gujarat" }
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

