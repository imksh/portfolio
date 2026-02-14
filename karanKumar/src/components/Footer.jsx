import { motion } from "motion/react";
import infinity from "../assets/animations/infinity.json";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, x: 0, y: 200 }}
      whileInView={{ opacity: 0.8, x: 0, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mt-8 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
        <p className="!text-2xl md:!text-6xl font-extrabold text-clip1">
          Have projects in mind?
        </p>
        <p className=" !text-xl md:!text-3xl font-bold">Let's work together</p>
        <a href="https://api.whatsapp.com/send?phone=7295038835&text=Hi%20Karan%2C%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect.">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            className="px-5 md:px-6 py-2.5 rounded-lg btn-gradient1 mt-4 md:mt-8 customHover flex gap-2 items-center justify-between"
          >
            Book a Call <IoIosArrowForward className="font-bold text-xl" />
          </motion.button>
        </a>
      </div>
      {/* BOTTOM SECTION */}
      <div className="w-full mt-16 pt-16 pb-6 px-6 md:px-20 text-white">
        <div className="grid md:grid-cols-3 gap-12">
          {/* LEFT - About */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-clip1">
              Karan Kumar
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Building modern web experiences with performance, scalability and
              clean architecture. Passionate about full-stack development and
              crafting meaningful digital products.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              className="w-full h-50 rounded-2xl overflow-hidden shadow-md mt-4"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3665.126467487355!2d77.46651307460527!3d23.27485397899774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDE2JzI5LjUiTiA3N8KwMjgnMDguNyJF!5e0!3m2!1sen!2sin!4v1770983332431!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* CENTER - Quick Links */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-clip1">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li>
                <NavLink to="/" className="">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* RIGHT - Contact */}
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-clip1 ">
              Contact
            </h2>
            <a
              href="https://maps.app.goo.gl/NvqFrqdQL7qd8eVm8"
              className="text-gray-300"
            >
              📍 Ayodhya Nagar, Bhopal
            </a>
            <a href="tel:+917295038835" className="text-gray-300">
              📞 +91 7295038835
            </a>
            <a href="mailto:karan03945@gmail.com" className="text-gray-300">
              ✉️ karan03945@gmail.com
            </a>
            <div className="flex gap-4 items-center mt-4">
              {/* WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/917295038835?text=Hi%20Karan%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaWhatsapp className="text-white w-6 h-6" />
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/imksh.3"
                target="_blank"
                className="w-12 h-12 rounded-2xl overflow-hidden"
              >
                <img
                  src="/images/insta-logo.webp"
                  alt="instagram"
                  className=""
                />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Karan Kumar | All rights reserved |
          Crafted with ❤️
        </div>
      </div>
    </motion.div>
  );
};
