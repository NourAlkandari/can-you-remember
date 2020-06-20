import React from "react";
import "./App.css";
//CARDS
import cards from "./data";

//Card back image
import CardBack from "./images/CardBack.jpg";
import Card from "./Components/Cards";

function App() {
  let cardsGrid = cards.map(card => {
    return <Card key={card.id} card={card} />;
  });
  return (
    <div className="App border my-5">
      <div className="container">
        <div className="row">{cardsGrid}</div>
      </div>
    </div>
  );
}

export default App;
