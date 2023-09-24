import axios from 'axios';
import { Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from '../../assets/styles/singlePage/SinglePage.module.css';
import { useParams } from 'react-router-dom';
const Url = 'https://book-db-shakhmurad.vercel.app/posts-midas';
const apiUrl = 'https://book-db-shakhmurad.vercel.app/posts-midas/';

function SingleCard() {

    const [ cardsingle , setcardsingle ] = useState([])
  useEffect(() => {
    axios
      .get(Url)
      .then((response) => {
        setcardsingle(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const [card, setCard] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(apiUrl + id)
      .then((response) => {
        setCard(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const CountBlock = ({ title, weight, price }) => {
    const [count, setCount] = useState(0);

    return (
      <div className={styles['card-container-block']}>
        <div className={styles['card-single-page']}>
          <h3>{title}</h3>
          <p>{weight}</p>
        </div>
        <div className={styles['card-single-center']}>
          <p>{count} eded</p>
          <span onClick={() => setCount(count + 1)} className={styles['span-card-1']}>
            +
          </span>
          <span onClick={() => setCount(count - 1)} className={styles['span-card-2']}>
            -
          </span>
        </div>
        <div className={styles['card-single-end']}>
          <b>{price}$</b>
          <i className="fa-solid fa-basket-shopping"></i>
        </div>
      </div>
    );
  };

  return (
    <>
    <div className={styles['card-big-container']}>
      <div className={styles['card-single']}>
        {card ? (
          <>
            <h1>{card.item}</h1>
            <div className={styles['card-text-single']}>
              <p>Ana Sehve /</p>
              <p>{card.category}</p>
              <p className={styles['pElement']}>{card.item}</p>
            </div>
            <img src={`/img/${card.img}.png`} alt={card.item} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className={styles['card-single-block']}>
        {card ? (
          <>
            <h3>Çeşid:</h3>
            <CountBlock title={card.item} weight={`${card.weight}g`} price={`${card.price}`} />
          </>
        ) : (
          <p>Loading...</p>
        )}

        <h3>Təsvir:</h3>
        <p>Seçdiyiniz şirəli içlik ilə sıx ipək xinkali: ferma mal əti, mozzarella pendiri və ya ferma quzu əti və üzvi göyərtilərdən</p>
      </div>
    </div>

    <div className={styles['section-card']}>
            <h1>Tez-tez bu yeməyi ilə sifariş verilir:</h1>
            <div className={styles['singlecard-container']} >
            {
                cardsingle.slice(0,3).map(({id , img , text , item , price ,weight , category})=>{
                    return(
                        <Link to={'/'} >
                       <div key={id} className={styles["card"]}>
                            <img className={styles['single-img']} src={`/img/${img}.png`}/>
                                <h2>{item}</h2>
                            <p className={styles['card-weight']}>{weight}g</p>
                                <p>{text}</p>
                            <div className={styles['card-price-row']}>
                                <b>{price}</b> 
                                <i className="fa-solid fa-basket-shopping"></i>
                            </div>
                       </div>
                       </Link>
                    )
                })
            }
            </div>
        </div>


    
    </>
  );
}

export default SingleCard;