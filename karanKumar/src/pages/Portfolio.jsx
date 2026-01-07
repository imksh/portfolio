import {useState} from "react";
import { FaCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { SiHyperskill } from "react-icons/si";

import styles from "./Portfolio.module.css";
import { Projects } from '../components/Projects';
import { Certificates } from '../components/Certificates';
import { MySkill } from '../components/MySkill';
export const Portfolio = () => {
    const [project, setProject] = useState(true);
    const [certificate, setCertificate] = useState(false);
    const [skill, setSkill] = useState(false);
    const handleProjectBtn = () =>{
        setProject(true);
        setCertificate(false);
        setSkill(false);
    }
    const handleCertificateBtn = () =>{
        setProject(false);
        setCertificate(true);
        setSkill(false);
    }
    const handleSkillBtn = () =>{
        setProject(false);
        setCertificate(false);
        setSkill(true);
    }
    return(
        <div className={styles.container}  data-aos="fade-up">
            <div className={styles.header}>
                <h2>PortFolio Showcase</h2>
                <p>Explore My journey through Projects, Certificates. And Technical Expertise. Each Section Represents a Milestone in My Continuous Learning Path</p>
            </div>

            <div className={styles.section1}>
                <button onClick={handleProjectBtn}><FaCode  className={styles.iconImg} /> Projects</button>
                <button onClick={handleCertificateBtn}><LiaCertificateSolid className={styles.iconImg}/> Certificates</button>
                <button onClick={handleSkillBtn}><SiHyperskill className={styles.iconImg}/> Skills</button>
            </div>
            {project ?  <Projects /> : null}
            {certificate ?  <Certificates /> : null}
            {skill ?  <MySkill /> : null}
        </div>

    )
}