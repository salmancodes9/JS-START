


// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0

// function increment()  {
//     count = count +   1
//     countEl.innerText = count
// }

// function save(){
//     console.log(count)
// }






/* NEW START*/

function calculateNextBirthday() {
  const today = new Date();
  let nextBirthday = new Date(today.getFullYear(), 6, 16); // July 16

  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diff = nextBirthday - today;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent =
    `🎉 Your next birthday is in ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}
setInterval(calculateNextBirthday, 1000);

const quotes = [
  "You made it through 100% of your worst days.",
  "You are enough. Always have been. Always will be.",
  "Keep going. The world needs what you have.",
  "No one can take away your story.",
  "You matter. Not just today, but every day.",
  "You’re allowed to be proud of how far you’ve come.",
  "This year is yours — make it unforgettable."
];

function showQuote() {
  const quoteBox = document.getElementById("quoteBox");
  const random = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = quotes[random];
}
