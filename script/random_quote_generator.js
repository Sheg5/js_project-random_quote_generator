function updateQuote() {
    const quoteText = document.getElementById('quote-text');

    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quote = data.content;
            const author = data.author;
            quoteText.textContent = `"${quote}" -${author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteText.textContent = 'Failed to fetch a new quote.';
        });
}

document.getElementById('quote-button').addEventListener('click', updateQuote);
updateQuote();