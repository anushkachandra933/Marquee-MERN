const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    createdBy: "Walt Disney",
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    createdBy: "Winston Churchill",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    createdBy: "Sam Levenson",
  },
  {
    quote: "Dream big and dare to fail.",
    createdBy: "Norman Vaughan",
  },
  {
    quote: "The future depends on what you do today.",
    createdBy: "Mahatma Gandhi",
  },
  {
    quote: "It always seems impossible until it's done.",
    createdBy: "Nelson Mandela",
  },
  {
    quote: "Believe you can and you're halfway there.",
    createdBy: "Theodore Roosevelt",
  },
  {
    quote: "Do one thing every day that scares you.",
    createdBy: "Eleanor Roosevelt",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    createdBy: "Steve Jobs",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    createdBy: "Chris Grosser",
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    createdBy: "Franklin D. Roosevelt",
  },
  {
    quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
    createdBy: "C.S. Lewis",
  },
  {
    quote: "If you can dream it, you can do it.",
    createdBy: "Walt Disney",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    createdBy: "Mark Twain",
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    createdBy: "George Addair",
  },
  {
    quote: "Small steps every day lead to big results.",
    createdBy: "Unknown",
  },
  {
    quote: "Discipline is choosing between what you want now and what you want most.",
    createdBy: "Abraham Lincoln (attributed)",
  },
  {
    quote: "Great things never come from comfort zones.",
    createdBy: "Unknown",
  },
  {
    quote: "Don't limit your challenges. Challenge your limits.",
    createdBy: "Jerry Dunn",
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    createdBy: "Henry David Thoreau",
  },
];

button = document.getElementById('btn');
quote = document.getElementById('quote');
createdBy = document.getElementById('createdBy');
button.addEventListener('click',()=>{
    let value = Math.floor(Math.random()*20);
    quote.innerText = quotes[value].quote;
    createdBy.innerText = quotes[value].createdBy;
});