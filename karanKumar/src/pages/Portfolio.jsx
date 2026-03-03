import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { SiHyperskill } from "react-icons/si";
import { Projects } from "../components/Projects";
import { Certificates } from "../components/Certificates";
import { MySkill } from "../components/MySkill";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";

export const Portfolio = () => {
  const MotionDiv = motion.div;
  const location = useLocation();
  const [project, setProject] = useState(true);
  const [certificate, setCertificate] = useState(false);
  const [skill, setSkill] = useState(false);
  const handleProjectBtn = () => {
    setProject(true);
    setCertificate(false);
    setSkill(false);
  };
  const handleCertificateBtn = () => {
    setProject(false);
    setCertificate(true);
    setSkill(false);
  };
  const handleSkillBtn = () => {
    setProject(false);
    setCertificate(false);
    setSkill(true);
  };
  return (
    <MotionDiv
      initial={{ opacity: 0.2, x: 0, y: 200 }}
      whileInView={{ opacity: 0.8, x: 0, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="section-container flex flex-col mt-10"
    >
      {location.pathname === "/portfolio" && (
        <SEO
          title="Portfolio Projects, Certificates & Skills | Karan Kumar"
          description="Explore full stack projects, technical certificates, and core development skills by Karan Kumar across React, Node.js, MongoDB, and modern web technologies."
          keywords="developer portfolio projects, React projects, full stack projects, programming certificates, web development skills"
          canonical="https://imksh.online/portfolio"
          image="/images/portfolio-website/1.png"
        />
      )}
      <div className="flex flex-col items-center justify-center text-center w-[95%] md:w-[75%] lg:w-[60%] mx-auto">
        <h2 className="text-2xl md:text-5xl font-extrabold text-clip1 my-4 ">
          PortFolio Showcase
        </h2>
        <p className="font-bold subtle-text">
          Explore My journey through Projects, Certificates. And Technical
          Expertise. Each Section Represents a Milestone in My Continuous
          Learning Path
        </p>
      </div>

      <div className="glass-surface rounded-2xl py-2 px-1 flex mx-auto items-center justify-between md:grid md:grid-cols-3 md:gap-3 w-[98%] md:w-[75%] lg:w-[60%] mb-12 mt-5">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          className={`px-2 md:px-0 md:justify-center py-3 rounded-xl flex items-center gap-1 transition ${
            project ? "btn-gradient1 customHover" : "hover:text-(--primary)"
          }`}
          onClick={handleProjectBtn}
        >
          <FaCode className="" /> Projects
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          className={`px-2 md:px-0 md:justify-center py-3 rounded-xl flex items-center gap-1 transition ${
            certificate ? "btn-gradient1 customHover" : "hover:text-(--primary)"
          }`}
          onClick={handleCertificateBtn}
        >
          <LiaCertificateSolid className="" /> Certificates
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          className={`px-2 md:px-0 md:justify-center py-3 rounded-xl flex items-center gap-1 transition ${
            skill ? "btn-gradient1 customHover" : "hover:text-(--primary)"
          }`}
          onClick={handleSkillBtn}
        >
          <SiHyperskill className="" /> Skills
        </motion.button>
      </div>
      {project ? <Projects /> : null}
      {certificate ? <Certificates /> : null}
      {skill ? <MySkill /> : null}
    </MotionDiv>
  );
};
