const quotes = [
  { author: "placeholder", quotation: "placeholder quotation" },
  {
    author: "Kevin McCloud",
    quotation:
      "\"Every decently-made object, from a house to a lamp post to a bridge, spoon or egg cup, is not just a piece of 'stuff' but a physical embodiment of human energy, testimony to the magical ability of our species to take raw materials and turn them into things of use, value and beauty.\""
  },
  {
    author: "Kevin McCloud",
    quotation:
      '"So, agricultural barn meets domestic dwelling. Magical mothership meets metal warehouse. Rational and clinical meets soft and soulful."'
  },
  {
    author: "Kevin McCloud",
    quotation:
      "\"It's possible to be satisfied with a day's work or a cake, but a life... what is a life but a history of events badly remembered?\""
  },
  {
    author: "Kevin McCloud",
    quotation:
      "\"Of course, there are many ways to work together, many ways to demonstrate that a building can be greater than the sum of its parts. That is doesn't need to be the result of one individual's dogma. And therein lies the brilliance of collaboration.\""
  },
  {
    author: "Kevin McCloud",
    quotation:
      '"We are borrowing money from future generations. We are borrowing the carbon impact, the resource impact from future generations to get stuff cheap now. We have swept the dirt and dust from our society under the carpet - but this carpet is on other side of the planet."'
  },
  {
    author: "Kevin McCloud",
    quotation:
      "\"How do you define modern family life? Well, I'd argue it's down to three things. A chaotic, relentless diary, plastic play furniture everywhere and a general anxiety about where the children are and what they're doing right now to each other.\""
  },
  {
    author: "Kevin McCloud",
    quotation:
      '"You might baulk at the amounts of materials and energy that have gone into making it, but buildings don\'t just happen. They have to be willed, forced and wrangled into existence. And, in this case, its costs are incalculable, because the greatest amount of energy in a building like this, is human energy. At times, it even seems superhuman."'
  },
  {
    author: "Kevin McCloud",
    quotation:
      '"After all, why, when life itself is defined by, bound up with, the ideas of craftsmanship and utility, by the acts of making and doing, why would you want it to ever end?"'
  },
  {
    author: "Socrates",
    quotation:
      '"True wisdom comes to each of us when we realise how little we understand about life, ourselves, and the world around us."'
  },
  {
    author: "Montgomery Burns",
    quotation:
      '"Family, religion, friendship. These are the three demons you must slay if you wish to succeed in business."'
  },
  {
    author: "Des'Ree",
    quotation:
      "\"I don't want to see a ghost, it's a sight that I fear most. I'd rather have a piece of toast and watch the evening news.\""
  },
  {
    author: "David Brent",
    quotation:
      "\"I don't look upon this like it's the end, I look upon it like it's moving on you know. It's almost like my work here's done. I can't imagine Jesus going 'Oh, I've told a few people in Bethlehem I'm the son of God, can I just stay here with Mum and Dad now?' No. You gotta move on. You gotta spread the word. You gotta go to Nazareth, please. And that's, very much like... me.\""
  },
  {
    author: "Dalai Lama",
    quotation:
      '"People take different roads seeking fulfillment and happiness. Just because they’re not on your road doesn’t mean they’ve gotten lost."'
  }
];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuote(arr) {
  let randomIndex = randomInteger(1, quotes.length - 1);
  let randomQuote = arr[randomIndex];
  return randomQuote;
}

const quoteButton = document.getElementById("getQuoteButton");
const quoteText = document.getElementById("quoteText");
const quoteContainer = document.getElementById("quoteContainer");
const pointCounter = document.getElementById("points-score");
const questionsCounter = document.getElementById("questions-total");

function appendQuote() {
  let currentQuote = getQuote(quotes);
  quoteText.textContent = currentQuote["quotation"];
  currentQuoteAuthor = currentQuote["author"];
  yesButton.textContent = "IT'S KEV";
  noButton.textContent = "NOT KEV";
}

quoteButton.addEventListener("click", function (event) {
  authorReveal.remove();
  appendQuote();
  quoteButton.textContent = "NEXT";
});

let currentQuoteAuthor;

let yesButton = document.getElementById("yes-button");
let noButton = document.getElementById("no-button");
let authorReveal = document.createElement("p");

yesButton.addEventListener("click", function (event) {
  if (currentQuoteAuthor === "Kevin McCloud") {
    yesButton.textContent = "CORRECT!";
    numberCorrect++;
    questionsAnswered++;
    pointCounter.textContent = numberCorrect;
    questionsCounter.textContent = questionsAnswered;
  } else {
    yesButton.textContent = "INCORRECT!";
    authorReveal.setAttribute("id", "author-reveal");
    authorReveal.textContent = currentQuoteAuthor;
    quoteContainer.appendChild(authorReveal);
    questionsAnswered++;
    questionsCounter.textContent = questionsAnswered;
  }
});

noButton.addEventListener("click", function (event) {
  if (currentQuoteAuthor === "Kevin McCloud") {
    noButton.textContent = "INCORRECT!";
    questionsAnswered++;
    questionsCounter.textContent = questionsAnswered;
  } else {
    noButton.textContent = "CORRECT!";
    numberCorrect++;
    pointCounter.textContent = numberCorrect;
    authorReveal.setAttribute("id", "author-reveal");
    authorReveal.textContent = currentQuoteAuthor;
    quoteContainer.appendChild(authorReveal);
    questionsAnswered++;
    questionsCounter.textContent = questionsAnswered;
  }
});

let numberCorrect = 0;
let questionsAnswered = 0;

let resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", function (event) {
  numberCorrect = 0;
  questionsAnswered = 0;
  pointCounter.textContent = numberCorrect;
  questionsCounter.textContent = questionsAnswered;
});
