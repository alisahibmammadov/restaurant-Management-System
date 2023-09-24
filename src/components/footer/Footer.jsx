import React from "react";
import styles from '../../assets/styles/footer/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandName}><img src="/img/Logo.svg" alt="" /></span>
        </div>
        <ul className={styles.links}>
          <li className={styles.a}>
            <a href="/">Ana Səhifə</a>
          </li>
          <li className={styles.links}>
            <a href="/about">Haqqımızda</a>
          </li>
          <li className={styles.a}>
            <a href="/contact">Əlaqə</a>
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
