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
  const generateButton = document.getElementById("generateButton");
  const widthInput = document.getElementById("widthInput");
  const heightInput = document.getElementById("heightInput");
  const applySizeButton = document.getElementById("applySizeButton");

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

  // Add event listener to the button
  generateButton.addEventListener("click", () => {
    updateCard(); // Generate a new card when the button is clicked
  });

  // Set interval to update the card every 10 seconds
  setInterval(updateCard, 10000); // 10000 milliseconds = 10 seconds

  // Add event listener to apply size
  applySizeButton.addEventListener("click", () => {
    const width = widthInput.value;
    const height = heightInput.value;

    // Set the card size
    if (width) {
      card.style.width = `${width}px`;
    }
    if (height) {
      card.style.height = `${height}px`;
    }
  });
};
