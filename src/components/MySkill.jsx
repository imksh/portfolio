import { FaJava,FaReact } from "react-icons/fa6";
import styles from "./MySkill.module.css"
import { SiSpring } from "react-icons/si";
import { FaHtml5,FaJsSquare,FaCss3Alt,FaNodeJs,FaDatabase } from "react-icons/fa";
export const MySkill = () => {
    return(
        <>
        <div className={styles.skillContaineer}>
            <div className={styles.skillDiv}><FaJava className={styles.iconImg} style={{color:"#007396"}}/><p>Java</p></div>
            <div className={styles.skillDiv}><FaReact  className={styles.iconImg} style={{color:"#3596b2"}}/> <p>React</p> </div>
            <div className={styles.skillDiv}><FaNodeJs  className={styles.iconImg} style={{color:"#3596b2"}}/> <p>NodeJs</p> </div>
            <div className={styles.skillDiv}><FaHtml5  className={styles.iconImg} style={{color:"#b2443a"}}/> <p>HTML</p> </div>
            <div className={styles.skillDiv}><FaCss3Alt  className={styles.iconImg} style={{color:"#4b98d0"}}/> <p>CSS</p> </div>
            <div className={styles.skillDiv}><FaJsSquare  className={styles.iconImg}  style={{color:"yellow"}}/> <p>JavaScript</p> </div>
            <div className={styles.skillDiv}><FaDatabase  className={styles.iconImg} style={{color:"gray"}}/> <p>DataBase</p> </div>
            <div className={styles.skillDiv}><SiSpring  className={styles.iconImg} style={{color:"green"}}/> <p>SpringBoot</p> </div>
        </div>
        </>
    )
}