import React from 'react'
import styles from '../../assets/styles/About/About.module.css'

const About = () => {
    return (
        <main>
            <div className={styles.header}>
                <img src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <p>
                        Şəhərin mərkəzində, sıcacıq və samimi bir atmosferdə sizləri qarşılamağımızdan məmnuniyyət duyuruq. Azərbaycan/Baki mətbəxinin ən xüsusi ləzzətlərini sizin üçün təqdim edirik.

                        Seçdiyimiz bütün ingredientlərin təzəliyini və keyfiyyətini önə çıxartmağa çalışaraq, təcrübəli şeflərimizin əllərində həqiqi bir incəsənət əsərinə çevrilən yeməklərimizlə sizi büyüləməyi ümid edirik. Ənənəvi ləzzətlərimizi müasir tərtiblərlə birləşdirərək sizə unudulmaz bir yemək təcrübəsi yaşatmaq istəyirik.
                    </p>
                </div>
                <div className={styles.right}>
                    <img src="https://images.pexels.com/photos/2888679/pexels-photo-2888679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
            </div>
            <p className={styles.bottom}>
                Sizin memnuniyyətiniz bizim üçün ən önəmlisidir. MIDAS sizi yüksək standartlarda xidmət və ləzzətlə tanış etmək üçün burada.
            </p>
        </main>
    )
}

export default About