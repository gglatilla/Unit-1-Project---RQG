/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/* 'The idea used to code intervalID was taken from MDN web docs.'
   'intervalID causes the printQuote function to be called every 8 seconds.'
   */
const intervalID = setInterval (printQuote, 8000);

/* RandomColors is a function that generates different colors.
   The code for the the fuction was taken from 'Stack Overflow' and I have altered it slightly.
*/
function RandomColors() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let colors = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return colors;
}


/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: 'A wise man can learn more from his enemies than a fool from his friends.',
    source: 'Niki Lauda',
    citation: 'Rush',
    year: '2013',
    tag: 'Educational',
  },
  {
    quote: 'Every man dies, but not everyman really lives.',
    source: 'William Wallace',
    citation: 'Braveheart',
    year: '1995',
    tag: 'Inspirational',
  },
  {
    quote: "Great men are not born great, they grow great.",
    source: 'Mario Puzo',
    citation: 'The Godfather',
    year: '1972',
    tag: 'Inspirational',
  },
  {
    quote:"Nobody is gonna hit as hard as life, but it ain't how hard you can hit. It's how hard you can get hit and keep moving forward. It's how much you can take, and keep moving forward. That's how winning is done.",
    source:'Rocky Balboa',
    citation: 'Rocky Balboa',
    year: '2006',
    tag: 'Educational',
  },
  {
    quote: "My mama always said life was like a box of chocolates, you never know what you gonna get",
    source: 'Forrest Gump',
    citation: 'Forrest Gump',
    year: '1994',
    tag: 'Educational'
  }
];
console.log(quotes);


/***
 * `getRandomQuote` function
***/


function getRandomQuote () {
    let randomNumber = quotes[Math.floor(Math.random() * quotes.length)]
    return randomNumber;
}
 
console.log (getRandomQuote());




/***
 * `printQuote` function
***/
function printQuote () {
    let myQuote = getRandomQuote();
    let quoteDisplay = '<p class = quote>' + quotes.quote + '</p>' 
                       '<p class = source>' + quotes.source;

    if (myQuote.citation) {
        quoteDisplay += '<span class = citation>' + myQuote.citation + '</span>';
       };

    if (myQuote.year) {
        quoteDisplay += '<span class = year>' + myQuote.year + '</span>';
       };

    if (myQuote.tag) {   
        quoteDisplay += '<span class = tag>' + myQuote.tag + '</span>';
        };
      
       quoteDisplay += '</p>'

       
       document.getElementById('quote-box').innerHTML = quoteDisplay; 

       let getRandomColors = RandomColors();
        document.body.style.backgroundColor = getRandomColors;

      } 

console.log(printQuote());

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);