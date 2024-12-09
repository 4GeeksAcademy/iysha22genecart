/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Array of all card values and suits
  const cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const cardSuits = ["♥", "♦", "♣", "♠"]; // Hearts, Diamonds, Clubs, Spades

  // Select card elements
  const card = document.getElementById("card");
  const topSuit = document.getElementById("top-suit");
  const number = document.getElementById("number");
  const bottomSuit = document.getElementById("bottom-suit");

  // Function to get a random card
  function getRandomCard() {
    const randomValue =
      cardValues[Math.floor(Math.random() * cardValues.length)];
    const randomSuit = cardSuits[Math.floor(Math.random() * cardSuits.length)];
    return { value: randomValue, suit: randomSuit };
  }

  // Function to update the card
  function updateCard() {
    const { value, suit } = getRandomCard();
    topSuit.textContent = suit;
    number.textContent = value;
    bottomSuit.textContent = suit;

    // Change suit color based on type
    const suitColor = suit === "♥" || suit === "♦" ? "red" : "black";
    topSuit.style.color = suitColor;
    bottomSuit.style.color = suitColor;
  }

  // Function to flip the card
  function flipCard() {
    card.classList.toggle("flip");

    // Update the card only after the flip animation starts
    setTimeout(() => {
      if (card.classList.contains("flip")) {
        updateCard(); // Change card content after flip
      }
    }, 250); // Sync with animation timing
  }

  // Set interval to flip the card every second
  setInterval(flipCard, 2000); // Flip every 2 seconds
};
