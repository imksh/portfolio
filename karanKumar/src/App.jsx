import { useEffect } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import { Scroll } from "./components/Scrool";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Project from "./pages/Project";
import { Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import useUiStore from "./store/useUiStore";
import ProjectPage from "./pages/ProjectPage";
import useLenis from "./hooks/useLenis";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

function App() {
  useLenis();
  const { setShowHeader } = useUiStore();
  return (
    <div
      onClick={() => {
        setShowHeader(false);
      }}
    >
      <Scroll />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />

      <motion.a
        initial={false}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/917295038835?text=Hi%20Karan%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        className="fixed bottom-5 right-5 z-50
             bg-[#25D366] w-14 h-14 rounded-full p-3
             shadow-[0_8px_25px_rgba(37,211,102,0.45)]"
      >
        <FaWhatsapp className="text-white w-full h-full" />
      </motion.a>
    </div>
  );
}

export default App;
