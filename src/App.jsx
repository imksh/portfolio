import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import { Scroll } from "./components/Scrool";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";
import Project from "./pages/Project";
import {Routes,Route} from "react-router-dom"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <Scroll />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/myportfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
