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
// get the length of the quotes array
var counter = quotes.length;

/* This function produces a random object, removes it from the
array with splice, pushes back in to the back with push,
and then decrements the counter and returns the object.
This way it will only be pulling random index values for the
elements that have yet to potentially be drawn. So no repeats.
Then when it gets to 0, it resets the counter to start over. */
function getRandomQuote( arr ){

  // flag that will reset the counter after each
  // complete iteration of the quotes array
    if( counter === 0 ) {
      counter = 5;
    }

    // generates a random number only up to the counter length
    var index = Math.floor(Math.random() * counter);

    // creates an instance of the quote that was randomly selected
    var randomQuote = quotes[index];

    // splice will remove this quote from the array
    quotes.splice(index, 1);

    // push will tack it back on to the end of the array
    quotes.push(randomQuote);

    // we then decrement the counter
    counter--;

    // then print the random quote
    return randomQuote;
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
