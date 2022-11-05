import React from "react";
import Crad from "../Card/Crad";
import styles from "./Cards.module.css";

export default function Cards({ cards }) {
  return (
    <div className={styles.wrap}>
      {cards.map((item) => (
        <Crad key={item.id} item={item} />
      ))}
    </div>
  );
}
