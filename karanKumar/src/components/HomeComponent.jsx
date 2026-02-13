import { TbWorld } from "react-icons/tb";
import { FaCode, FaJava, FaReact } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { FaTelegramPlane } from "react-icons/fa";
import { useState, useEffect } from "react";

export const HomeComponent = () => {
  const navigate = useNavigate();
  const [bounce, setBounce] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setBounce("");
    }, 1000);
  }, [bounce]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col justify-center items-center min-h-[90dvh] "
    >
      <div className="flex gap-10 my-8">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          onClick={() => setBounce("code")}
          className="shadow-[0_0_6px_10px_var(--primary)] p-3 md:p-4 rounded-full cursor-pointer"
        >
          <motion.div
            animate={
              bounce === "code"
                ? { y: [0, -30, 0], rotate: "360deg" }
                : { y: 0 }
            }
            whileHover={{
              x: [-5, 0, 5, 0],
            }}
          >
            <FaCode size={24} />
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          }}
          onClick={() => setBounce("java")}
          className="shadow-[0_0_6px_10px_var(--primary)] p-3 md:p-4 cursor-pointer rounded-full"
        >
          <motion.div
            animate={
              bounce === "java"
                ? { y: [0, -30, 0], rotate: "360deg" }
                : { y: 0 }
            }
            whileHover={{
              x: [-5, 0, 5, 0],
            }}
          >
            <FaJava size={24} />
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 1,
          }}
          onClick={() => setBounce("react")}
          className="shadow-[0_0_6px_10px_var(--primary)] p-3 md:p-4 cursor-pointer rounded-full"
        >
          <motion.div
            animate={
              bounce === "react"
                ? { y: [0, -30, 0], rotate: "360deg" }
                : { y: 0 }
            }
            whileHover={{
              x: [-5, 0, 5, 0],
            }}
          >
            <FaReact size={24} />
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-2xl md:text-3xl font-extrabold">
          Hi, I’m Karan Kumar
        </p>
        <p className="text-3xl md:text-4xl font-extrabold text-clip1">
          Full Stack Developer
        </p>
      </div>
      <motion.div className="w-fit">
        <motion.div
          animate={{
            y: [60, 10, 10, 60, 60],
            x: [-100, -30, -30, -100, -100],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
          className="float-end"
        >
          <FaTelegramPlane size={22} className="" />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          onClick={() => navigate("/contact")}
          className="px-8 py-3 rounded-lg btn-gradient1 mt-8 customHover"
        >
          Contact Me
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
