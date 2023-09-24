import React, { useState } from 'react' 
import style from '../../assets/styles/contact/Contact.module.css' 
 
const Contact = () => { 
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('') 
    const [number, setNumber] = useState('') 
 
    const handleName = (e) => { 
        setName(e.target.value) 
    } 
    const handleEmail = (e) => { 
        setEmail(e.target.value) 
    } 
    const handleNumber = (e) => { 
        setNumber(e.target.value) 
    } 
    const handleSubmit = () => { 
        alert( 
            name + " " + 
            email + " " + 
            number 
        ) 
    }  
    return ( 
        <div className={style['container']}> 
            <div className={style['wrapper']}> 
                <h1 className={style['head']}>Sifarişlərin verilməsi</h1> 
                <h3 className={style['h3-style']}>Əsas / Səbət / Sifarişlərin verilməsi</h3> 
            </div> 
            <div className="contact"> 
                <h1 className={style['kontakt']}>01. Kontakt Məlumatları</h1> 
            </div> 
 
            <div className={style['row']}> 
                <h3>Bizdən alış veriş etmisiniz?</h3> 
                <p>Şəxsi hesabınıza daxil olun və bütün məlumatlarınız avtomatik olaraq doldurulacaq</p> 
                <form className={style['formik']}> 
                    <div className={style['name']}> 
                        <p>AD *</p> 
                    <input type="text" value={name} onChange={handleName}/> 
                    </div> 
                    <div className={style['name']}> 
                        <p>TELEFON *</p> 
                    <input type="text" /> 
                    </div> 
                    <div className={style['name']}> 
                        <p>EMAIL</p> 
                    <input type="E-mail" onChange={handleEmail}/> 
                    </div> 
                    <div className={style['names']}> 
                        <p>ŞƏXSLƏRİN SAYI</p> 
                    <input type="number" onChange={handleNumber}/> 
                    </div> 
                    <button onClick={handleSubmit} className={style['btn']}>Göndər</button> 
                     
                </form> 
 
            </div> 
            
        </div> 
    ) 
} 
 
export default Contact