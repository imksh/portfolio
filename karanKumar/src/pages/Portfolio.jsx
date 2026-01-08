import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { SiHyperskill } from "react-icons/si";
import { Projects } from "../components/Projects";
import { Certificates } from "../components/Certificates";
import { MySkill } from "../components/MySkill";
import { motion } from "motion/react";

export const Portfolio = () => {
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
    <motion.div
      initial={{ opacity: 0.2, x: 0, y: 200 }}
      whileInView={{ opacity: 0.8, x: 0, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col mt-8"
    >
      <div className="flex flex-col items-center justify-center text-center w-[90%] md:w-[70%] lg:w-[55%] mx-auto">
        <h2 className="text-2xl md:text-5xl font-extrabold text-clip1 my-4 ">
          PortFolio Showcase
        </h2>
        <p className="font-bold">
          Explore My journey through Projects, Certificates. And Technical
          Expertise. Each Section Represents a Milestone in My Continuous
          Learning Path
        </p>
      </div>

      <div className="flex mx-auto items-center justify-between md:grid md:grid-cols-3 md:gap-8 w-[95%] md:w-[70%] lg:w-[55%] mb-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          className="px-3 md:px-0 md:justify-center py-3 rounded-2xl btn-gradient1 mt-8 customHover flex items-center gap-2"
          onClick={handleProjectBtn}
        >
          <FaCode className="" /> Projects
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          className="px-3 md:px-0 md:justify-center  py-3 rounded-2xl btn-gradient1 mt-8 customHover flex items-center gap-2"
          onClick={handleCertificateBtn}
        >
          <LiaCertificateSolid className="" /> Certificates
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          className="px-3 md:px-0 md:justify-center  py-3 rounded-2xl btn-gradient1 mt-8 customHover flex items-center gap-2"
          onClick={handleSkillBtn}
        >
          <SiHyperskill className="" /> Skills
        </motion.button>
      </div>
      {project ? <Projects /> : null}
      {certificate ? <Certificates /> : null}
      {skill ? <MySkill /> : null}
    </motion.div>
  );
};
