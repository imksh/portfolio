import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillsCard = ({ Icon, percent = 80, name }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [curr, setCurr] = useState("");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!curr) return;

    setTimeout(() => {
      setCurr("");
    }, 1000);
  }, [curr]);

  // Counter animation
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1200;
      const increment = percent / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= percent) {
          setCount(percent);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, percent]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{y:-10,scale:1.05}}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col items-center gap-4 w-40 md:w-56 mx-auto"
      onMouseEnter={() => setCurr(name)}
    >
      {/* Icon */}
      <motion.div
        animate={name === "React" ? { rotate: 360 } : { y: [0, -16, 0] }}
        transition={
          name === "React"
            ? { duration: 5, repeat: Infinity, ease: "linear" }
            : { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
        className="text-5xl text-purple-500"
      >
        <Icon />
      </motion.div>

      {/* Name */}
      <h3 className="text-lg font-semibold">{name}</h3>

      {/* Percentage */}
      <p className="text-2xl font-bold text-purple-400">{count}%</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percent}%` } : {}}
          transition={{ duration: 1.2 }}
          className="h-full bg-linear-to-r from-purple-500 to-pink-500"
        />
      </div>
    </motion.div>
  );
};

export default SkillsCard;
