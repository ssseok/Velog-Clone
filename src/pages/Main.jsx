import React, { useState } from "react";
import Cards from "../components/Crads/Cards";
import { initialState } from "../state/cards";

export default function Main() {
  const [cards, setCards] = useState(initialState.cards);
  return (
    <>
      <Cards cards={cards} />
    </>
  );
}
