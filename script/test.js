const quoteTextElement = document.getElementById('quote-text');

// Function to simulate a button click event
function simulateButtonClick() {
    const previousQuote = quoteTextElement.textContent.trim();

    document.getElementById('quote-button').click();

    console.log('Button clicked!');

    setTimeout(() => {
        const currentQuote = quoteTextElement.textContent.trim()

        if (currentQuote !== previousQuote) {
            console.log('Quote changed after button click.');
            console.log('Previous quote:', previousQuote);
            console.log('Current quote:', currentQuote);
        } else {
            console.error('Quote did not change after button click.');
        }
    }, 3000); // Adjust the delay if needed (wait for the quote to load)
}

// Function to test if the quote is displayed
function testQuoteDisplay() {
    const currentQuote = quoteTextElement.textContent.trim();

    if (currentQuote !== 'Loading...') {
        console.log('Quote displayed successfully:', currentQuote);
    } else {
        console.error('Failed to display quote.');
    }
}

setTimeout(testQuoteDisplay, 6000); // Adjust the delay if needed (wait for the quote to load)
setTimeout(simulateButtonClick, 9000); // Adjust the delay if needed (wait for the quote to load)