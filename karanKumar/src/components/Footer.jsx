import {
  FaEnvelope,
  FaArrowRight,
  FaRegCopyright,
  FaHeart,
  FaInfinity,
} from "react-icons/fa";

import { motion } from "motion/react";
import infinity from "../assets/animations/infinity.json";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
import { SiImessage } from "react-icons/si";

export const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, x: 0, y: 200 }}
      whileInView={{ opacity: 0.8, x: 0, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mt-8 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
        <p className="text-2xl md:text-6xl font-extrabold text-clip1">
          Have projects in mind?
        </p>
        <p className="md:text-3xl font-bold">Let's work together</p>
        <a href="https://api.whatsapp.com/send?phone=7295038835&text=Hi%20Karan%2C%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect.">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            className="px-5 md:px-6 py-2.5 rounded-lg btn-gradient1 mt-4 md:mt-8 customHover flex gap-4 items-center justify-between"
          >
            Book a Call <FaArrowRight className="" />
          </motion.button>
        </a>
      </div>
      <div className="flex w-[90%] md:w-[60%] mt-16 mx-auto justify-between items-center">
        <div className="flex flex-col md:gap-4 gap-10">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=karan03945@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 md:gap-4"
          >
            <FaEnvelope className="w-7 h-7 md:w-12 md:h-12 text-(--primary)" />

            <div className="flex flex-col relative">
              <p className="text-(--primary) text-2xl md:my-1">Email</p>
              <p className="absolute -bottom-5 md:static">
                karan03945@gmail.com
              </p>
            </div>
          </a>
          <a href="sms:+917295038835" className="flex gap-2 md:gap-4">
            <SiImessage className="w-7 h-7 md:w-12 md:h-12 text-(--primary)" />

            <div className="flex flex-col relative min-w-30">
              <p className="text-(--primary) text-2xl md:my-1">Contact</p>
              <p className="absolute -bottom-5 md:static">+91 7295038835</p>
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <ul className="flex flex-col items-center justify-center text-center gap-1">
            <li className="text-2xl font-bold text-clip1 mb-2">Quick Links</li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col text-[12px] gap-2 my-4 md:text-[16px] items-center justify-center p-2 text-gray-500">
        <motion.div whileTap={{ scale: 0.8 }}>
          <Lottie
            animationData={infinity}
            loop
            autoplay
            className="w-40 h-40 cursor-pointer"
          />
        </motion.div>
        <p>Crafted with ❤️ | ©️ IdioticMinds</p>
      </div>
    </motion.div>
  );
};
