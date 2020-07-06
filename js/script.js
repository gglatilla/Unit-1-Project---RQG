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
  },
  {
    quote: 'Every man dies, but not everyman really lives.',
    source: 'William Wallace',
    citation: 'Braveheart',
    year: '1995',
  },
  {
    quote: "Life is not the amount of breaths you take. It's the moments that take your breath away.",
    source: 'Alex Hitchens',
    citation: 'Hitch',
    year: '2005',
  },
  {
    quote:"Nobody is gonna hit as hard as life, but it ain't how hard you can hit. It's how hard you can get hit and keep moving forward. It's how much you can take, and keep moving forward. That's how winning is done.",
    source:'Rocky Balboa',
    citation: 'Rocky Balboa',
    year: '2006',
  },
  {
    quote: "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness, that most frightens us. We ask ourselves, who am I to be brilliant, gorgeous, talented and fabulous? Actually, who are you not to be? You are a child of God. Your playing small doesn't serve the world. We were born to make manifest the glory of God that is within us. It's not just in some of us; it's in everyone. And as we let our own light shine, we unconsciously give other people permission to do the same. As we are liberated from our own fear, our presence automatically liberates others.",
    source: 'Timo Cruz',
    citation: 'Coach Carter',
    year: '2005'
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
 
console.log (getRandomQuote);


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);