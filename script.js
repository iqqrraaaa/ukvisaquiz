const quizData = [
    { question: "What is one of the main reasons international students choose the UK?", options: ["Low-quality education", "Shorter degree durations", "Limited work opportunities", "No tuition fees"], answer: 1 },
    { question: "Which UK body is responsible for quality assurance in higher education?", options: ["Home Office", "UCAS", "Quality Assurance Agency (QAA)", "British Council"], answer: 2 },
    { question: "What is the typical duration of a UK undergraduate degree?", options: ["2 years", "3 years", "4 years", "5 years"], answer: 1 },
    { question: "What is the name of the UK student visa route?", options: ["Tier 4 Visa", "Graduate Route Visa", "Student Route Visa", "Work Permit Visa"], answer: 2 },
    { question: "What system is used for undergraduate applications in the UK?", options: ["UKPASS", "UCAS", "NARIC", "CAS"], answer: 1 },
    { question: "How many Russell Group universities are there in the UK?", options: ["12", "20", "24", "30"], answer: 2 },
    { question: "What is the minimum IELTS score required for most UK universities?", options: ["4.5", "5.0", "6.0", "7.5"], answer: 2 },
    { question: "Which document is required for UK student visa financial proof?", options: ["Bank statements", "Reference letter", "Student ID", "CV"], answer: 0 },
    { question: "What is the UK’s post-study work visa called?", options: ["Tier 4 Work Permit", "Graduate Route Visa", "Student Graduate Visa", "Work Experience Visa"], answer: 1 },
    { question: "How many hours can international students work during term-time?", options: ["10 hours", "15 hours", "20 hours", "25 hours"], answer: 2 },
    { question: "Which UK city has the highest cost of living for students?", options: ["Manchester", "Birmingham", "London", "Glasgow"], answer: 2 },
    { question: "What is Chevening?", options: ["A UK work permit", "A UK visa type", "A UK government scholarship", "A university ranking system"], answer: 2 },
    { question: "What is the official UK student support network?", options: ["British Council", "Home Office", "Universities UK", "UKCISA"], answer: 3 },
    { question: "How long can a UK Master's graduate stay under the Graduate Route?", options: ["1 year", "2 years", "3 years", "5 years"], answer: 1 },
    { question: "What is the Skilled Worker Visa?", options: ["A visa for any job in the UK", "A visa for freelance workers", "A visa for graduates with a job offer from a UK employer", "A short-term work permit"], answer: 2 },
    { question: "What is the annual NHS surcharge for international students?", options: ["£150", "£250", "£470", "£600"], answer: 2 },
    { question: "Which law protects students from discrimination?", options: ["Immigration Act", "Student Protection Act", "Equality Act 2010", "Human Rights Act"], answer: 2 },
    { question: "How long before a course starts can students apply for a UK visa?", options: ["1 month", "3 months", "6 months", "12 months"], answer: 2 },
    { question: "What is a foundation course?", options: ["A replacement for a bachelor's degree", "A one-year transition program for university", "A work placement", "A visa requirement"], answer: 1 },
    { question: "Which organization sets ethical standards for education agents?", options: ["UCAS", "Home Office", "British Council", "QAA"], answer: 2 },
    { question: "What does BRP stand for?", options: ["British Residence Paper", "Biometric Residence Permit", "British Residency Proof", "Biometric Registration Passport"], answer: 1 },
    { question: "How much financial proof is required for students in London per month?", options: ["£820", "£1,023", "£1,334", "£2,000"], answer: 2 },
    { question: "Which organization manages student visas in the UK?", options: ["Home Office", "Foreign Office", "British Council", "UCAS"], answer: 0 },
    { question: "What does UCAS stand for?", options: ["United Colleges Admission Service", "Universities and Colleges Admission Service", "UK Central Application System", "University College Application Service"], answer: 1 },

    // Additional 25 questions
    { question: "Which university is often ranked as the best in the UK?", options: ["Oxford", "Cambridge", "Imperial College London", "London School of Economics"], answer: 0 },
    { question: "Which type of visa is required for a short course in the UK?", options: ["Student Route Visa", "Short-term Study Visa", "Graduate Visa", "Tier 5 Visa"], answer: 1 },
    { question: "How long is a typical postgraduate taught master's program in the UK?", options: ["6 months", "1 year", "2 years", "3 years"], answer: 1 },
    { question: "What is the main student financial support system in the UK?", options: ["Student Finance England", "UKCISA", "UCAS", "Home Office"], answer: 0 },
    { question: "What is the purpose of a sandwich course in the UK?", options: ["A short summer course", "A degree with a work placement", "A study-abroad program", "An accelerated degree"], answer: 1 }
];

const quizContainer = document.getElementById("quizContainer");
const quizForm = document.getElementById("quizForm");
const resultContainer = document.getElementById("result");

// Dynamically create quiz questions
quizData.forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `<p>${index + 1}. ${item.question}</p>`;

    item.options.forEach((option, i) => {
        questionDiv.innerHTML += `
            <input type="radio" name="question${index}" value="${i}">
            <label>${option}</label><br>
        `;
    });

    quizContainer.appendChild(questionDiv);
});

// Handle form submission and calculate score
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let score = 0;
    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === item.answer) {
            score++;
        }
    });

    let feedback = "";
    if (score <= 20) {
        feedback = "Poor Knowledge. Consider revising more.";
    } else if (score <= 40) {
        feedback = "Average Knowledge. You're getting there!";
    } else {
        feedback = "Good to Go! You have strong knowledge.";
    }

    resultContainer.innerHTML = `Your Score: ${score}/50 <br> ${feedback}`;
});
