import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaCode,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdCloudDownload } from "react-icons/md";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { FaReact } from "react-icons/fa6";
import { FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import SkillsCard from "../components/SkillsCard";

export const About = () => {
  const width = window.innerWidth;
  const [text, setText] = useState("");
  const [inc, setInc] = useState(true);
  const word = "Full Stack Developer";
  const index = useRef(-1);

  const timeRef = useRef(null);

  useEffect(() => {
    const fun = () => {
      timeRef.current = setTimeout(() => {
        let updated;
        if (inc) {
          if (index.current >= word.length - 1) {
            updated = "Full Stack Developer";
            index.current = text.length - 1;
            setInc(false);
          } else {
            updated =
              text.slice(0, text.length - 1) + word.charAt(index.current) + "|";
            index.current = index.current + 1;
          }
        } else {
          if (index.current == 0) {
            updated = "";
            index.current = 0;
            setInc(true);
          } else {
            updated = text.slice(0, text.length - 2) + "|";
            index.current = index.current - 1;
          }
        }
        setText(updated);

        return () => {
          clearTimeout(timeRef.current);
        };
      }, 150);
    };
    fun();
  }, [text]);

  const location = useLocation();
  const page = location.pathname;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] min-h-[90dvh] items-center mt-4 md:mt-0">
        <motion.div
          className="w-[90%] md:w-[70%] mx-auto order-2 md:order-1"
          initial={{
            opacity: 0,
            x: -150,
            y: width > 500 ? (page === "/" ? -50 : -100) : 100,
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="my-4">
            <p className="font-bold">Hello its me</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-clip1 my-0.5">
              Karan Kumar
            </h2>
            <p className="text-[16px] md:text-2xl font-bold">{text || "‎"}</p>
          </div>
          <div className="md:w-[85%]">
            <p>
              We build stunning websites that rank higher and perform better,
              Let's create something amazing together!
            </p>
          </div>
          <div className="flex relative  gap-2 md:gap-4 my-3 items-center ">
            <motion.p
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="bg-gray-500 py-1 px-3 md:px-4 rounded-2xl cursor-pointer"
            >
              JavaScript
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="bg-gray-500 py-1 px-3 md:px-4 rounded-2xl cursor-pointer"
            >
              React
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="bg-gray-500 py-1 px-3 md:px-4 rounded-2xl cursor-pointer"
            >
              Node
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="bg-gray-500 py-1 px-3 md:px-4 rounded-2xl cursor-pointer"
            >
              Java
            </motion.p>
          </div>
          <div className="">
            <a href="https://api.whatsapp.com/send?phone=7295038835&text=Hi%20Karan%2C%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect.">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                className="px-8 py-3 rounded-lg btn-gradient1 mt-8 customHover flex items-center"
              >
                Let's Book A Call‎ ‎ ‎ <FaArrowRight />
              </motion.button>
            </a>
          </div>
          <div className="flex gap-10 my-8 ml-4 md:ml-0">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="shadow-[0_0_6px_10px_var(--primary)] p-4 rounded-full cursor-pointer"
            >
              <a href="https://github.com/imksh">
                <FaGithub />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="shadow-[0_0_6px_10px_var(--primary)] p-4 rounded-full cursor-pointer"
            >
              <a href="https://www.linkedin.com/in/imksh3">
                <FaLinkedin />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="shadow-[0_0_6px_10px_var(--primary)] p-4 rounded-full cursor-pointer"
            >
              <a href="https://www.linkedin.com/in/imksh3/">
                <FaInstagramSquare />
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          initial={{
            opacity: 0,
            x: 150,
            y: width < 500 ? (page === "/" ? -10 : -100) : 100,
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative shadow-[0_0_100px_2px_var(--primary)] mx-auto rounded-[40%] overflow-hidden cursor-pointer order-1 md:order-2"
        >
          <figure>
            <img
              src="/images/profile.png"
              alt="profile"
              className="grayscale h-52 md:h-100 relative top-8"
            />
          </figure>
        </motion.div>
      </div>

      <motion.div
        className="w-[95%] md:w-[80%] border-[0.5px] rounded-2xl mx-auto px-4 py-8 md:p-8 my-16"
        initial={{ opacity: 0.5, x: -150, y: 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-center md:text-3xl font-extrabold text-xl text-clip1 mb-8">
          About Me
        </h2>
        <p>
          Hi, I’m Karan Sharma — a passionate self-taught developer and tech
          explorer. I love building responsive user interfaces, diving into
          full-stack projects, and exploring the world of ethical hacking and
          cybersecurity. Whether it’s creating something with React or
          experimenting in Linux, I’m always eager to learn, solve real-world
          problems, and push my boundaries. Tech isn’t just a skill for me —
          it’s something I genuinely enjoy and grow with every day.
        </p>
        <div className="flex justify-around md:justify-center items-center md:gap-12">
          <a href="https://drive.google.com/drive/folders/1Ar5oRn0R4oCyd-CKKBih0-HI4eEYNYc4?usp=sharing">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="px-4 md:px-8 py-2 rounded-lg btn-gradient1 mt-8 customHover flex items-center gap-2"
            >
              <MdCloudDownload className="" /> Resume
            </motion.button>
          </a>
          <NavLink to="/project">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="px-4 md:px-8 py-2 rounded-lg btn-gradient1 mt-8 customHover flex items-center gap-2"
            >
              <FaCode className="" />
              Projects
            </motion.button>
          </NavLink>
        </div>
      </motion.div>

      <div className="p-[5%] grid grid-cols-2 md:grid-cols-4 mx-auto gap-4 mb-16">
        <h2 className="col-span-2 md:col-span-4 mb-16 font-bold text-2xl text-center md:text-3xl">
          Core Expertise
        </h2>
        <SkillsCard Icon={FaReact} percent={95} name="React" />
        <SkillsCard Icon={FaNodeJs} percent={85} name="Node.js" />
        <SkillsCard Icon={SiMongodb} percent={80} name="MongoDB" />
        <SkillsCard Icon={FaJsSquare} percent={90} name="JavaScript" />
      </div>
    </>
  );
};
