import styles from "./Footer.module.css";
import {
  FaEnvelope,
  FaArrowRight,
  FaRegCopyright,
  FaHeart,
  FaInfinity,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
      <div className={styles.container1}>
        <p className={styles.p}>Have projects in mind?</p>
        <p>Let's work together</p>
        <a href="https://api.whatsapp.com/send?phone=7295038835&text=Hi%20Karan%2C%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect.">
          <button>
            Book a Call <FaArrowRight className={styles.icon} />
          </button>
        </a>
      </div>
      <div className={styles.container}>
        <div className={styles.contact}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=karan03945@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <FaEnvelope className={styles.icon} />
            </p>{" "}
            <p>
              <p className={styles.p}>Email</p> karan03945@gmail.com
            </p>
          </a>
          <a href="sms:+919201274547">
            <p>
              <FaEnvelope className={styles.icon} />
            </p>{" "}
            <p>
              <p className={styles.p}>Contact</p>+91 7295038835
            </p>
          </a>
        </div>
        <div className={styles.links}>
          <ul>
            <p>Quick Links</p>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/myportfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.container3}>
        <p>
          <FaRegCopyright className={styles.icon} /> 2025 | Website made with{" "}
          <FaHeart className={styles.icon} style={{ color: "red" }} />
        </p>
        <p>
          <FaInfinity className={styles.icon} /> IdioticMinds
        </p>
      </div>
    </div>
  );
};
