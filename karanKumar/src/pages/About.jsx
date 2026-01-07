import styles from "./About.module.css";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaFileDownload,
  FaCode,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdCloudDownload } from "react-icons/md";

export const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.about} data-aos="fade-up-right">
          <div className={styles.name}>
            <h2>Karan Sharma</h2>
          </div>
          <div className={styles.desc}>
            <p>
              We build stunning websites that rank higher and perform better,
              Let's create something amazing together!
            </p>
          </div>
          <div className={styles.skills}>
            <p>JavaScript</p>
            <p>React</p>
            <p>Java</p>
            <p>ReactNative</p>
          </div>
          <div className={styles.btnDiv}>
            <a href="https://api.whatsapp.com/send?phone=7295038835&text=Hi%20Karan%2C%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect.">
              <button>
                Let's Book A Call‎ ‎ ‎ <FaArrowRight />
              </button>
            </a>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <a href="https://github.com/imksh">
                <FaGithub />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.linkedin.com/in/imksh3">
                <FaLinkedin />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.linkedin.com/in/imksh3/">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.mainImg} data-aos="fade-down-left">
          <figure>
            <img src="/images/profile.png" alt="profile" />
          </figure>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.aboutMe} data-aos="fade-right">
          <h2>About Me</h2>
          <p>
            Hi, I’m Karan Sharma — a passionate self-taught developer and tech
            explorer. I love building responsive user interfaces, diving into
            full-stack projects, and exploring the world of ethical hacking and
            cybersecurity. Whether it’s creating something with React or
            experimenting in Linux, I’m always eager to learn, solve real-world
            problems, and push my boundaries. Tech isn’t just a skill for me —
            it’s something I genuinely enjoy and grow with every day.
          </p>
          <div className={`${styles.btnDivAbout}`}>
            <a href="https://drive.google.com/drive/folders/1Ar5oRn0R4oCyd-CKKBih0-HI4eEYNYc4?usp=sharing">
              <button>
                {" "}
                <MdCloudDownload className={styles.btnIcons} /> Resume
              </button>
            </a>
            <NavLink to="/project">
              <button>
                <FaCode className={styles.btnIcons} />
                Projects
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
