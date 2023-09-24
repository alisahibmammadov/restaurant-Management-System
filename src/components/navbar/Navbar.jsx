import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../../assets/styles/navbar/Navbar.module.css";

function Navbar({ cartItems }) {
  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.count,
    0
  );
  const getTotalItemAmount = cartItems.reduce(
    (total, item) => total + item.count * item.price,
    0
  );

  const [basket, setBasket] = useState(false);

  return (
    <div className={style.navbar}>
      <Link to="/">
        <img src="/img/Logo.svg" alt="" />
      </Link>
      <div className={style.links}>
        <Link className={style.link} to="/">
        Ana Səhifə
        </Link>
        <Link className={style.link} to="/about">
        Haqqımızda
        </Link>
        <Link className={style.link} to="/contact">
        Əlaqə
        </Link>
        {/* <Link className={style.link} to="/card/:id">
        Kateqoriyalar
        </Link> */}
        {/* <Link className={style.link} to="/">
          ДЕСЕРТЫ
        </Link> */}
        <Link className={style.link} to="/pos">
          POS
        </Link>
      </div>
      <div className={style.icons}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-user"></i>
        <div className={style.basket} onClick={() => setBasket(!basket)}>
          <i className="fa-solid fa-shop"></i>

          <span className={style.basketNum}>{totalItemCount}</span>

          {basket && totalItemCount !== 0 ? (
            <div className={style.basketBox}>
              {cartItems.map((item) => (
                <div key={item.id} className={style.basketRow}>
                  <img
                    src={`/img/${item.img}.png`}
                    alt=""
                    key={item.id}
                    className={style.basketImg}
                  />
                  <h2 className={style.basketHead}>{item.item}</h2>
                  <div className={style.priceNum}>
                    <span className={style.num}>{item.count} ədəd</span>
                    <span className={style.price}>
                      {(item.price * item.count).toFixed(1)}$
                    </span>
                  </div>
                </div>
              ))}
              <div className={style.totalPriceRow}>
                <span className={style.totalPrice}>Ödəniləcək cəmi: <span className={style.totalAmount}>{getTotalItemAmount}$</span> </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className={style.barsBox}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
