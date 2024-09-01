import { useState, useEffect } from "react";

import Modal from "../Components/Modal"


import styles from "./Layout.module.css"

import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import api from "../services/config";


function Layout({children}) {

  const [ information, setInformation ] = useState([])

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await api.get("/get-site-settings");
        setInformation(data);  
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchInfo();
  }, []);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
      
      <h3 className={styles.title}>Plus You</h3>
    </header>

      {children}

      <footer className={styles.footer}>
      <div className={styles.aboutUs}>
        <div className={styles.info}>
         <p className={styles.text}><IoLocationSharp className={styles.icon}/> آدرس: {information.address}</p>
         <p className={styles.text}><FaPhoneAlt className={styles.icon}/> شماره تماس: {information.phone}</p>
         <p className={styles.text}><MdWatchLater className={styles.icon}/> ساعات کاری: {information.opening_closing}</p>
        </div>
      </div>
      <div className={styles.map}>
      <Modal data={information}/>
      </div>
      </footer>
      <div className={styles.author}>
         <span className={styles.authors}>
           <a href="https://github.com/MaryamMirafzal" target="_blank" rel="noopener noreferrer">Mirafzal</a>
           <span>&</span>
           <a href="https://github.com/haadijafari" target="_blank" rel="noopener noreferrer">Jafari</a>
         </span>
           <p className={styles.txt}>
           تمامی حقوق برای کافه پلاس یو محفوض است  {new Date().getFullYear()} Copyright &copy;
           </p>
        </div>
    </div>
  )
}

export default Layout