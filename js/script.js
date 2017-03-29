// Gabe Bravo - 03/29/2017 - JS Random Quote Generator

// decalre global constants
const quotes = [
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
const counter = 5;
let currentQuoteSet = []; // decalre global array container for qoutes

// checks if qoutes array is emepty, refills if so, subsequently pops and prints
const generateQuotes = () => {
  if(currentQuoteSet.length === 0) {
      currentQuoteSet = getSetOfQuotes(quotes);
      let firstQuote = currentQuoteSet.pop();
      printQuote(firstQuote);
  } else {
      let nextQuote = currentQuoteSet.pop();
      printQuote(nextQuote);
  }
}

// global event handles qoute timeout
setInterval(function(){
    generateQuotes();
  }, 20000);

// event listeners
$(window).on('load', generateQuotes);
$('#loadQuote').on('click', generateQuotes);

// uses ES6 to generate a set of unique, yet random qoutes
const getSetOfQuotes = arr => {
// instantiate new set
  let set = new Set();

// loop over the set until we get 5 non-repeating quotes
  while( set.size < 5 ) {
    let index = Math.floor(Math.random() * counter);
    set.add(arr[index]);
  }
// convert the set to an arry and return it
  return [...set];
}

// uses string template to print out the individual qoutes
const printQuote = quoteObj => {
  let quoteTemplate = `<p class="quote">${quoteObj.quote}</p><p class="source">${quoteObj.source}`;
        if ( quoteObj.citation )
          quoteTemplate += `<span class="citation">${quoteObj.citation}</span>`;
        if ( quoteObj.year )
          quoteTemplate += `<span class="year">${quoteObj.year}</span>`;
        if ( quoteObj.tags )
          quoteTemplate += `<br><span class="tags">${quoteObj.tags}</span>`;
      quoteTemplate += `</p>`;

// generates the random BG color every time a quote is printed
  $('body').css('background-color', generateRandomBackground());
  $('#quote-box').html(quoteTemplate);
}

// this creates random RGB values for the body backgroundColor
// NOTE : I left out 255/255/255 because it is white and the text is white.
function generateRandomBackground(){
  var rgb1 = Math.floor(Math.random() * 254);
  var rgb2 = Math.floor(Math.random() * 254);
  var rgb3 = Math.floor(Math.random() * 254);
  return 'rgb(' + rgb1 + ', ' + rgb2 + ', ' + rgb3 + ')';
}
