import { FaJava, FaReact } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import {
  FaHtml5,
  FaJsSquare,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react";
import { SiMysql } from "react-icons/si";
import { useState, useEffect } from "react";
import { SiMongodb } from "react-icons/si";

const data = [
  { name: "Java", color: "#007396", icon: FaJava },
  { name: "React", color: "#3596b2", icon: FaReact },
  { name: "NodeJs", color: "#3596b2", icon: FaNodeJs },
  { name: "ReactNative", color: "#3596b2", icon: TbBrandReactNative },
  { name: "HTML", color: "#b2443a", icon: FaHtml5 },
  { name: "Tailwind", color: "#0EA5E9", icon: RiTailwindCssFill },
  { name: "CSS", color: "#4b98d0", icon: FaCss3Alt },
  { name: "Nativewind", color: "#0EA5E9", icon: RiTailwindCssFill },
  { name: "JavaScript", color: "yellow", icon: FaJsSquare },
  { name: "DataBase", color: "gray", icon: FaDatabase },
  { name: "MySQL", color: "#00758F", icon: SiMysql },
  { name: "MongoDB", color: "green", icon: SiMongodb },
  { name: "Git", color: "#F05033", icon: FaGitAlt },
  { name: "GitHub", color: "#181717", icon: FaGithub },
];

export const MySkill = () => {
  const [bounce, setBounce] = useState("");
  const [shake, setShake] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setBounce("");
    }, 1000);
  }, [bounce]);

  useEffect(() => {
    setTimeout(() => {
      setShake("");
    }, 1000);
  }, [shake]);

  return (
    <>
      <h2 className="text-center text-2xl mt-8 font-bold">Technology Stack</h2>
      <div className="grid grid-cols-3 md:grid-cols-7 w-[90%] md:w-[85%] mx-auto gap-4 md:gap-8 my-16">
        {data.map((item, indx) => {
          const Icon = item.icon;
          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              key={indx}
              onTap={() => {
                setBounce(indx);
              }}
              onMouseEnter={() => setShake(indx)}
              className={`bg-[#353c43] aspect-square rounded-full flex flex-col justify-center items-center gap-2 hover:shadow-[0_0_30px_4px_var(--primary)]  cursor-pointer ${
                bounce === indx
                  ? "shadow-[inset_0_0_30px_4px_var(--primary)]"
                  : ""
              }`}
            >
              <motion.div
                animate={
                  bounce === indx
                    ? { y: [0, -30, 0], rotate: "360deg" }
                    : { y: 0 }
                }
                whileHover={{
                  x: [-5, 0, 5, 0],
                }}
              >
                <Icon className="" style={{ color: item.color }} size={40} />
              </motion.div>
              <p>{item.name}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
