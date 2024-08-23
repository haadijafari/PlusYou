import { useEffect, useState } from "react"

import api from "../services/config";

import Modal from "../Components/Modal"

import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";

import styles from "./About.module.css"

function AboutUs() {

  const [ information, setInformation ] = useState([])

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await api.get("/get-site-settings");
        setInformation(data);  
        console.log(information);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchInfo();
  }, []);
  return (
    <div className={styles.cart}>
      <div className={styles.info}>
        <p><IoLocationSharp className={styles.icon}/> آدرس: {information.address}</p>
        <p><FaPhoneAlt className={styles.icon}/> شماره تماس: {information.phone}</p>
        <p><MdWatchLater className={styles.icon}/> ساعات کاری: {information.opening_closing}</p>
      </div>
      <div className={styles.map}>
        <Modal data={information}/>
      </div>
    </div>
  )
}

export default AboutUs