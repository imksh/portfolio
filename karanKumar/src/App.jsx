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

function App() {
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
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
