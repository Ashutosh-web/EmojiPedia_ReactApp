import React from "react";
import emojiData from "../emojipedia";
import Card from "./Card";

function creteCard(emojicard) {
  return (
    <Card
      key={emojicard.id}
      emoji={emojicard.emoji}
      name={emojicard.name}
      meaning={emojicard.meaning}
    />
  );
}

// .map() function helps to iterate over the elements of the array

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojiData.map(creteCard)}</dl>
    </div>
  );
}

export default App;
