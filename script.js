const quotes = [
    "the only way to do great work is to love what you do.---Steve Jobs",
    "Life is what happens when you're busy making other plans. ---John Lennon",
    "the future belongs to those who believe in the beauty of their dreams. ---Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. ---winston Churchill",
    "The best way to predict the future is to invent it.                    ---Alan Kay",
    "In the end, it's not the years in your life that count. It's the life in your years. ---Abraham Lincoln",
    "the only limit to our realization of tomorrow will be our doubts of today. ---Franklin D. Roosevelt"
];
const quoteText = document.getElementById('quote-text');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random()* quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQuote);