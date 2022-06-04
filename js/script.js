


/*** 
 * `quotes` array 
***/
var quotes = [
  
  {quote:"puto gay", source: "aimarekin"},
  

]
console.log(quotes);

function getRandomQuote() {
  // this gets a random number ranging from 0 to (quotes.length - 1)
  var random = Math.floor(Math.random() * quotes.length);
  // the random number is used as the index for quotes to pick the right, random one and it is returned to the
  // print function.
  return(quotes[random ]);
}


function printQuote(){
  //Pull the quote in question from getRandomQuote
  var currentQuote = getRandomQuote();
  // Set a blank string to hold the HTML
  var html = ''
  //Set up a variable to point to our quote box in the HTML
  var quoteDiv = document.getElementById('quote-box')

  //Open up a p tag and place the quote itself in it
  html += '<p class="quote">' + currentQuote.quote 
  
  //If tags are present...
  if ('tags' in currentQuote){
    // ...Add the tags to the quote
      html += '  ' + currentQuote.tags.join(', ')
  }
  // Close the first p tag
  html += '</p>'

  // mandatory p tag for source
  html += '<p class="source">' + currentQuote.source 
  // if a citation is defined...
  if ('citation' in currentQuote) {
    // ...add it to the p tag
    html += '<span class="citation">' + currentQuote.citation + '</span>'
  }
  // If a year is defined...
  if ('year' in currentQuote){
    // ...add it to the p tag
    html += '<span class="year">' + currentQuote.year + '</span>'
  }
  html += '</p>'

  // take this HTML item we have been appending and set the html of the quote box to it
  quoteDiv.innerHTML = html

  // run the set randomBackground() program to change the background color
  setRandomBackground()
  
}

function setRandomBackground(){
  // This function changes the background color to one of 6 pre-defined colors based on a random
  // number generator.  First get the random number
  var randomNumber = Math.floor(Math.random() * 6)
  
  // then check to see what the number equals and assign the corresponding color
  if (randomNumber == 0){
    document.body.style.background = 'black';
  }else if (randomNumber == 1){
    document.body.style.background = 'blue';
  }else if (randomNumber == 2){
    document.body.style.background = 'green';
  }else if (randomNumber == 3){
    document.body.style.background = 'red';
  }else if (randomNumber == 4){
    document.body.style.background = 'purple';
  }else if (randomNumber == 5){
    document.body.style.background = 'yellow';
  }
}

// Run the function when the button is pressed...
document.getElementById('load-quote').addEventListener("click", printQuote, false);
// ...or when 30 seconds pass
window.setInterval(printQuote, 30000);
