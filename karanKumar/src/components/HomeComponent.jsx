import styles from "../pages/Home.module.css";
import { TbWorld } from "react-icons/tb";
import { FaCode, FaJava, FaReact } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
export const HomeComponent = () => {
  return (
    <div className={styles.container} data-aos="zoom-in">
      <div className={styles.icons}>
        <div className={styles.icon}>
          <FaCode />
        </div>
        <div className={styles.icon}>
          <FaJava />
        </div>
        <div className={styles.icon}>
          <FaReact />
        </div>
      </div>
      <div className={styles.header}>
        <p>Welcome To My</p>
        <p>PortFolio Website</p>
      </div>
      <div className={styles.btnDiv}>
        <NavLink to="/contact">
          <button>
            <TbWorld className={styles.ic} />
            Contact
          </button>
        </NavLink>
      </div>
    </div>
  );
};
