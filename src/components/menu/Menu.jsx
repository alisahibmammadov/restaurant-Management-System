// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import styles from '../../assets/styles/menu/Menu.module.css'
// import Slider from "react-slick";



// const Menu = () => {
//     const [menu, setMenu] = useState([])

    
//     useEffect(() => {
//         const getData = async () => {
//             const data = await fetch('https://book-db-shakhmurad.vercel.app/posts-midas1')
//             const response = await data.json()
//             setMenu(response)
//             // console.log(response);
//         }
//         getData()
//     }, [])

//     const settings = {
//         infinite: true,
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 1000,
//         autoplaySpeed: 2000,
//         cssEase: "ease-in-out",
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 4,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <div className={styles.mainMenu}>
//             <h2 className={styles.title}>
//                 MENYU
//             </h2>
//             <div className={styles.images}>
//                 <Slider {...settings}>
//                     {menu.map((item) => (
//                         <div key={item.id} className={styles.cardImage}>
//                             <img src={`/img/${item.img}.png`} alt="" />
//                         </div>
//                     ))
//                     }
//                 </Slider>
//             </div>
//         </div>
//     )
// }

// export default Menu

// ***************************

import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import styles from './Menu.module.css'
// import Slider from "react-slick";



const Menu = () => {
    const [menu, setMenu] = useState([])

    const getData = async () => {
        const response = await axios.get('https://book-db-shakhmurad.vercel.app/posts-midas1')
        setMenu(response.data)
        console.log(response.data);
        return response
    }
    useEffect(() => {
        getData()
    }, [])

    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.mainMenu}>
            <h2 className={styles.title}>
                MENYU
            </h2>
            <div className={styles.images}>
                {/* <Slider {...settings}> */}
                {menu.map((item, index) => (
                    <div key={index} className={styles.cardImage}>
                        {/* <img src={`/img/${item?.img}.png`} alt="" /> */}
                        <img src={`/img/${item.img}.png`} alt=""  style={{color:'#000'}}/>
                        <h4 className={styles.item_title}>
                            {item.item}
                        </h4>
                    </div>

                ))
                }
                {/* </Slider> */}
            </div>
        </div>
    )
}

export default Menu