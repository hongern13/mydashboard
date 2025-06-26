<script>
  // Initialize variables for the quote and author
  let quote = "Patience is the key to a good life.";
  let author = "Unknown";
  // Function to fetch a random quote from an API
  async function getRandomQuote() {
    const url = 'https://type.fit/api/quotes';
// alternative API: https://quotes-api-self.vercel.app/quote 

// Fetch the quotes from the API
    fetch(url)
      .then(response => response.json())
      .then(data => {

// Generate a random number to select a random quote
        const randomIndex = Math.floor(Math.random() * data.length);

// Update the quote and author variables with the randomly selected quote
        quote = data[randomIndex].text;
        author = data[randomIndex].author || "Unknown";
        
      })
  }
</script>

<main>
  <button on:click="{getRandomQuote}">Get me a quote!</button>
  <h1>{quote}</h1>
  <p>- {author} -</p>
</main>