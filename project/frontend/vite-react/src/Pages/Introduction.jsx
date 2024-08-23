import { AiFillInstagram } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'
import { FiLink } from "react-icons/fi";

import { useState , useEffect } from 'react';

import styles from "./Introduction.module.css"
import api from '../services/config';

function introduction() {
  const [ inf , setInf ] = useState([])

  useEffect(() => {
    const fetchCagtegory = async () => {
      try {
        const data = await api.get("/get-site-settings");
        setInf(data);  
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCagtegory();
  }, []);
  return (
    <div className={styles.container}>
      <div className="d-grid gap-3 col-5 mx-auto">
        <button className="btn btn-primary" onClick={() => window.location.href = `https://t.me/${inf.telegram}`}>
         Telegram<FaTelegram /></button>
        <button className="btn btn-danger" onClick={() => window.location.href = `https://www.instagram.com/${inf.instagram}`}>
        Instagram<AiFillInstagram /></button>
        <button className="btn btn-secondary" onClick={() => window.location.href = 'https://botostart.ir'}>
        Website<FiLink /></button>
      </div>
    </div>
  )
}

export default introduction