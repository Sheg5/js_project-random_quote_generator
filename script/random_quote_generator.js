// reference to the quote button
const newQuoteButton = document.querySelector('#js-new-quote');

// reference to the spinner div
const spinner = document.querySelector('#js-spinner');

//  api url
const endpoint = 'https://api.quotable.io/random';

// display quote on page
function displayQuote(quote, author) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = '"' + quote + '" ';
    quoteText.textContent += (author) ? author : 'Anonymous';
}

// fetch quote from api
async function getQuote() {
    // remove the "hidden" class on the spinner
    spinner.classList.remove('hidden');

    // disable the quote button
    newQuoteButton.disabled = true;

    // The `try` block executes the statements within it as usual.
    // If an exception is thrown, the statements defined in
    // the `catch` block will be executed.
    // Learn more here: https://javascript.info/try-catch
    try {
        const response = await fetch(endpoint)

        // If the response is not 200 OK...
        if (!response.ok) {
            // ...throw an error. This causes control flow
            // to skip to the `catch` block below.
            throw Error(response.statusText)
        }

        const json = await response.json();
        displayQuote(json.content, json.author);
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote');
    } finally {
        // enable the quote button
        newQuoteButton.disabled = false;
        
        // add the "hidden" class back again
        spinner.classList.add('hidden');
    }
}

// fetch and display quote when page is loaded
getQuote();

// fetch and display new quote when button is clicked
newQuoteButton.addEventListener('click', getQuote);