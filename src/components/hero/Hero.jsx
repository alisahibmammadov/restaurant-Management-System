import React from 'react'
import styles from '../../assets/styles/hero/Hero.module.css'
// import img from '../../../public/img/hero.jpg'
// import img2 from '../../../public/img/heroUniun.png'
// import img3 from '../../../public/img/heroText.png'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.left}>
                <p>
                    ləzzət və keyfiyeti birləşdirərək 24.09.2023 tarixində şəhərimizdə xidmət verməyə başladı.
                </p>
                <div className={styles.img}>
                    <img src="/img/Uniun.png" alt="" />
                </div>
                <span>
                    delivery@midas.rest
                </span>
            </div>
            <div className={styles.right} >
                <img src="/img/hero.jpeg" alt="" />
                <div className={styles.right_red}>
                    <img src="/img/heroText.png" alt="" />
                    <div className={styles.text}>
                        <h3>
                            Somon biftek
                            tərəvəz ilə
                        </h3>
                        <p>
                            Yüngül qovrulmuş ferma tərəvəzlərinin şirələri və ətri ilə isladılmış vəhşi qızılbalıq biftek
                        </p>
                        <span className={styles.price}>
                            30 AZN
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero