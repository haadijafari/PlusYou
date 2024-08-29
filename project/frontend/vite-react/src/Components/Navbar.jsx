// import styles from "./Navbar.module.css"

// // import icons
// import { FaChevronRight } from "react-icons/fa6";
// import { ImMenu } from 'react-icons/im';
// import { AiOutlineAppstore } from "react-icons/ai";
// import { MdInfoOutline } from "react-icons/md";
// import { CiShare2 } from "react-icons/ci";
// import { IoBookOutline } from "react-icons/io5";
// import { PiSpeakerHighBold } from "react-icons/pi";


// import  { useState } from 'react';
// import { Link } from 'react-router-dom';

// const SideDrawer = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       {/* دکمه باز کردن منو */}
//       <button className={styles.drawerButton} onClick={toggleDrawer}>
//         {isOpen ? <FaChevronRight /> : <ImMenu />}
//       </button>

//       {/* منوی کشویی */}
//       <div className={`${styles.sideDrawer} ${isOpen ? styles.open : ''}`}>
//         {/* دکمه بستن منو در داخل منو */}
//         <button className={styles.closeButton} onClick={toggleDrawer}>
//         <FaChevronRight />
//         </button>
//         <ul className={styles.list}>
//           <li><MdInfoOutline className={styles.icon}/><Link to="./aboutUs" onClick={toggleDrawer}>درباره ما</Link></li>
//           <li><CiShare2 className={styles.icon}/><Link to="./introduction" onClick={toggleDrawer}>معرفی به دوستان</Link></li>
//           <li><AiOutlineAppstore className={styles.icon}/><Link to="./menu" onClick={toggleDrawer}>مشاهده منو</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SideDrawer;

