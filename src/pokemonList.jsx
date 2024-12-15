import { useState } from "react";

export function PokemonList({ pokemon, setPokemon }) {
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  function handleClick(card) {
    let selectedCard = card;
    clickedCardsArray(selectedCard);
    shuffleCards(pokemon);
    if (!losingLogic(selectedCard)) {
      handleScore();
    }
  }

  function clickedCardsArray(card) {
    let selectedCard = card;
    setClickedCards([...clickedCards, selectedCard]);
  }

  function shuffleCards(arr) {
    const sortedArr = structuredClone(arr);

    for (let i = sortedArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [sortedArr[i], sortedArr[j]] = [sortedArr[j], sortedArr[i]];
    }
    setPokemon(sortedArr);
  }

  function losingLogic(selectedCard) {
    if (clickedCards.includes(selectedCard)) {
        setCurrentScore(0);
        setClickedCards([]);
        return true;
    }
    return false;
  }

  function handleScore() {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);
    if (newScore > highscore) {
      setHighscore(newScore);
    }
  }

  console.log(clickedCards);

  return (
    <>
        <p>Score: {currentScore}</p>
        <p>highscore: {highscore}</p>
        <div className="pokemons">
        {pokemon.map((p) => (
            <div onClick={(e) => {
                handleClick(e.target.id);
            }}
            className="pokemon"
            key={p} id={p}>{p}</div>
        ))}
        </div>
    </>
  );
}
