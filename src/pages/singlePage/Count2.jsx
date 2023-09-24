import styles from '../../assets/styles/singlePage/SinglePage.module.css';
import {useState } from 'react'
function Count2() {
    const [ count , setcount ] = useState(0)
  return (
    <>
    <p>{count} eded</p>
    <span onClick={()=>setcount(count+1)} className={styles['span-card-1']} >+</span>
    <span onClick={()=>setcount(count-1)} className={styles['span-card-2']} >-</span>
    </>
  )
}

export default Count2