// Gabe Bravo - 01/31/2017 - JS Random Quote Generator

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// this will automatically change the qoute every 20 seconds
  setInterval(function(){
    printQuote();
  }, 20000);
// load up the initial random quote the firs time
  window.onload = function() {
    printQuote();
  };

// this is my qoutes array filled with objects
var quotes = [
  {
    quote: "Once you replace negative thoughts with positive ones, you'll start having positive results.",
    source: "Willie Nelson",
    tags: "Positivity"
  },
  {
    quote: "In order to carry a positive action we must develop here a positive vision.",
    source: "Dalai Lama",
    citation: "The Art of Happiness",
    year: "1998",
    tags: "Inspiration"
  },
  {
    quote: "A positive attitude causes a chain reaction of positive thoughts, events and outcomes. It is a catalyst and it sparks extraordinary results.",
    source: "Wade Bogs"
  },
  {
    quote: "Trust in dreams, for in them is hidden the gate to eternity.",
    source: "Khalil Gibran",
    citation: "The Prophet",
    year: "1923",
    tags: 'Poetry, Death'
  },
  {
    quote: "I often think that the night is more alive and more richly colored than the day.",
    source: "Vincent Van Gogh"
  }
];
// copy the array over to a 2nd array thats used to check for unique values
var quotesCopy = quotes.slice();

// first 5 times, returns a unique value >> then it will return any value
function getRandomQuote( arr ){

  // create a random number 1-4 for the index
  var index = Math.floor(Math.random() * arr.length);

  // if the copy array was already exhausted in the first round, refill it
  if(quotesCopy.length === 0) {
    quotesCopy = quotes.slice();
  }

  // checks if the copy array still has values in it
  if(quotesCopy.length > 0) {
    // if it does, creates and assigns the object at that index to a var
    // but this object may not exist in the array if it was already spliced out
    var quotesCopyObj = quotesCopy[index];

    // so while the object is not in the array, keep looping and building a new random object
    while( quotesCopy.indexOf(quotesCopyObj) === -1){
      index = Math.floor(Math.random() * arr.length);
      quotesCopyObj = quotesCopy[index];
    }

    // if we got here, we broke out of the loop because we have found a random object
    // that was still in the copy array
    var quote = quotesCopy.splice(index, 1); // so lets slice it out
    return quote[0]; // and return it to get printed
  }

}

function printQuote() { // this will print the quote to the page
  var quoteObj = getRandomQuote(quotes);
  var quoteTemplate = '';
      quoteTemplate += '<p class="quote">' + quoteObj.quote + '</p>';
      quoteTemplate += '<p class="source">' + quoteObj.source;
        if ( quoteObj.citation )
          quoteTemplate += '<span class="citation">'+ quoteObj.citation +'</span>';
        if ( quoteObj.year )
          quoteTemplate += '<span class="year">'+ quoteObj.year +'</span>';
        if ( quoteObj.tags )
          quoteTemplate += '<br><span class="tags">'+ quoteObj.tags +'</span>';
      quoteTemplate += '</p>';

// generate our random BG color every time and prints the quote
  document.body.style.backgroundColor = generateRandomBackground();
  document.getElementById('quote-box').innerHTML = quoteTemplate;
}

// this creates random RGB values for the body backgroundColor
// NOTE : I left out 255/255/255 because it is white and the text is white.
function generateRandomBackground(){
  var rgb1 = Math.floor(Math.random() * 254);
  var rgb2 = Math.floor(Math.random() * 254);
  var rgb3 = Math.floor(Math.random() * 254);
  return 'rgb(' + rgb1 + ', ' + rgb2 + ', ' + rgb3 + ')';
}
