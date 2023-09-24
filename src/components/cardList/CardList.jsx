import React from "react";
import Card from "./card/Card";
import style from "../../assets/styles/cardList/card/Card.module.css";

function CardList({ addToCart }) {
  return (
    <div className={style.mainCardList}>
      <h2 className={style.cardListHead}>Populyar yeməklər</h2>
      <Card addToCart={addToCart} />
    </div>
  );
}

export default CardList;
