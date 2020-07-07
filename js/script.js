/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


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
    quote: "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness, that most frightens us. We ask ourselves, who am I to be brilliant, gorgeous, talented and fabulous? Actually, who are you not to be? You are a child of God. Your playing small doesn't serve the world. We were born to make manifest the glory of God that is within us. It's not just in some of us; it's in everyone. And as we let our own light shine, we unconsciously give other people permission to do the same. As we are liberated from our own fear, our presence automatically liberates others.",
    source: 'Timo Cruz',
    citation: 'Coach Carter',
    year: '2005',
    tag: 'Inspirational'
  }
];
console.log(quotes);


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  const randomNumber = quotes[Math.floor(Math.random() * quotes.length)]
  return randomNumber;
}
 
console.log (getRandomQuote());




/***
 * `printQuote` function
***/
function printQuote () {
    let myQuote = getRandomQuote();
    let quoteDisplay = '<p class = "quote">' + quotes.quote + '</p>' /
                       '<p class = "source">' + quotes.source ;

    if (myQuote.citation) {
        quoteDisplay += '<span class = "citation">' + myQuote.citation + '</span>';
       };

    if (myQuote.year) {
        quoteDisplay += '<span class = "year">' + myQuote.year + '</span>';
       };

    if (myQuote.tag) {   
       quoteDisplay += '<span class = "year">' + myQuote.year + '</span>';
       };
      
       quoteDisplay += '</p>'

       
       document.getElementById('quote-box').innerHTML = quoteDisplay; 

      } 

console.log(printQuote());

printQuote();

 


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);