import useUiStore from "../store/useUiStore";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Header = () => {
  const { hide, showHeader, setShowHeader, setShowHeaderMenu, showHeaderMenu } =
    useUiStore();
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname;
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowHeaderMenu(false);
        setShowHeader(false);
      } else {
        setShowHeaderMenu(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setShowHeader, setShowHeaderMenu]);

  if (hide) {
    return null;
  }
  return (
    <div
      className={`fixed top-0 left-0 w-full z-99 text-white flex flex-col px-4 md:px-16 min-h-[10dvh] justify-center bg-(--headerColor) ${showHeaderMenu ? "translate-y-0" : "-translate-y-full"} transition duration-500`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex  justify-between  items-center h-[10dvh] z-99 bg-(--headerColor)">
        <motion.button
          whileTap={{ scale: 0.5 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <p className="text-xl md:text-3xl font-bold ">Karan Kumar</p>
        </motion.button>

        <div className="hidden md:flex list-none gap-4  items-center  my-auto">
          <motion.button
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className={`cursor-pointer ${
              page === "/" ? "text-(--primary)" : ""
            }`}
            onClick={() => navigate("/")}
          >
            Home
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className={`cursor-pointer ${
              page === "/about" ? "text-(--primary)" : ""
            }`}
            onClick={() => navigate("/about")}
          >
            About
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className={`cursor-pointer ${
              page === "/portfolio" ? "text-(--primary)" : ""
            }`}
            onClick={() => navigate("/portfolio")}
          >
            Portfolio
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className={`cursor-pointer ${
              page === "/contact" ? "text-(--primary)" : ""
            }`}
            onClick={() => navigate("/contact")}
          >
            Contact
          </motion.button>
          |
          <motion.a
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            href="https://github.com/imksh"
          >
            <FaGithub className="text-xl"/>
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/imksh3"
          >
            <FaLinkedin className="text-xl" />
          </motion.a>
        </div>

        <div className="flex md:hidden">
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              setShowHeader(!showHeader);
            }}
          >
            {showHeader ? (
              <IoCloseSharp size={30} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {showHeader && (
          <motion.div
            className="flex  md:hidden flex-col items-baseline gap-3 mx-4 mb-4 z-20"
            exit={{ opacity: 0, y: -100 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowHeader(false);
                navigate("/");
              }}
              className={`cursor-pointer w-full flex justify-baseline ${
                page === "/" ? "text-(--primary)" : ""
              }`}
            >
              Home
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowHeader(false);
                navigate("/about");
              }}
              className={`cursor-pointer w-full flex justify-baseline ${
                page === "/about" ? "text-(--primary)" : ""
              }`}
            >
              About
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowHeader(false);
                navigate("/portfolio");
              }}
              className={`cursor-pointer w-full flex justify-baseline ${
                page === "/portfolio" ? "text-(--primary)" : ""
              }`}
            >
              Portfolio
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowHeader(false);
                navigate("/contact");
              }}
              className={`cursor-pointer w-full flex justify-baseline ${
                page === "/contact" ? "text-(--primary)" : ""
              }`}
            >
              Contact
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
