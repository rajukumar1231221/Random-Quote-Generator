const quotes = [
    "Believe in yourself and all that you are.",
    "Your only limit is your mind.",
    "Dream it. Wish it. Do it.",
    "Every day is a second chance.",
    "Success is not final, failure is not fatal.",
    "Do something today that your future self will thank you for."
];

document.addEventListener("DOMContentLoaded", function() {
    const quoteText = document.getElementById("quote");
    const quoteBtn = document.getElementById("quoteBtn");

    function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
        console.log(randomIndex)
    }

    quoteBtn.addEventListener("click", generateQuote);
});
