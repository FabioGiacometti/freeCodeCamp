document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "apple",
      img: "images/apple.png",
    },
    {
      name: "apple",
      img: "images/apple.png",
    },
    {
      name: "banana",
      img: "images/banana.png",
    },
    {
      name: "banana",
      img: "images/banana.png",
    },
    {
      name: "bread",
      img: "images/bread.png",
    },
    {
      name: "bread",
      img: "images/bread.png",
    },
    {
      name: "carrot",
      img: "images/carrot.png",
    },
    {
      name: "carrot",
      img: "images/carrot.png",
    },
    {
      name: "cheese",
      img: "images/cheese.png",
    },
    {
      name: "cheese",
      img: "images/cheese.png",
    },
    {
      name: "cherry",
      img: "images/cherry.png",
    },
    {
      name: "cherry",
      img: "images/cherry.png",
    },
    
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //crear el tablero de juego
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/toast.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //gira la carta
  function flipCard() {
      var cardId = this.getAttribute("data-id");
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute("src", cardArray[cardId].img);
      if (cardsChosen.length === 2) {
          console.log(cardsChosen)
          setTimeout(checkForMatch, 250);
        }
    }
    //   alert(cardsChosen)
    
  //busca los pares
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("Encontraste un par!");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/toast.png");
      cards[optionTwoId].setAttribute("src", "images/toast.png");
      alert("Lo lamento, proba de nuevo!");
      console.log("cardsChosen", cardsChosen, "cardsWon", cardsWon)
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent =
        "Felicitaciones, encontraste todos los pares!";
        cardsChosen = [];
        cardsChosenId = [];
        cardsWon = [];
    }
  }

  createBoard();
});
