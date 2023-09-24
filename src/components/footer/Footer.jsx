import React from "react";
import styles from "../../assets/styles/footer/Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandName}>
            <img src="/img/Logo.svg" alt="" />
          </span>
        </div>
        <ul className={styles.links}>
          <li className={styles.a}>
            <Link to="/">Ana Səhifə</Link>
          </li>
          <li className={styles.links}>
            <Link to="/about">Haqqımızda</Link>
          </li>
          <li className={styles.a}>
            <Link to="/contact">Əlaqə</Link>
          </li>
        </ul>
        <div className={styles.right}>
          <span className={styles.brandName}>delivery@gmail.com</span>
        </div>
      </div>
      <div className={styles.bothrefm}>
        <div className={styles.container}>
          <p>© 2021 Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
