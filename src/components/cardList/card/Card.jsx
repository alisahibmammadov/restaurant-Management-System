import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../../../assets/styles/cardList/card/Card.module.css";
import { Link } from "react-router-dom";

const url = "https://book-db-shakhmurad.vercel.app/posts-midas";

function Card({ addToCart }) {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCard(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className={styles["card-container"]}>
        {card.slice(0, 6).map((item) => {
          return (
            <div key={item.id} className={styles["card"]}>
              <Link to={`/card/${item.id}`}>
              <img src={`/img/${item.img}.png`} />
              </Link>
              <h2 className={styles.ProductName}>{item.item}</h2>
              <p className={styles["card-weight"]}>{item.weight}g</p>
              <p>{item.text}</p>
              <div className={styles["card-price-row"]}>
                <b>{item.price}$</b>
                <i
                  onClick={() => addToCart(item)}
                  className="fa-solid fa-basket-shopping"
                  ></i>
              </div>
            </div>
                  
          );
        })}
      </div>

      <div className={styles["card-container"]}>
        {card.slice(6, 12).map((item) => {
          return (
            <div key={item.id} className={styles["card"]}>
              <Link to={`/card/${item.id}`}>
              <img src={`/img/${item.img}.png`} />
              </Link>
              <h2>{item.item}</h2>
              <p className={styles["card-weight"]}>{item.weight}g</p>
              <p>{item.text}</p>
              <div className={styles["card-price-row"]}>
                <b>{item.price}$</b>
                <i
                  onClick={() => addToCart(item)}
                  className="fa-solid fa-basket-shopping"
                  ></i>
              </div>
            </div>
                  
          );
        })}
      </div>
    </>
  );
}

export default Card;
