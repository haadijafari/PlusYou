import styles from "./Contactus.module.css"

import { useState , useEffect } from "react";
import api from "../services/config";

import { AiFillInstagram } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'
import { FiLink } from "react-icons/fi";

const Wave = "./static/assets/Wave.svg"

function Contactus() {

  const [ inf , setInf ] = useState([])

  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const data = await api.get("/get-site-settings");
        setInf(data);  
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchInformation();
  }, []);

  const copyText = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <>
    <div className={styles.Separator}>
        <img src={Wave} alt="separator" />
      </div>
    <div className={styles.container}>
      <div className={styles.btnbox}>
        <button className={`${styles.buttons}`} onClick={() => copyText('https://example.com')}>
        Website<FiLink className={styles.icon}/></button>
        <button className={`${styles.buttons}`} onClick={() => window.location.href = `https://t.me/${inf.telegram}`}>
         Telegram<FaTelegram className={styles.icon}/></button>
        <button className={`${styles.buttons}`} onClick={() => window.location.href = `https://www.instagram.com/${inf.instagram}`}>
        Instagram<AiFillInstagram className={styles.icon}/></button>
      </div>
    </div>
    </>
  )
}

export default Contactus